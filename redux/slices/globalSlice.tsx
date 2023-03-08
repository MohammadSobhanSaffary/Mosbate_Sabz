import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { count } from "console";

interface Product {
  id: number;
  image: string;
  name: string;
  price: string;
}
interface CartItem {
  count: number;
  product: Product;
}

interface InitialStates {
  products: Product[];
  cartItems: CartItem[];
}
const initialState: InitialStates = {
  products: [
    {
      id: 1,
      name: "کرم نرم کننده مو نیکول حاوی گوار",
      image:
        "https://mosbatesabz.com/wp-content/uploads/2023/02/Nicol-Hair-Conditioner-Cream-200-ml.jpg",
      price: "2500000",
    },
    {
      id: 2,
      name: "کرم نرم کننده مو نیکول حاوی گوار",
      image:
        "https://mosbatesabz.com/wp-content/uploads/2023/02/Nicol-Hair-Conditioner-Cream-200-ml.jpg",
      price: "2500000",
    },
    {
      id: 3,
      name: "کرم نرم کننده مو نیکول حاوی گوار",
      image:
        "https://mosbatesabz.com/wp-content/uploads/2023/02/Nicol-Hair-Conditioner-Cream-200-ml.jpg",
      price: "2500000",
    },
    {
      id: 4,
      name: "کرم نرم کننده مو نیکول حاوی گوار",
      image:
        "https://mosbatesabz.com/wp-content/uploads/2023/02/Nicol-Hair-Conditioner-Cream-200-ml.jpg",
      price: "2500000",
    },
    {
      id: 5,
      name: "کرم نرم کننده مو نیکول حاوی گوار",
      image:
        "https://mosbatesabz.com/wp-content/uploads/2023/02/Nicol-Hair-Conditioner-Cream-200-ml.jpg",
      price: "2500000",
    },
    {
      id: 6,
      name: "کرم نرم کننده مو نیکول حاوی گوار",
      image:
        "https://mosbatesabz.com/wp-content/uploads/2023/02/Nicol-Hair-Conditioner-Cream-200-ml.jpg",
      price: "2500000",
    },
  ],
  cartItems: [],
};
const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    finalPrice: (state, action: PayloadAction<Product[]>) => {
      let finalPrice: number = 0;
      state.cartItems.map((el: any) => {
        finalPrice += Number(el.product.price) * el.count;
      });
    },
    
    reduceCartItem: (state, action: PayloadAction<number>) => {
      if (state.cartItems.length > 1) {
        state.cartItems = state.cartItems.map((el: any) => {
          if (el.id === action.payload) {
            return { ...el, count: el.count - 1 };
          } else {
            return el;
          }
        });
      } else if (state.cartItems.length === 1) {
        state.cartItems = state.cartItems.filter(
          (el: any) => el.id === action.payload
        );
      }
    },

    addCartItem: (state, action: PayloadAction<number>) => {
      let isAvailbleInCartItem: boolean = false;
      const choosenProduct = state.products.filter(
        (el: any) => el.id === action.payload
      )[0];
      state.cartItems.forEach((el: any) => {
        el.product.id === action.payload ? (isAvailbleInCartItem = true) : null;
      });
      if (isAvailbleInCartItem) {
        state.cartItems = state.cartItems.map((el: any) => {
          if (el.product.id === action.payload)
            return { ...el, count: el.count + 1 };

          return el;
        });
      } else {
        state.cartItems = [
          ...state.cartItems,
          { count: 1, product: choosenProduct },
        ];
      }
    },
  },
});
export const { addCartItem, reduceCartItem, finalPrice, setProduct } =
  globalSlice.actions;
export default globalSlice.reducer;
