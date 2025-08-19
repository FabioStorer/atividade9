import express, { Router } from 'express';
import { allCountries, searchName, searchRegion } from "../controllers/country_controller";

const router = express.Router();

router.get('/', allCountries);
router.get('/name/:name', searchName);
router.get('/region/:region', searchRegion);

export default router;