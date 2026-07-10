import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Testimonial, TestimonialSchema } from './schema/testimonial.schema';
import { TestimonialsController } from './controllers/testimonials.controller';
import { TestimonialsService } from './services/testimonials.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Testimonial.name, schema: TestimonialSchema }])],
  controllers: [TestimonialsController],
  providers: [TestimonialsService],
  exports: [TestimonialsService],
})
export class TestimonialsModule {}
