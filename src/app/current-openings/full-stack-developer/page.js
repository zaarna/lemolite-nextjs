"use client";
import CareerBanner from "@/components/ReusableComponent/CarrerBanner";
import SectionBlock from "@/components/ReusableComponent/SectionBlock";
import { fsd } from "@/data/breadcrumsdata";
import { feaureoffsd } from "@/data/home";
import React, { useRef } from "react";

function Fsd() {
  const footerRef = useRef(null); // Create a reference for the footer

  const scrollToFooter = () => {
    footerRef.current?.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
  };
  return (
    <div>
      <CareerBanner
        breddata={fsd}
        title={"Full Stack Developer"}
        btntext={"Apply"}
        onclick={scrollToFooter}
        stats={feaureoffsd}
      />
      <section className="career-inner">
        <div className="container">
          <SectionBlock
            title="Job Overview"
            content="As a Full Stack Developer in Ahmedabad, you will be responsible for designing,
developing, and maintaining web applications across both front-end and back-end
layers. You will work closely with clients to understand their requirements, ensure
high-quality code, and stay current with evolving technologies to improve our
software solutions and development processes."
          />

          <SectionBlock
            title="Responsibilities"
            list={[
              {
                text: "Full Stack Development: Design, develop, and maintain scalable web applications using both front-end and back-end technologies.",
              },
              {
                text: "Client Interaction: Collaborate with clients to gather requirements, provide technical input, and deliver robust solutions.",
              },
              {
                text: "Technical Documentation: Create and maintain technical documentation that clearly describes the architecture and functionality of developed systems.",
              },
              {
                text: "Code Quality: Participate in code reviews to maintain high standards of code quality and share knowledge with the team.",
              },
              {
                text: "Troubleshooting: Identify bugs, performance bottlenecks, and security vulnerabilities and implement effective solutions.",
              },
              {
                text: "Best Practices: Adhere to software development best practices, including Agile methodologies, version control, CI/CD, and automated testing.",
              },
              {
                text: "Continuous Learning: Keep up-to-date with the latest trends in full stack development and apply modern technologies to enhance product performance and usability.",
              },
            ]}
          />

          <SectionBlock
            title="Requirements"
            list={[
              "Education: Bachelor's degree in Computer Science, Engineering, or a related field.",
              "Experience: Minimum of 3 years of professional experience as a Full Stack Developer.",
              "Front-End Skills: Proficiency in HTML, CSS, JavaScript, and front-end frameworks/libraries such as React, Angular, or Vue.js.",
              "Back-End Skills: Strong experience in server-side programming using languages like Node.js or similar.",
              "Database Knowledge: Experience with relational databases (e.g., MySQL, PostgreSQL) and/or NoSQL databases (e.g., MongoDB).",
              "Version Control: Proficiency with Git or other version control systems.",
              "Problem-Solving: Strong analytical and troubleshooting skills for resolving complex technical issues.",
              "Communication: Excellent verbal and written communication skills for effective team collaboration and client interaction.",
            ]}
          />

          <SectionBlock
            title="Preferred Skills"
            list={[
              "Experience with cloud platforms such as AWS, Azure, or Google Cloud.",
              "Familiarity with containerization tools like Docker and orchestration platforms like Kubernetes.",
              "Knowledge of RESTful API design and integration.",
              "Understanding of DevOps practices and CI/CD pipelines.",
            ]}
          />

          <SectionBlock
            title="Company Overview"
            content="At Lemolite Technologies LLP, we're committed to delivering innovative tech solutions and exceptional service to our clients. Our dedication to excellence propels us to push the boundaries of AI/ML and digital transformation."
          />

          <SectionBlock
            title="Benefits"
            list={[
              "Competitive salary based on experience and skills.",
              "Opportunities for professional growth and career advancement.",
              "Flexible work hours and remote work options (if required).",
              "Collaborative and supportive work environment fostering innovation and creativity.",
            ]}
          />
        </div>
      </section>
    </div>
  );
}

export default Fsd;
