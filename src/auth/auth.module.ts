import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './auth.guard';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AuthGuard],
  exports: [],
})
export class AuthModule {}
