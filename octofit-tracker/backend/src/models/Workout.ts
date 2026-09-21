import mongoose, { Schema, model } from 'mongoose';

export interface WorkoutDocument {
  title: string;
  focusArea: string;
  level: string;
  durationMinutes: number;
  suggestedFor: string;
}

const workoutSchema = new Schema<WorkoutDocument>(
  {
    title: { type: String, required: true },
    focusArea: { type: String, required: true },
    level: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    suggestedFor: { type: String, required: true },
  },
  { timestamps: true, collection: 'workouts' },
);

export const WorkoutModel = mongoose.models.Workout || model<WorkoutDocument>('Workout', workoutSchema);