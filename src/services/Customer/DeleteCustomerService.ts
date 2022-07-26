import { Customer } from '../../entities/Customer';
import { getRepository } from 'typeorm';

export class DeleteCustomerService {
  async execute(id: string) {
    const repo = getRepository(Customer);

    if (!await repo.findOne(id)) {
      return new Error('Customer does not exists!')
    }

    await repo.delete(id);

  }
}