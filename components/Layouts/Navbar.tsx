import React from "react";
import Avatar from "../Icons/Avatar";
import CaretDown from "../Icons/CaretDown";
import Cart from "../Icons/Cart";
import Envelope from "../Icons/Envelope";
import Heart from "../Icons/Heart";
import PinkCaret from "../Icons/PinkCaret";
import Search from "../Icons/Search";
import Telephone from "../Icons/Telephone";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 bg-white z-50">
      <div className="w-full bg-lzViolet py-2">
        <div className="global-inner-container flex text-lzNavGrey items-center justify-between">
          <div className="flex items-center gap-10">
            <a
              href="mailto:mhhasanul@gmail.com"
              className="flex items-center gap-2 font-semibold  font-JosefinSans text-sm"
            >
              <Envelope />
              <span>mhhasanul@gmail.com</span>
            </a>

            <a
              href=""
              className="font-semibold font-JosefinSans flex items-center gap-2  text-sm "
            >
              <Telephone />

              <span>(12345)67890</span>
            </a>
          </div>

          <div className="flex items-center gap-5">
            <p className="text-sm font-JosefinSans font-semibold flex items-center gap-1">
              <span>English</span>
              <CaretDown />
            </p>
            <p className="text-sm font-JosefinSans font-semibold flex items-center gap-1">
              <span>USD</span>
              <CaretDown />
            </p>

            <p className="text-sm font-JosefinSans font-semibold flex items-center gap-1">
              <span>Login</span>
              <Avatar />
            </p>
            <p className="text-sm font-JosefinSans font-semibold flex items-center gap-1">
              <span>Wishlist</span>
              <Heart />
            </p>

            <Cart />
          </div>
        </div>
      </div>

      <div className="global-inner-container py-5 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="font-JosefinSans font-bold text-3xl">Hekto</h1>

          <ul className="flex items-center ml-20 gap-6 font-Lato text-sm text-lzNavBlack">
            <li className="text-lzNavPink flex items-center gap-1">
              <span>Home</span>
              <span className="mt-1">
                <PinkCaret />
              </span>
            </li>
            <li>Pages</li>
            <li>Products</li>
            <li>Blog</li>
            <li>Shop</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="w-80 h-8 grid grid-cols-6 items-center">
          <input className="col-span-5 border-l-2 border-t-2 border-b-2 border-lzSearchBlue h-full px-2 outline-none" />
          <button className="col-span-1 bg-lzNavPink h-full border border-lzNavPink flex items-center justify-center">
            <Search />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
