
import { getRepository } from 'typeorm';
import { Category } from '../../entities/Category';
import { Employee } from '../../entities/Employee';
import { User } from '../../entities/User';

type UserRequest = {
  user: string;
  password: string;
  employee_id: string;
}

export class CreateUserService {
  async execute({
    user,
    password,
    employee_id
  }: UserRequest): Promise<Error | User> {
    const repo = getRepository(User);
    const repoEmployee = getRepository(Employee);

    if (!await repoEmployee.findOne(employee_id)) {
      return new Error('Employee does not exists!')
    }

    const newUser = repo.create({ user, password, employee_id });
    await repo.save(newUser);
    return newUser;
  }
}