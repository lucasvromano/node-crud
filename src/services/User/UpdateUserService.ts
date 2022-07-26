import { getRepository } from 'typeorm';
import { User } from '../../entities/User';

type UserUpdateRequest = {
  id: string;
  user: string;
  password: string;
  employee_id: string;
}

export class UpdateUserService {
  async execute({ id, user, password, employee_id }: UserUpdateRequest) {
    const repo = getRepository(User);
    const userUpdated = await repo.findOne(id);

    if (!userUpdated) {
      return new Error('User does not exists!')
    }

    userUpdated.user = user ? user : userUpdated.user;
    userUpdated.password = password ? password : userUpdated.password;
    userUpdated.employee_id = employee_id ? employee_id : userUpdated.employee_id;
    
    await repo.save(userUpdated);

    return userUpdated;
  }
}