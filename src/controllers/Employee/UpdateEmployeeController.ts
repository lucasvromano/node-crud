import { Request, Response } from "express";
import { UpdateEmployeeService } from "../../services/Employee/UpdateEmployeeService";

export class UpdateEmployeeController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { name, document, phone, email, salary, birthday } = request.body;

    const service = new UpdateEmployeeService();
    const result = await service.execute({ id, name, document, phone, email, salary, birthday })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }
}