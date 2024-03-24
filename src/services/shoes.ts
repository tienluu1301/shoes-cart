import { FormattedShoe, ShoeResponse } from "../dto/shoe.dto";
import { SHOES } from "../config/endpoints";
import fetcher from "./fetcher";

export interface ShoeService {
  getShoes: () => Promise<FormattedShoe[]>;
  getShoeById: (shoeId: string) => Promise<ShoeResponse>;
}

const shoeService: ShoeService = {
  getShoes: async () => {
    const shoes: ShoeResponse[] = await fetcher(`${SHOES}`);
    const formattedShoes = shoes.map(
      ({ id, name, imgUrl, price, description, bgColor }) => ({
        id,
        shoeName: name,
        shoePrice: price,
        imgURL: imgUrl,
        description,
        bgColor,
      })
    );
    return formattedShoes as FormattedShoe[];
  },

  getShoeById: (shoeId: string) => {
    return fetcher(`${SHOES}/${shoeId}`);
  },
};

export default shoeService;
