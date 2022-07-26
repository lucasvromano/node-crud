import { Request, Response } from "express";
import { UpdateServiceService } from "../../services/Service/UpdateServiceService";

export class UpdateServiceController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { service, price } = request.body;

    const updatedService = new UpdateServiceService();
    const result = await updatedService.execute({ id, service, price })

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }
}