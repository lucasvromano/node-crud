import { getRepository } from 'typeorm';
import { Service } from '../../entities/Service';

type ServiceUpdateRequest = {
  id: string;
  service: string;
  price: number;
}

export class UpdateServiceService {
  async execute({ id, service, price }: ServiceUpdateRequest) {
    const repo = getRepository(Service);
    const updatedService = await repo.findOne(id);

    if (!updatedService) {
      return new Error('Service does not exists!')
    }

    updatedService.service = service ? service : updatedService.service;
    updatedService.price = price ? price : updatedService.price;
    await repo.save(updatedService);

    return updatedService;
  }
}