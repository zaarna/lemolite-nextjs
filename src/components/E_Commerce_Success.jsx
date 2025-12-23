"use client";

import Image from "next/image";
import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";

export default function E_Commerce_Success() {
  return (
    <section className="container top-bottom">
      <div className="e-commerce-success">
        {/* Title Section */}
        <div className="title--head md:pb-10 sm:pb-6 pb-5 text-center">
          <Titlecontent title="Fueling E-Commerce Success with Top Tech Partners" />
        </div>

        {/* Cards Section */}
        <div className="flex md:flex-row flex-col justify-center h-full gap-5 mx-auto">
          {/* Shopify Card */}
          <div className="w-full md:w-1/2 bg-[#F5F5F5] rounded-3xl h-full flex flex-col justify-between">
            <div className="flex items-center space-x-4 p-5">
              <figure className="mx-auto">
                <Image
                  src="/shopifyser.webp"
                  alt="Shopify"
                  width={500}
                  height={300}
                  className="mx-auto object-contain"
                />
              </figure>
              <div className="text-left">
                <h3 className="pb-2 text-[20px] sm:text-[24px] font-bold">
                  Shopify
                </h3>
                <p className="text-[16px] sm:text-lg font-light leading-relaxed">
                  Shopify is a user-friendly platform for creating and managing
                  online stores. Our Shopify experts help businesses develop
                  customized, fully functional e-commerce websites. Whether
                  you're starting fresh or scaling your store, we are here to
                  guide you every step of the way.
                </p>
              </div>
            </div>
          </div>

          {/* WooCommerce Card */}
          <div className="w-full md:w-1/2 bg-[#F5F5F5] rounded-3xl h-full flex flex-col justify-between">
            <div className="flex items-center space-x-4 p-5">
              <figure className="mx-auto">
                <Image
                  src="/wooser.webp"
                  alt="WooCommerce"
                  width={500}
                  height={300}
                  className="mx-auto object-contain"
                />
              </figure>
              <div className="text-left">
              <h4 className="pb-3 text-[20px] sm:text-[24px]  font-bold">
                WooCommerce
              </h4>
              <p className="text-[16px] sm:text-lg font-light leading-relaxed">
                WooCommerce, powered by WordPress, is a free and open-source
                platform for setting up online stores. Our WordPress experts can
                help you create a professional WooCommerce store, fully
                optimized and ready to sell from day one.
              </p>
            </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
