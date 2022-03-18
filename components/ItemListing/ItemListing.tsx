import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";
import {
  decrementItemQuantity,
  incrementItemQuantity,
  ItemType,
  removeItemFromCart,
  updateItemQuantity
} from "../../redux/Cart/CartSlice";
import { parseToDollar } from "../../utils/utils";

const ItemListing = ({
  id,
  color,
  image,
  name,
  price,
  quantity,
  size
}: ItemType) => {
  const dispatch = useDispatch();
  return (
    <tr className="items-display-table py-3 border-lzItemBorder border-b">
      <td className="flex items-center gap-2">
        <span className="h-20 w-20 relative block">
          <Image src={image} layout="fill" alt={name} />

          <span
            className="block absolute cursor-pointer -top-2 -right-1"
            onClick={() => dispatch(removeItemFromCart(id))}
          >
            <Image
              alt="remove"
              src="/assets/img/items/remove.svg"
              height={13}
              width={13}
            />
          </span>
        </span>

        <span className="block">
          <span className="font-Inter text-xs mb-1 block">{name}</span>
          <span className="font-Inter text-xs mb-1 block text-lzItemDetails">
            Color: {color}
          </span>
          <span className="font-Inter text-xs block text-lzItemDetails">
            Size: {size}
          </span>
        </span>
      </td>

      <td className="text-center font-Inter text-sm text-lzPriceBlue">
        {parseToDollar(price)}
      </td>

      <td className="grid-cols-4 h-6 w-12 mx-auto grid items-center">
        <button
          onClick={() => dispatch(decrementItemQuantity(id))}
          className="h-full col-span-1 flex-shrink-0 flex items-center text-sm justify-center bg-lzQuantityContol text-lzQuantityControlButtons"
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          min={1}
          onChange={e => {
            if (parseInt(e.target.value) >= 1) {
              dispatch(updateItemQuantity({ id, qty: e.target.value }));
            }
          }}
          className="w-full text-center col-span-2 bg-lzQuantityGrey outline-none text-xs h-full text-lzQuantityControlButtons"
        />
        <button
          onClick={() => dispatch(incrementItemQuantity(id))}
          className="h-full col-span-1 flex-shrink-0 flex items-center text-sm justify-center bg-lzQuantityContol text-lzQuantityControlButtons"
        >
          +
        </button>
      </td>

      <td className="text-right text-sm font-Inter text-lzPriceBlue">
        {parseToDollar(price * quantity)}
      </td>
    </tr>
  );
};

export default ItemListing;
