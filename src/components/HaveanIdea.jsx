"use client";

import Titlecontent from "@/components/ReusableComponent/Titlecontent/Titlecontent";
import Form from "@/components/ReusableComponent/Contectinfo/Form";

export default function HaveanIdea() {
  return (
    <section className="animated--background top-bottom">
      <div className="container">
        <div className="contect-from-info items-center flex-col lg:flex-row lg:flex justify-between">
          {/* Left Section - Title */}
          <div className="contect--us w-full md:w-1/3 pb-5 lg:pb-0 text-center lg:text-left">
            <div className="title--head pb-7">
              <Titlecontent
                title="HAVE AN IDEA?"
                content="LETS DO IT TOGETHER!"
              />
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="contect--us--form w-full md:w-2/3">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}
