import { GetAllVideosService } from '../../services/Video/GetAllVideosService';
import { Request, Response } from "express";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new GetAllVideosService();
    const videos = await service.execute();
    return response.json(videos);
  }
}