import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import {
  Public,
  AdminAndSuperAdmin,
  RequirePermissions,
} from '@common/decorators/authorization.decorator';
import { Permission } from '@common/enums/permission.enum';
import { TestimonialsService } from '../services/testimonials.service';
import { CreateTestimonialDto, UpdateTestimonialDto } from '../dtos/testimonial.dto';

@ApiTags('testimonials')
@Controller('testimonials')
export class TestimonialsController {
  constructor(private readonly testimonialsService: TestimonialsService) {}

  @Public()
  @Get('public')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'List active testimonials (public)' })
  async listPublic() {
    const data = await this.testimonialsService.listPublicActive();
    return { message: 'Testimonials retrieved successfully', data };
  }

  @ApiBearerAuth()
  @AdminAndSuperAdmin()
  @RequirePermissions(Permission.TESTIMONIAL_LIST)
  @Get()
  @HttpCode(HttpStatus.OK)
  async list(@Query() query: Record<string, unknown>) {
    const result = await this.testimonialsService.listAdmin(query);
    return { message: 'Testimonials retrieved successfully', data: result.data, meta: result.meta };
  }

  @ApiBearerAuth()
  @AdminAndSuperAdmin()
  @RequirePermissions(Permission.TESTIMONIAL_CREATE)
  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() dto: CreateTestimonialDto) {
    const data = await this.testimonialsService.createTestimonial(dto);
    return { message: 'Testimonial created successfully', data };
  }

  @ApiBearerAuth()
  @AdminAndSuperAdmin()
  @RequirePermissions(Permission.TESTIMONIAL_READ)
  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findOne(@Param('id') id: string) {
    const data = await this.testimonialsService.findById(id);
    return { message: 'Testimonial retrieved successfully', data };
  }

  @ApiBearerAuth()
  @AdminAndSuperAdmin()
  @RequirePermissions(Permission.TESTIMONIAL_UPDATE)
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Param('id') id: string, @Body() dto: UpdateTestimonialDto) {
    const data = await this.testimonialsService.updateTestimonial(id, dto);
    return { message: 'Testimonial updated successfully', data };
  }

  @ApiBearerAuth()
  @AdminAndSuperAdmin()
  @RequirePermissions(Permission.TESTIMONIAL_DELETE)
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async remove(@Param('id') id: string) {
    await this.testimonialsService.delete(id);
    return { message: 'Testimonial deleted successfully', data: null };
  }
}
