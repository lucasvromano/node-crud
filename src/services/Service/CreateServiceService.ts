import { Service } from './../../entities/Service';
import { getRepository } from "typeorm";

type ServiceRequest = {
  service: string;
  price: number;
}

export class CreateServiceService {

  async execute({ service, price }: ServiceRequest): Promise<Service | Error> {
    const repo = getRepository(Service);

    if (await repo.findOne({ service })) {
      return new Error('Service already exists');
    }

    const newService = repo.create({
      service,
      price
    })

    await repo.save(newService)
    return newService;
  }

}