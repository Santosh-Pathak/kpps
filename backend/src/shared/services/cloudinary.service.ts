import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { v2 as cloudinary, UploadApiResponse } from 'cloudinary';

export type CloudinaryResourceType = 'image' | 'raw' | 'video' | 'auto';

export interface CloudinaryUploadOptions {
  folder?: string;
  publicId?: string;
  resourceType?: CloudinaryResourceType;
}

export interface CloudinaryUploadResult {
  url: string;
  publicId: string;
  width?: number;
  height?: number;
  format?: string;
}

@Injectable()
export class CloudinaryService implements OnModuleInit {
  private readonly logger = new Logger(CloudinaryService.name);
  private configured = false;

  constructor(private readonly configService: ConfigService) {}

  onModuleInit() {
    const cloudName = this.configService.get<string>('cloudinary.cloudName');
    const apiKey = this.configService.get<string>('cloudinary.apiKey');
    const apiSecret = this.configService.get<string>('cloudinary.apiSecret');

    if (!cloudName || !apiKey || !apiSecret) {
      this.logger.warn(
        'Cloudinary configuration is incomplete. Uploads will fail until configured.',
      );
      return;
    }

    cloudinary.config({
      cloud_name: cloudName,
      api_key: apiKey,
      api_secret: apiSecret,
      secure: true,
    });

    this.configured = true;
    this.logger.log('Cloudinary configured successfully');
  }

  isConfigured(): boolean {
    return this.configured;
  }

  async uploadBuffer(
    buffer: Buffer,
    options: CloudinaryUploadOptions = {},
  ): Promise<CloudinaryUploadResult> {
    if (!this.configured) {
      throw new Error('Cloudinary is not configured');
    }

    return new Promise((resolve, reject) => {
      const uploadOptions = {
        folder: options.folder ?? 'kpps',
        public_id: options.publicId,
        resource_type: (options.resourceType ?? 'auto') as CloudinaryResourceType,
        overwrite: true,
      };

      cloudinary.uploader
        .upload_stream(uploadOptions, (error, result: UploadApiResponse | undefined) => {
          if (error || !result) {
            return reject(error ?? new Error('Cloudinary upload failed'));
          }

          resolve({
            url: result.secure_url,
            publicId: result.public_id,
            width: result.width,
            height: result.height,
            format: result.format,
          });
        })
        .end(buffer);
    });
  }

  async delete(
    publicId: string,
    resourceType: Exclude<CloudinaryResourceType, 'auto'> = 'image',
  ): Promise<unknown> {
    if (!this.configured) {
      throw new Error('Cloudinary is not configured');
    }

    return cloudinary.uploader.destroy(publicId, { resource_type: resourceType });
  }
}
