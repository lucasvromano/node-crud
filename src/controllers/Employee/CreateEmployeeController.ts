import { CreateEmployeeService } from './../../services/Employee/CreateEmployeeService';
import { Request, Response } from "express";

export class CreateEmployeeController {
  async handle(request: Request, response: Response) {
    const { name, document, phone, email, salary, birthday } = request.body;
    const service = new CreateEmployeeService();
    const result = await service.execute({ name, document, phone, email, salary, birthday });

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.json(result)
  }
}