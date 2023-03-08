"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/exports";
import { Provider } from "react-redux";
import store from "../../../redux/store";
function Main() {
  const router = useRouter();
  const dispatch = useDispatch();
  const products = useSelector((state: any) => state.globalSlice.products);
  const cartItems = useSelector((state: any) => state.globalSlice.cartItems);
  console.log(products);
  return (
    <Provider store={store}>
      <header className="w-full md:flex justify-between items-center p-5">
        <div>
          <AiOutlineShoppingCart />
          <span>{cartItems.length}</span>
        </div>
        <div></div>
        <BiMenu />
      </header>
      <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-3"></div>
      <footer></footer>
    </Provider>
  );
}

export default Main;

export async function getServerSideProps(context: any) {
  return {
    props: {},
  };
}
