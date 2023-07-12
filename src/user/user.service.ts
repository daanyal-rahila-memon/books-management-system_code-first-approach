import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entity/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRespository: Repository<User>,
  ) {}

  async findUserByEmail(email: string) {
    let user: User = await this.userRespository.findOne({
      where: { email: email },
    });
    return user;
  }
}
