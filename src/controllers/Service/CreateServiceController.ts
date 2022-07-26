import { CreateServiceService } from './../../services/Service/CreateServiceService';
import { Request, Response } from "express";

export class CreateServiceController {
  async handle(request: Request, response: Response) {
    const { service, price } = request.body;
    const newService = new CreateServiceService();
    const result = await newService.execute({ service, price });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result)
  }
}