import { Request, Response } from "express";
import { DeleteCustomerService } from "../../services/Customer/DeleteCustomerService";

export class DeleteCustomerController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const service = new DeleteCustomerService();
    const result = await service.execute(id);

    if(result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end;
  }
}