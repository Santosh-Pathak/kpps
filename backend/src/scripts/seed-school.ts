/**
 * Seed school CMS defaults: site settings + admin user.
 *
 * Usage (from backend folder, with MONGODB_URI set):
 *   npx ts-node -r tsconfig-paths/register src/scripts/seed-school.ts
 */
import mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';
import * as fs from 'fs';
import * as path from 'path';

function loadEnvFile(filePath: string) {
  if (!fs.existsSync(filePath)) return;
  const content = fs.readFileSync(filePath, 'utf8');
  for (const line of content.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eq = trimmed.indexOf('=');
    if (eq <= 0) continue;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (!process.env[key]) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(path.resolve(process.cwd(), '.env'));
loadEnvFile(path.resolve(process.cwd(), '.env.local'));

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/kpps';

async function seed() {
  await mongoose.connect(MONGODB_URI);
  const db = mongoose.connection.db;
  if (!db) {
    throw new Error('MongoDB connection failed');
  }

  await db.collection('sitesettings').updateOne(
    { _id: 'singleton' as unknown as mongoose.Types.ObjectId },
    {
      $setOnInsert: {
        _id: 'singleton',
        schoolName: 'Kids Paradise Senior Secondary School',
        tagline: 'Nurturing Minds, Building Futures',
        primaryColor: '#1e3a5f',
        accentColor: '#f59e0b',
        foundedYear: '2001',
        affiliationBoard: 'CBSE',
        totalStudents: '2000+',
        phone1: '+91 00000 00000',
        emailOffice: 'info@kpps.edu.in',
        address: '123 School Road, City, State – 000000',
        admissionsOpen: true,
        admissionsYear: '2025-26',
        showFeeStructure: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    { upsert: true },
  );

  const password = await bcrypt.hash('Admin@kpps123', 12);
  await db.collection('users').updateOne(
    { email: 'admin@kpps.edu.in' },
    {
      $setOnInsert: {
        name: 'KPPS Admin',
        email: 'admin@kpps.edu.in',
        password,
        role: 'admin',
        isActive: true,
        isEmailVerified: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    },
    { upsert: true },
  );

  console.log('✅ Seed complete: site settings + admin@kpps.edu.in');
  await mongoose.disconnect();
}

seed().catch(async (err) => {
  console.error(err);
  await mongoose.disconnect();
  process.exit(1);
});
