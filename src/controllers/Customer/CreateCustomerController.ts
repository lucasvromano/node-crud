import { Request, Response } from "express";
import { CreateCustomerService } from "../../services/Customer/CreateCustomerService";

export class CreateCustomerController {
  async handle(request: Request, response: Response) {
    const { name, document, phone, email, birthday } = request.body;
    const service = new CreateCustomerService();
    const result = await service.execute({ name, document, phone, email, birthday });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result)
  }
}