import { getRepository } from "typeorm";
import { Employee } from "../../entities/Employee";

type EmployeeRequest = {
  name: string;
  document: string;
  phone: string;
  email: string;
  salary: number;
  birthday: Date;
}

export class CreateEmployeeService {

  async execute({ name, document, phone, email, salary, birthday }: EmployeeRequest): Promise<Employee | Error> {
    const repo = getRepository(Employee);

    if (await repo.findOne({ document, phone, email })) {
      return new Error('Employee already exists');
    }

    const employee = repo.create({
      name,
      document,
      phone,
      email,
      salary,
      birthday
    })

    await repo.save(employee)
    return employee;
  }

}