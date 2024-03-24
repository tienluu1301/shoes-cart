import { FormattedShoe } from "../dto/shoe.dto";
import { ShoeService } from "../services/shoes";

export interface ShoeAdapter {
  getShoes: () => Promise<FormattedShoe[]>;
  getShoeById: (shoeId: string) => Promise<FormattedShoe>;
}

export const createShoeAdapter = (shoeService: ShoeService): ShoeAdapter => ({
  getShoes: async () => {
    return [] as any;
  },

  getShoeById: async (shoeId: string) => {
    const { name, price, imgUrl, description, id, bgColor } =
      await shoeService.getShoeById(shoeId);

    const formattedShoe = {
      id,
      shoeName: name,
      shoePrice: price,
      imgURL: imgUrl,
      description,
      bgColor,
    };

    return formattedShoe;
  },
});
