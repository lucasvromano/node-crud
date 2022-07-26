import { User } from '../../entities/User';
import { getRepository } from 'typeorm';

export class DeleteUserService {
  async execute(id: string) {
    const repo = getRepository(User);

    if (!await repo.findOne(id)) {
      return new Error('User does not exists!')
    }

    await repo.delete(id);

  }
}