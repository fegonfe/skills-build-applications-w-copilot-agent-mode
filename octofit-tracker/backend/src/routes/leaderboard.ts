import { Router } from 'express';
import { LeaderboardEntryModel } from '../models/LeaderboardEntry.js';

const leaderboardRouter = Router();

leaderboardRouter.get('/', async (_request, response, next) => {
  try {
    const leaderboard = await LeaderboardEntryModel.find().sort({ rank: 1 }).lean();
    response.json({ leaderboard });
  } catch (error) {
    next(error);
  }
});

export default leaderboardRouter;