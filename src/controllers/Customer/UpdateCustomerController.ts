import { Request, Response } from "express";
import { UpdateCustomerService } from "../../services/Customer/UpdateCustomerService";

export class UpdateCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, document, phone, email, birthday } = request.body;

    const service = new UpdateCustomerService();
    const result = await service.execute({ id, name, document, phone, email, birthday })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }
}