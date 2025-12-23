import React from "react";
import {
  backenddata,
  frontenddata,
  iadata,
  Offeringdata,
  sadata,
  sitedata,
} from "../data/sitemapdata";
import Link from "next/link";

const CustomList = ({ title, items }) => {
  return (
    <div className="border-custom p-5 my-6">
      <div className="mb-4">
        <h2 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[30px] font-bold ">
          {title}
        </h2>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 common-lists text-[16px] md:text-[20px] font-normal">
        {items.map((item, index) => (
          <li key={index}>
            <Link href={item.path} className="hover:text-secondry">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

function ListingSection() {
  return (
    <section className="top-bottom">
      <div className="container">
        <CustomList title={"Lemolite Technologies"} items={sitedata} />
        <CustomList title={"Offerings"} items={Offeringdata} />
        <CustomList title={"Intelligent Automation"} items={iadata} />
        <CustomList title={"Staff Augmentation"} items={sadata} />
        <CustomList title={"Frontend"} items={frontenddata} />
        <CustomList title={"Backend"} items={backenddata} />
      </div>
    </section>
  );
}

export default ListingSection;
