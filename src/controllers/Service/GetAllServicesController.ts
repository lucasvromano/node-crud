import { Request, Response } from "express";
import { GetAllServicesService } from "../../services/Service/GetAllServicesService";

export class GetAllServicesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllServicesService();
    const services = await service.execute();
    return response.json(services);
  }
}