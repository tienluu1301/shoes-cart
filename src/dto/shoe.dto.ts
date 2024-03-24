export interface ShoeResponse {
  id: string;
  name: string;
  imgUrl: string;
  description: string;
  price: string;
  bgColor: string;
  createAt: string;
  updateAt: string;
}

export interface FormattedShoe {
  id: string;
  shoeName: string;
  imgURL: string;
  shoePrice: string;
  bgColor: string;
  description: string;
}
