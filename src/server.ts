import express from 'express';
import { Express } from 'express';
import dotenv from 'dotenv';
import country_router from './routes/country_route';
import cors from 'cors';

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const app: Express = express();

app.use(cors())

app.use(express.json());

app.use('/', country_router);

app.listen(process.env.API_PORT, () => {
    console.log(`Server running at door ${process.env.API_PORT}.`);
});