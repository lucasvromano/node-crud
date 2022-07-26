import { Schedule } from '../../entities/Schedule';
import { getRepository } from 'typeorm';

export class DeleteScheduleService {
  async execute(id: string) {
    const repo = getRepository(Schedule);

    if (!await repo.findOne(id)) {
      return new Error('Schedule does not exists!')
    }

    await repo.delete(id);
  }
}