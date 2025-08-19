import { Request, Response, Express } from 'express'
import { Region, Country } from '../models/country_model';
import { findCountry } from '../middlewares/findCountry';

export const allCountries = async (req: Request, res: Response) : Promise<Response>=> {
    try {
      const response = await findCountry.get("/all?fields=name,capital,region, languages");
      return res.json(response.data);
    } catch (error) {
      console.error("Error fetching countries:", error);
      return res.status(500).json({ error: "Failed to fetch countries" });
    }
  };
  

export const searchName = async (req: Request, res: Response) => {
    const { name } = req.params; 
    try {
      const content = await findCountry.get(`/name/${name}`); 
      res.json(content.data);
    } catch (error) {
      console.error(`Error fetching country by name (${name}):`, error);
      res.status(500).json({ error: "Failed to fetch country" });
    }
  };
  

  export const searchRegion = async (req: Request, res: Response) => {
    const { region } = req.params; 
    try {
      const content = await findCountry.get(`/region/${region}`); 
      res.json(content.data);
    } catch (error) {
      console.error(`Error fetching country by region (${region}):`, error);
      res.status(500).json({ error: "Failed to fetch country" });
    }
  };
  