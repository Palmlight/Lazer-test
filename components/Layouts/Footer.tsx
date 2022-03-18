import React from "react";
import Fb from "../Icons/Fb";
import Ig from "../Icons/Ig";
import Tw from "../Icons/Tw";

const Footer = () => {
  return (
    <div className="mt-auto">
      <footer className="w-full bg-lzFooterBg py-20">
        <div className="global-inner-container footer-grid">
          <div>
            <h1 className="text-3xl font-Inter font-bold mb-4">Hekto</h1>
            <div className="w-80 h-10 grid grid-cols-6 items-center">
              <input
                className="col-span-4 bg-white text-lzFooterText placeholder:text-lzFooterText bg-opacity-20 font-Lato text-sm h-10 px-3 outline-none"
                type="email"
                placeholder="Enter your email address"
              />
              <button className="col-span-2 rounded-sm  bg-lzNavPink h-9 font-Lato text-sm text-white border border-lzNavPink flex items-center justify-center">
                {/* <Search /> */}
                Sign up
              </button>
            </div>

            <h1 className="mb-2.5 mt-5 text-sm font-Lato text-lzFooterText">
              Contact Info
            </h1>

            <h1 className="text-sm font-Lato text-lzFooterText">
              17 Princess Road, London, Greater London NW1 8JR, UK
            </h1>
          </div>

          <div>
            <h1 className="text-xl font-Inter font-semibold mb-7">
              Categories
            </h1>

            <ul className="space-y-4 font-Lato text-sm text-lzFooterText">
              <li>Laptops & Computers</li>
              <li>Cameras & Photography</li>
              <li>Smart Phones & Tablets</li>
              <li>Video Games & Consoles</li>
              <li>Waterproof Headphones</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-Inter font-semibold mb-7">
              Customer Care
            </h1>

            <ul className="space-y-4 font-Lato text-sm text-lzFooterText">
              <li>My Account</li>
              <li>Discounts</li>
              <li>Returns</li>
              <li>Order History</li>
              <li>Order Tracking</li>
            </ul>
          </div>

          <div>
            <h1 className="text-xl font-Inter font-semibold mb-7">Pages</h1>

            <ul className="space-y-4 font-Lato text-sm text-lzFooterText">
              <li>Blog</li>
              <li>Browse the Shop</li>
              <li>Category</li>
              <li>Pre-Built Pages</li>
              <li>Visual Composer Elements</li>
              <li>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="w-full bg-lzLFooterBg py-3">
        <div className="global-inner-container px-28 flex items-center justify-between">
          <p className="font-Lato text-sm font-semibold text-lzCopyGrey">
            ©Webecy - All Rights Reserved
          </p>

          <div className="flex items-center gap-2">
            <Fb />
            <Ig />
            <Tw />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
