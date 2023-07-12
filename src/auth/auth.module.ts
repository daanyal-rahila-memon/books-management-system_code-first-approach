import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthGuard } from './auth.guard';
import { UserModule } from 'src/user/user.module';
import { JwtGuard } from './jwt.guard';

@Module({
  imports: [UserModule],
  controllers: [],
  providers: [AuthGuard, JwtGuard],
  exports: [],
})
export class AuthModule {}
