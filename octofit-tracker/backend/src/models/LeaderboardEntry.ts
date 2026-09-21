import mongoose, { Schema, model } from 'mongoose';

export interface LeaderboardEntryDocument {
  rank: number;
  userName: string;
  teamName: string;
  totalPoints: number;
  workoutsCompleted: number;
}

const leaderboardEntrySchema = new Schema<LeaderboardEntryDocument>(
  {
    rank: { type: Number, required: true },
    userName: { type: String, required: true },
    teamName: { type: String, required: true },
    totalPoints: { type: Number, required: true },
    workoutsCompleted: { type: Number, required: true },
  },
  { timestamps: true, collection: 'leaderboard' },
);

export const LeaderboardEntryModel =
  mongoose.models.LeaderboardEntry || model<LeaderboardEntryDocument>('LeaderboardEntry', leaderboardEntrySchema);