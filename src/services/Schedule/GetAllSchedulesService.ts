import { getRepository } from 'typeorm';
import { Schedule } from '../../entities/Schedule';

export class GetAllSchedulesService {
  async execute() {
    const repo = getRepository(Schedule);
    const schedules = await repo.find({
      relations: ['customer', 'employee', 'service']
    });

    return schedules;
  }
}