import { ShoeResponse } from "../dto/shoe.dto";
import { SHOES } from "./endpoints";
import fetcher from "./fetcher";

export interface ShoeService {
  getShoes: () => Promise<ShoeResponse[]>;
  getShoeById: (shoeId: string) => Promise<ShoeResponse>;
}

const shoeService: ShoeService = {
  getShoes: () => {
    return fetcher(`${SHOES}`);
  },

  getShoeById: (shoeId: string) => {
    return fetcher(`${SHOES}/${shoeId}`);
  },
};

export default shoeService;
