import { Request, Response } from "express";
import { GetAllCustomersService } from "../../services/Customer/GetAllCustomersService";

export class GetAllCustomersController {
  async handle(request: Request, response: Response) {
    const service = new GetAllCustomersService();
    const customers = await service.execute();
    return response.json(customers);
  }
}