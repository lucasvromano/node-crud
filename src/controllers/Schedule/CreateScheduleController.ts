import { Request, Response } from "express";
import { CreateScheduleService } from "../../services/Schedule/CreateScheduleService";

export class CreateScheduleController {
  async handle(request: Request, response: Response) {
    const { customer_id, employee_id, service_id, date } = request.body;

    const service = new CreateScheduleService();

    const result = await service.execute({
      customer_id,
      employee_id,
      service_id,
      date
    });

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result);
  }
}