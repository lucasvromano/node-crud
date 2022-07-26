import { getRepository } from 'typeorm';
import { Schedule } from '../../entities/Schedule';

type ScheduleUpdateRequest = {
  id: string;
  customer_id: string;
  employee_id: string;
  service_id: string;
  date: Date;
}

export class UpdateScheduleService {
  async execute({ id, customer_id, employee_id, service_id, date }: ScheduleUpdateRequest) {
    const repo = getRepository(Schedule);
    const schedule = await repo.findOne(id);

    if (!schedule) {
      return new Error('User does not exists!')
    }

    schedule.customer_id = customer_id ? customer_id : schedule.customer_id;
    schedule.employee_id = employee_id ? employee_id : schedule.employee_id;
    schedule.service_id = service_id ? service_id : schedule.service_id;
    schedule.date = date ? date : schedule.date;
    
    await repo.save(schedule);

    return schedule;
  }
}