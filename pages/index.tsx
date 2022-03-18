import { useLazerpay } from "lazerpay-react";
import { useRouter } from "next/router";
import React, { ReactNode, useState } from "react";
import { useSelector } from "react-redux";
import ItemListing from "../components/ItemListing/ItemListing";
import Hero from "../components/Layouts/Hero";
import Layout from "../components/Layouts/Layout";
import { RootState } from "../redux/store";
import { parseToDollar } from "../utils/utils";
import { v4 as uuidv4 } from "uuid";

const Index = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const router = useRouter();
  const [error, setError] = useState<string>("");

  const lazerConfig = {
    publicKey: process.env.NEXT_PUBLIC_LAZER_PK!,
    customerName: "Ugwuede Ndonna",
    customerEmail: "ndonnauc@gmail.com",
    currency: "USD",
    amount: cart.reduce(
      (total, item) => total + item.quantity! * item.price,
      0
    ),
    reference: uuidv4(),
    onSuccess: () => {
      // handle response here
      router.push("/sucess");
    },
    onClose: () => {
      //handle response here
      setError("Payment channel closed");
    },
    onError: (response: any) => {
      // handle responsne here
      setError(response);
    }
  };

  const initializePayment = useLazerpay(lazerConfig);

  return (
    <div className="w-full">
      <Hero name="Shopping Cart" linkTitle="Shopping Cart" />
      <div className="py-20 global-inner-container cart-items-page">
        <table className="w-full ">
          <thead className="w-full ">
            <tr className="w-full items-display-table text-lzTableBlue font-Inter font-bold pb-5">
              <th className="text-left">Product</th>
              <th className="">Price</th>
              <th className="">Quantity</th>
              <th className="text-right">Total</th>
            </tr>
          </thead>

          <tbody className="w-full">
            {cart.map(item => (
              <ItemListing {...item} key={item.id} />
            ))}
          </tbody>
        </table>
        <aside>
          <h1 className="text-lzTableBlue font-Inter font-bold pb-7 text-center">
            Cart Total
          </h1>

          <div className="w-full bg-lzFooterBg py-11 px-8">
            <div className="flex items-center pb-3 justify-between border-b-2 border-lzSubtotalBorder">
              <h1 className="font-Lato font-semibold text-lzTableBlue">
                Subtotal:
              </h1>

              <h2 className="font-Lato mt-1 text-lzPriceBlue">
                {parseToDollar(
                  cart.reduce(
                    (total, item) => total + item.quantity! * item.price,
                    0
                  )
                )}
              </h2>
            </div>

            <div className="mt-7 flex items-center pb-3 justify-between border-b-2 border-lzSubtotalBorder">
              <h1 className="font-Lato font-semibold text-lzTableBlue">
                Total:
              </h1>

              <h2 className="font-Lato mt-1 text-lzPriceBlue">
                {parseToDollar(
                  cart.reduce(
                    (total, item) => total + item.quantity! * item.price,
                    0
                  )
                )}
              </h2>
            </div>

            <button
              onClick={() => {
                setError("");
                initializePayment();
              }}
              className="mt-10 w-full bg-lzGreen text-white font-Lato outline-none text-sm py-3 font-bold"
            >
              Complete Payment
            </button>

            {error && (
              <p className="font-Lato text-sm italic my-2 text-red-500">
                {error}
              </p>
            )}
          </div>
        </aside>
      </div>
    </div>
  );
};

Index.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};

export default Index;
