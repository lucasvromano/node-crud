import { Employee } from './../../entities/Employee';
import { getRepository } from 'typeorm';

export class GetAllEmployeesService {
  async execute() {
    const repo = getRepository(Employee)
    const employee = await repo.find();
    return employee;
  }
}