import mongoose, { Schema, model } from 'mongoose';

export interface UserDocument {
  name: string;
  email: string;
  teamName: string;
  role: string;
  weeklyGoalMinutes: number;
}

const userSchema = new Schema<UserDocument>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teamName: { type: String, required: true },
    role: { type: String, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true, collection: 'users' },
);

export const UserModel = mongoose.models.User || model<UserDocument>('User', userSchema);