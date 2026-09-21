import { Router } from 'express';
import { TeamModel } from '../models/Team.js';

const teamsRouter = Router();

teamsRouter.get('/', async (_request, response, next) => {
  try {
    const teams = await TeamModel.find().sort({ weeklyPoints: -1 }).lean();
    response.json({ teams });
  } catch (error) {
    next(error);
  }
});

export default teamsRouter;