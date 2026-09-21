import mongoose, { Schema, model } from 'mongoose';

export interface ActivityDocument {
  userName: string;
  type: string;
  durationMinutes: number;
  points: number;
  completedAt: Date;
}

const activitySchema = new Schema<ActivityDocument>(
  {
    userName: { type: String, required: true },
    type: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    points: { type: Number, required: true },
    completedAt: { type: Date, required: true },
  },
  { timestamps: true, collection: 'activities' },
);

export const ActivityModel = mongoose.models.Activity || model<ActivityDocument>('Activity', activitySchema);