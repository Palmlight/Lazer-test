import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ItemType {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
  size: string;
  color: string;
}

const InitialCartState: ItemType[] = [
  {
    id: "1",
    name: "Ut diam consequat",
    quantity: 1,
    price: 32,
    image: "/assets/img/items/bag1.svg",
    size: "XL",
    color: "Brown"
  },
  {
    id: "2",
    name: "Vel faucibus posuere",
    quantity: 1,
    price: 33,
    image: "/assets/img/items/bag2.svg",
    size: "XL",
    color: "Brown"
  },
  {
    id: "3",
    name: "Ac vitae vestibulum",
    quantity: 1,
    price: 34,
    image: "/assets/img/items/bag3.svg",
    size: "XL",
    color: "Brown"
  },
  {
    id: "4",
    name: "Elit massa diam",
    quantity: 1,
    price: 35,
    image: "/assets/img/items/bag4.svg",
    size: "XL",
    color: "Brown"
  },
  {
    id: "5",
    name: "Proin pharetra elementum",
    quantity: 1,
    price: 36,
    image: "/assets/img/items/bag5.svg",
    size: "XL",
    color: "Brown"
  }
];

export const CartSlice = createSlice({
  name: "cart",
  initialState: { cart: InitialCartState },
  reducers: {
    removeItemFromCart: (state, action: PayloadAction<string>) => {
      if (state.cart.length === 1) {
        return;
      }
      const filterCart = state.cart.filter(item => item.id !== action.payload);
      state.cart = filterCart;
    },
    incrementItemQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload
      );
      state.cart[itemIndex].quantity++;
    },
    decrementItemQuantity: (state, action: PayloadAction<string>) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload
      );

      if (state.cart[itemIndex].quantity === 1) return;

      state.cart[itemIndex].quantity = state.cart[itemIndex].quantity - 1;
    },
    updateItemQuantity: (
      state,
      action: PayloadAction<{ id: string; qty: string | number }>
    ) => {
      const itemIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      );

      if (parseInt(action.payload.qty as string) < 1) {
        state.cart[itemIndex].quantity = 1;
      }

      state.cart[itemIndex].quantity = parseInt(action.payload.qty as string);
    }
  }
});

export const {
  removeItemFromCart,
  incrementItemQuantity,
  decrementItemQuantity,
  updateItemQuantity
} = CartSlice.actions;

export default CartSlice.reducer;
