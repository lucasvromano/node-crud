import { Request, Response } from "express";
import { GetAllSchedulesService } from "../../services/Schedule/GetAllSchedulesService";

export class GetAllSchedulesController {
  async handle(request: Request, response: Response) {
    const service = new GetAllSchedulesService();
    const schedules = await service.execute();
    return response.json(schedules);
  }
}