import { FormattedShoe } from "../../../dto/shoe.dto";
import { ICartItem } from "../../../context/CartProvider";

interface ShoeItemProps {
  shoe: FormattedShoe;
  isExistingCart: boolean;
  onAddToCart: (item: Omit<ICartItem, "quantity">) => void;
}

const ShoeItem = ({ shoe, isExistingCart, onAddToCart }: ShoeItemProps) => {
  return (
    <div className="shopItem" key={shoe.id}>
      <div className="shopItem_image" style={{ backgroundColor: shoe.bgColor }}>
        <img alt="" src={shoe.imgURL} />
      </div>
      <div className="shopItem_name">{shoe.shoeName}</div>
      <div className="shopItem_description">{shoe.description}</div>
      <div className="shopItem_bottom">
        <div className="shopItem_price">${shoe.shoePrice}</div>
        {isExistingCart ? (
          <div
            className="shopItem_button"
            style={{
              opacity: 0.5,
              cursor: "not-allowed",
            }}
          >
            Added
          </div>
        ) : (
          <div
            className="shopItem_button"
            style={{ opacity: 1, cursor: "pointer" }}
            onClick={() =>
              onAddToCart({
                id: shoe.id,
                name: shoe.shoeName,
                price: +shoe.shoePrice,
                bgColor: shoe.bgColor,
                imgUrl: shoe.imgURL,
              })
            }
          >
            <p>ADD TO CART</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoeItem;
