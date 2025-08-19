import express from 'express';
import { Express } from 'express';
import 'dotenv/config.js';
import country_router from './routes/country_route';

const app: Express = express();

app.use(express.json());

app.use('/', country_router);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at door ${process.env.API_PORT}.`);
});