import { getRepository } from 'typeorm';
import { Customer } from '../../entities/Customer';
import { Employee } from '../../entities/Employee';
import { Schedule } from '../../entities/Schedule';
import { Service } from '../../entities/Service';

type ScheduleRequest = {
  customer_id: string;
  employee_id: string;
  service_id: string;
  date: Date;
}

export class CreateScheduleService {
  async execute({
    customer_id,
    employee_id,
    service_id,
    date
  }: ScheduleRequest): Promise<Error | Schedule> {
    const repo = getRepository(Schedule);
    const repoCustomer = getRepository(Customer);
    const repoEmployee = getRepository(Employee);
    const repoService = getRepository(Service);

    if (!await repoCustomer.findOne(customer_id)) {
      return new Error('Customer does not exists!')
    }

    if (!await repoEmployee.findOne(employee_id)) {
      return new Error('Employee does not exists!')
    }

    if (!await repoService.findOne(service_id)) {
      return new Error('Service does not exists!')
    }

    const schedule = repo.create({ customer_id, employee_id, service_id, date });
    await repo.save(schedule);
    return schedule;
  }
}