import { Employee } from './../../entities/Employee';
import { getRepository } from 'typeorm';

type EmployeeUpdateRequest = {
  id: string;
  name: string;
  document: string;
  phone: string;
  email: string;
  salary: number;
  birthday: Date;
}

export class UpdateEmployeeService {
  async execute({ id, name, document, phone, email, salary, birthday }: EmployeeUpdateRequest) {
    const repo = getRepository(Employee);
    const employee = await repo.findOne(id);

    if (!employee) {
      return new Error('Employee does not exists!')
    }

    employee.name = name ? name : employee.name;
    employee.document = document ? document : employee.document;
    employee.phone = phone ? phone : employee.phone;
    employee.email = email ? email : employee.email;
    employee.salary = salary ? salary : employee.salary;
    employee.birthday = birthday ? birthday : employee.birthday;
    await repo.save(employee);

    return employee;
  }
}