import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Area } from './area.entity';
import { Department } from '../department.entity';
import { In } from 'typeorm';

@Injectable()
export class AreaService extends TypeOrmCrudService<Area> {
  constructor(@InjectRepository(Area) repo) {
    super(repo);
  }
  async findByName(names: string[]): Promise<Area[]> {
    try {
      if (names.length === 0) {
        return Promise.reject({
          statusCode: 400,
          message: 'Area name must be an array of string',
        });
      }
      const res = await this.repo.find({
        where: { name: In(names) },
      });
      return res;
    } catch (err) {
      return Promise.reject(err);
    }
  }
}
