import express from 'express';
import { Request, Response, Express } from 'express';
import 'dotenv/config.js';

const app: Express = express();

app.use(express.json());



app.listen(process.env.API_PORT, () => {
    console.log(`Server running at door ${process.env.API_PORT}.`);
});