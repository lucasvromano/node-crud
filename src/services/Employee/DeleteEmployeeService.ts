import { Employee } from '../../entities/Employee';
import { getRepository } from 'typeorm';

export class DeleteEmployeeService {
  async execute(id: string) {
    const repo = getRepository(Employee);

    if (!await repo.findOne(id)) {
      return new Error('Employee does not exists!')
    }

    await repo.delete(id);

  }
}