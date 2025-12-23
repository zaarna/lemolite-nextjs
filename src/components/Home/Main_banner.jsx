import Grediantbutton from "../ReusableComponent/Button/Grediantbutton";
import AnimatedImage from "./AnimatedImage";
import ScrollReveal from "@/components/ReusableComponent/Animations/ScrollReveal";

function Main_banner() {
  return (
    <section className="relative h-[380px] sm:h-5/6 md:h-4/6 lg:h-4/6 overflow-hidden">
      <AnimatedImage />

      <div className="main-banner container flex">
        <div className="text-center items-center absolute top-0 bottom-0 left-0 right-0 m-auto h-3/4 sm:h-2/4 md:h-2/3 lg:h-3/6 w-[300px] sm:w-[550px] md:w-3/4">
          <ScrollReveal delay={0.1}>
            <h1>Transform. Elevate. Succeed.</h1>
          </ScrollReveal>

          <ScrollReveal delay={0.25}>
            <p>
              We create next-gen solutions that transform your business and
              guarantee success in the modern digital world.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-4 sm:mt-10">
              <Grediantbutton
                btntext="Get A Free Consultation"
                link="/contact-us"
              />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

export default Main_banner;
