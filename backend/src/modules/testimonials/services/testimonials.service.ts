import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BaseService } from '@shared/services/base.service';
import { Testimonial, TestimonialDocument } from '../schema/testimonial.schema';
import { CreateTestimonialDto, UpdateTestimonialDto } from '../dtos/testimonial.dto';

@Injectable()
export class TestimonialsService extends BaseService<TestimonialDocument> {
  constructor(
    @InjectModel(Testimonial.name) private readonly testimonialModel: Model<TestimonialDocument>,
  ) {
    super(testimonialModel);
  }

  async createTestimonial(dto: CreateTestimonialDto): Promise<TestimonialDocument> {
    return this.create(dto);
  }

  async updateTestimonial(id: string, dto: UpdateTestimonialDto): Promise<TestimonialDocument> {
    return this.update(id, dto);
  }

  async listAdmin(query: Record<string, unknown>) {
    return this.findAll(query);
  }

  async listPublicActive() {
    return this.testimonialModel.find({ active: true }).sort({ sortOrder: 1 }).exec();
  }
}
