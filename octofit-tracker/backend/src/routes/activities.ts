import { Router } from 'express';
import { ActivityModel } from '../models/Activity.js';

const activitiesRouter = Router();

activitiesRouter.get('/', async (_request, response, next) => {
  try {
    const activities = await ActivityModel.find().sort({ completedAt: -1 }).lean();
    response.json({ activities });
  } catch (error) {
    next(error);
  }
});

export default activitiesRouter;