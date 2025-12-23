import React from "react";
import Titlecontent from "../Titlecontent/Titlecontent";

function Dream_web_application({
  title,
  content,
  listItems = [],
  image,
  alt,
  additionalText,
}) {
  return (
    <section className="top-bottom">
      <div className="container">
        <div className="dream-application">
          <div>
            <div className="title--head md:pb-0 text-left">
              <Titlecontent title={title} content={content} />
            </div>
          </div>

          <div className="content-sec flex items-center">
            <div className="lg:w-3/5">
              <ul className="list-none listing pl-7">
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className=" lg:w-2/5 items-center">
              <figure className="">
                <img src={image} alt={alt} className="h-auto w-auto" />
              </figure>
            </div>
          </div>

          {additionalText && <p className="">{additionalText}</p>}
        </div>
      </div>
    </section>
  );
}

export default Dream_web_application;
