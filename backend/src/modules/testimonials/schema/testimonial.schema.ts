import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TestimonialDocument = Testimonial & Document;

@Schema({
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (_doc: Document, ret: Record<string, unknown>) => {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
      return ret;
    },
  },
})
export class Testimonial {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ trim: true })
  role?: string;

  @Prop({ required: true, trim: true })
  quote: string;

  @Prop()
  imageUrl?: string;

  @Prop({ default: true })
  active: boolean;

  @Prop({ default: 0 })
  sortOrder: number;
}

export const TestimonialSchema = SchemaFactory.createForClass(Testimonial);
TestimonialSchema.index({ active: 1, sortOrder: 1 });
