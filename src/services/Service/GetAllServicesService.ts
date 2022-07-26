import { Service } from '../../entities/Service';
import { getRepository } from 'typeorm';

export class GetAllServicesService {
  async execute() {
    const repo = getRepository(Service)
    const services = await repo.find();
    return services;
  }
}