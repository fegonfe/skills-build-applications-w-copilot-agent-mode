import cors from 'cors';
import express from 'express';
//import { getApiBaseUrl } from './config/apiUrl.js';
import './config/database.js';
import activitiesRouter from './routes/activities.js';
import leaderboardRouter from './routes/leaderboard.js';
import teamsRouter from './routes/teams.js';
import usersRouter from './routes/users.js';
import workoutsRouter from './routes/workouts.js';

const app = express();
const port = 8000;
//const apiBaseUrl = getApiBaseUrl(port);
const codespaceName = process.env.CODESPACE_NAME;

let apiBaseUrl;
if (codespaceName) {
  apiBaseUrl = `https://${codespaceName}-8000.app.github.dev`;
} else {
  apiBaseUrl = `http://localhost:8000`;
}

const allowedOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  ...(codespaceName ? [`https://${codespaceName}-5173.app.github.dev`] : []),
];

app.use(cors({ origin: allowedOrigins }));
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/teams', teamsRouter);
app.use('/api/activities', activitiesRouter);
app.use('/api/leaderboard', leaderboardRouter);
app.use('/api/workouts', workoutsRouter);

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', apiBaseUrl });
});

app.listen(port, '0.0.0.0', () => {
  console.log(`OctoFit Tracker API listening at ${apiBaseUrl}`);
});
