import { Module, Global } from '@nestjs/common';
import { AzureBlobService } from './services/azure-blob.service';
import { AzureEmailService } from './services/azure-email.service';
import { CloudinaryService } from './services/cloudinary.service';
import { EmailService } from './services/email.service';
import { FactoryService } from './services/factory.service';

@Global()
@Module({
  providers: [AzureBlobService, AzureEmailService, CloudinaryService, EmailService, FactoryService],
  exports: [AzureBlobService, AzureEmailService, CloudinaryService, EmailService, FactoryService],
})
export class SharedModule {}
