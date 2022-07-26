import { Request, Response } from "express";
import { UpdateScheduleService } from "../../services/Schedule/UpdateScheduleService";

export class UpdateScheduleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { customer_id, employee_id, service_id, date } = request.body;

    const service = new UpdateScheduleService();
    const result = await service.execute({ id, customer_id, employee_id, service_id, date })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }
}