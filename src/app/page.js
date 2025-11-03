
import BlogCard from '@/components/ReusableComponent/blog/BlogCard';
import CtaSection from '@/components/ReusableComponent/Cta_Section/CtaSection';
import VisionAndExpertise from '@/components/ReusableComponent/ExpertiseSection/VisionAndExpertise';
import Hire from '@/components/ReusableComponent/HireSection/Hire';
import TailoredSolutions from '@/components/ReusableComponent/TailoredSolutions/TailoredSolutions';
import TechnologyWeUse from '@/components/ReusableComponent/TechnologyWeUse/TechnologyWeUse';
import Testimonial from '@/components/ReusableComponent/Testimonial/Testimonial';
import TrustedByCliet_WhoWeAre from '@/components/ReusableComponent/TrustedByCliet_WhoWeAre/TrustedByCliet_WhoWeAre';
import { blogCards } from '@/data/blogCards';
import { logos, features, solutions, services, developers, testimonials } from '@/data/home';
import React from 'react';

// This will be replaced with your actual HomePage component when migrated
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Lemolite Technologies
        </h1>
        <div className="text-center">
          <p className="text-lg text-gray-600 mb-4">
            Custom Software Development Services
          </p>
          <p className="text-gray-500">
            This is a placeholder for your HomePage component.
            <br />
            Migrate your HomePage component from React.js to replace this.
          </p>
        </div>
        <TrustedByCliet_WhoWeAre logo={logos}
        title={"Who We Are"}
        content={
          "We provide tailored custom software development services to meet your specific business requirements. From full-stack development to machine learning, our experience helps you reach your objectives. As a leading custom software development company, we are more than just service providers—we transform your ideas into the best possible designs and developments. Our custom web application development company delivers innovative solutions that help your business grow into a successful brand."
        }
        features={features} />
        <TailoredSolutions solutions={solutions} />
        <CtaSection title={"Ready to Transform Your Business?"}
        text={"Take the First Step Today"}
        link={"/contact-us"}
        image="/ctagreadiant.webp"
        bg='bg-[#F1F1F1]' />
        <VisionAndExpertise
        title="Your Vision, Our Expertise!"
        content="We provide tailored custom software development services to drive innovation, improve efficiency, enhance customer experience, and support digital transformation, helping you achieve success and stay competitive."
        service={services}
      />
      <Hire
        developers={developers}
        title={"Hire Innovators Who Build the Future"}
        content={
          "Elevate your business with innovative, custom-built digital solutions designed to meet today's challenges and drive future growth and success."
        }
        btntext="Talk to an Expert"
        link={"/contact-us"}
      />
      <TechnologyWeUse />
      <CtaSection title={"Take Your Project to the Next Level!"}
        text={"Start Now"}
        link={"/contact-us"}
        image="/ctawhite.webp"
        bg='bg-gradient-to-r from-[#2ec4f3]/30 to-[#bfd633]/30' />
        <BlogCard blogCards={blogCards} bg="bg--gray" padding="top-bottom" />
      </div>
  );
};

export default HomePage;