import { Request, Response } from "express";
import { DeleteScheduleService } from "../../services/Schedule/DeleteScheduleService";

export class DeleteScheduleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params
    const service = new DeleteScheduleService();
    const result = await service.execute(id);

    if (result instanceof Error) {
      return response.status(400).json(result.message);
    }

    return response.status(204).end;
  }
}