import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import SuccessIcon from "../components/Icons/Success";
import Hero from "../components/Layouts/Hero";
import Layout from "../components/Layouts/Layout";

const Success = () => {
  const router = useRouter();
  return (
    <div className="w-full">
      <Hero name="Order Completed" linkTitle="Order Completed" />
      <div className="py-20 global-inner-container">
        <div className="px-14">
          <div className="border-l border-b pb-14 relative border-dashed">
            <div className="mx-auto h-24 w-20 relative flex items-center justify-center">
              <Image
                alt="Oval"
                layout="fill"
                src="/assets/img/items/oval.svg"
              />
              <div className="w-16 h-16 rounded-full bg-white z-10 flex items-center justify-center">
                <SuccessIcon />
              </div>
            </div>

            <h1 className="text-center text-lzheroBlack mt-5 font-Inter font-bold text-2xl ">
              Your Order Is Completed!
            </h1>

            <p className="mt-5 text-center leading-7 text-lzSuccessTxt font-Lato font-semibold">
              Thank you for your order! Your order is being processed and will
              be completed within 3-6 <br />
              hours. You will receive an email confirmation when your order is
              completed.
            </p>

            <button
              onClick={() => router.push("/")}
              className="mt-6 text-white font-Lato block text-center px-9 py-3 mx-auto bg-lzNavPink"
            >
              Continue shopping
            </button>

            <div className="success-clock absolute -left-8 top-0">
              <div className="relative success-clock">
                <Image src="/assets/img/clock.svg" alt="clock" layout="fill" />
              </div>
            </div>

            <div className="success-checklist absolute -right-1 -bottom-5">
              <div className="relative success-clock">
                <Image src="/assets/img/check.svg" alt="clock" layout="fill" />
              </div>
            </div>
          </div>

          <div className="w-full h-28 relative mt-28 mb-10">
            <Image src="/assets/img/company.svg" layout="fill" alt="Company" />
          </div>
        </div>
      </div>
    </div>
  );
};

Success.getLayout = function getLayout(page: ReactNode) {
  return <Layout>{page}</Layout>;
};
export default Success;
