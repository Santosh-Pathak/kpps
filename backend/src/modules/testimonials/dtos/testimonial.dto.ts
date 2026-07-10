import { IsString, IsOptional, IsBoolean, IsNumber, MinLength, MaxLength } from 'class-validator';
import { ApiProperty, ApiPropertyOptional, PartialType } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateTestimonialDto {
  @ApiProperty({ example: 'Priya Mehta' })
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  name: string;

  @ApiPropertyOptional({ example: 'Parent' })
  @IsOptional()
  @IsString()
  role?: string;

  @ApiProperty({ example: 'Excellent school with caring teachers.' })
  @IsString()
  @MinLength(5)
  quote: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  imageUrl?: string;

  @ApiPropertyOptional({ default: true })
  @IsOptional()
  @IsBoolean()
  active?: boolean;

  @ApiPropertyOptional({ default: 0 })
  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  sortOrder?: number;
}

export class UpdateTestimonialDto extends PartialType(CreateTestimonialDto) {}
