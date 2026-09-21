import { Router } from 'express';
import { WorkoutModel } from '../models/Workout.js';

const workoutsRouter = Router();

workoutsRouter.get('/', async (_request, response, next) => {
  try {
    const workouts = await WorkoutModel.find().sort({ level: 1, title: 1 }).lean();
    response.json({ workouts });
  } catch (error) {
    next(error);
  }
});

export default workoutsRouter;