import { Request, Response } from "express";
import { GetAllEmployeesService } from "../../services/Employee/GetAllEmployeesService";

export class GetAllEmployeeController {
  async handle(request: Request, response: Response) {
    const service = new GetAllEmployeesService();
    const employee = await service.execute();
    return response.json(employee);
  }
}