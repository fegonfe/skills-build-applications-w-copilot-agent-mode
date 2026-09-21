import mongoose from 'mongoose';
import { ActivityModel } from '../models/Activity.js';
import { LeaderboardEntryModel } from '../models/LeaderboardEntry.js';
import { TeamModel } from '../models/Team.js';
import { UserModel } from '../models/User.js';
import { WorkoutModel } from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Seed the octofit_db database with test data');
    console.log('Connected to octofit_db');

    await Promise.all([
      UserModel.deleteMany({}),
      TeamModel.deleteMany({}),
      ActivityModel.deleteMany({}),
      LeaderboardEntryModel.deleteMany({}),
      WorkoutModel.deleteMany({}),
    ]);

    await TeamModel.insertMany([
      { name: 'Velocity Vipers', mascot: 'Viper', captain: 'Maya Patel', memberCount: 8, weeklyPoints: 1840 },
      { name: 'Core Crusaders', mascot: 'Shield', captain: 'Noah Brooks', memberCount: 7, weeklyPoints: 1695 },
      { name: 'Flex Force', mascot: 'Falcon', captain: 'Ava Chen', memberCount: 6, weeklyPoints: 1520 },
    ]);

    await UserModel.insertMany([
      {
        name: 'Maya Patel',
        email: 'maya.patel@example.com',
        teamName: 'Velocity Vipers',
        role: 'Team Captain',
        weeklyGoalMinutes: 240,
      },
      {
        name: 'Noah Brooks',
        email: 'noah.brooks@example.com',
        teamName: 'Core Crusaders',
        role: 'Member',
        weeklyGoalMinutes: 210,
      },
      {
        name: 'Ava Chen',
        email: 'ava.chen@example.com',
        teamName: 'Flex Force',
        role: 'Team Captain',
        weeklyGoalMinutes: 225,
      },
      {
        name: 'Jordan Kim',
        email: 'jordan.kim@example.com',
        teamName: 'Velocity Vipers',
        role: 'Member',
        weeklyGoalMinutes: 180,
      },
    ]);

    await ActivityModel.insertMany([
      {
        userName: 'Maya Patel',
        type: 'Cycling',
        durationMinutes: 45,
        points: 210,
        completedAt: new Date('2026-09-18T13:30:00Z'),
      },
      {
        userName: 'Noah Brooks',
        type: 'Strength Training',
        durationMinutes: 50,
        points: 240,
        completedAt: new Date('2026-09-19T16:00:00Z'),
      },
      {
        userName: 'Ava Chen',
        type: 'Yoga',
        durationMinutes: 35,
        points: 145,
        completedAt: new Date('2026-09-20T11:15:00Z'),
      },
      {
        userName: 'Jordan Kim',
        type: 'Trail Run',
        durationMinutes: 40,
        points: 195,
        completedAt: new Date('2026-09-21T07:45:00Z'),
      },
    ]);

    await LeaderboardEntryModel.insertMany([
      { rank: 1, userName: 'Noah Brooks', teamName: 'Core Crusaders', totalPoints: 720, workoutsCompleted: 5 },
      { rank: 2, userName: 'Maya Patel', teamName: 'Velocity Vipers', totalPoints: 690, workoutsCompleted: 5 },
      { rank: 3, userName: 'Jordan Kim', teamName: 'Velocity Vipers', totalPoints: 610, workoutsCompleted: 4 },
      { rank: 4, userName: 'Ava Chen', teamName: 'Flex Force', totalPoints: 575, workoutsCompleted: 4 },
    ]);

    await WorkoutModel.insertMany([
      {
        title: 'Morning Mobility Reset',
        focusArea: 'Flexibility',
        level: 'Beginner',
        durationMinutes: 20,
        suggestedFor: 'Recovery days and desk workers',
      },
      {
        title: 'Tempo Ride Builder',
        focusArea: 'Cardio',
        level: 'Intermediate',
        durationMinutes: 45,
        suggestedFor: 'Cyclists building weekly endurance',
      },
      {
        title: 'Full-Body Strength Circuit',
        focusArea: 'Strength',
        level: 'Intermediate',
        durationMinutes: 40,
        suggestedFor: 'Members chasing leaderboard points',
      },
      {
        title: 'Hill Sprint Finisher',
        focusArea: 'Conditioning',
        level: 'Advanced',
        durationMinutes: 25,
        suggestedFor: 'Runners improving power and speed',
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
