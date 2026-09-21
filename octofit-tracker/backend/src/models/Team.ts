import mongoose, { Schema, model } from 'mongoose';

export interface TeamDocument {
  name: string;
  mascot: string;
  captain: string;
  memberCount: number;
  weeklyPoints: number;
}

const teamSchema = new Schema<TeamDocument>(
  {
    name: { type: String, required: true, unique: true },
    mascot: { type: String, required: true },
    captain: { type: String, required: true },
    memberCount: { type: Number, required: true },
    weeklyPoints: { type: Number, required: true },
  },
  { timestamps: true, collection: 'teams' },
);

export const TeamModel = mongoose.models.Team || model<TeamDocument>('Team', teamSchema);