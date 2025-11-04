import React from "react";
// import "../Breadcrumb/breadcrumb.css";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

function Breadcrumb({
  breadcrumbs = [],
  padding = "pb-4 lg:pb-6 xl:pb-8 2xl:pb-10",
}) {
  return (
    <nav className={`${padding} flex breadcrumb`} aria-label="Breadcrumb">
      <ol className="inline-flex flex-wrap items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {breadcrumbs.map((item, index) => (
          <li key={index} className="inline-flex items-center">
            <div className="flex items-center">
              {item.current ? (
                <span className="text-black font-normal">{item.name}</span>
              ) : (
                // <a
                //   href={item.href}
                //   className="inline-flex items-center font-normal text-black dark:text-gray-400 dark:hover:text-white"
                // >
                //   {item.name}
                // </a>
                <Link
                  href={item.href}
                  className="inline-flex items-center font-normal text-black  "
                >
                  {" "}
                  {item.name}
                </Link>
              )}
              {index < breadcrumbs.length - 1 && !item.current && (
                <div className="px-2 w-6">
                  <ArrowRight size={14} />
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumb;
