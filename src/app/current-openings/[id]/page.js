"use client";
import { use } from "react";
import CareerBanner from "@/components/ReusableComponent/CarrerBanner";
import SectionBlock from "@/components/ReusableComponent/SectionBlock";
import { bde, fsd, lead } from "@/data/breadcrumsdata";
import { feaureofbde, feaureoffsd, feaureoflg } from "@/data/home";

function Page({ params }) {
  const { id } = use(params);
  const scrollToFooter = () => {
    const contactSection = document.getElementById("contact-info-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  if (id == "lead-generation")
    return (
      <div>
        <CareerBanner
          breddata={lead}
          title={"Lead Generation"}
          btntext={"Apply"}
          onclick={scrollToFooter}
          stats={feaureoflg}
        />
        <section className="career-inner">
          <div className="container">
            <SectionBlock
              title="Job Overview"
              content="We are looking for a highly motivated Lead Generation to join our team for a minimum 1+ years experience. The ideal candidate will be responsible for generating qualified leads, managing outreach efforts, and supporting the sales team in driving business growth."
            />

            <SectionBlock
              title="Responsibilities"
              list={[
                {
                  text: "Identify and research potential leads through various channels such as social media, email campaigns, databases, and cold calling.",
                },
                {
                  text: "Qualify leads and pass them to the sales team with relevant details to improve conversion rates.",
                },
                {
                  text: "Develop and implement lead generation strategies to meet sales targets effectively.",
                },
                {
                  text: "Maintain accurate and up-to-date records in CRM systems to track leads and follow-ups.",
                },
                {
                  text: "Work closely with the sales and marketing teams to align efforts and improve lead conversion.",
                },
                {
                  text: "Monitor, track, and report on lead generation KPIs to measure success and identify areas for improvement.",
                },
                {
                  text: "Analyze lead generation processes and suggest improvements for better efficiency and effectiveness.",
                },
              ]}
            />

            <SectionBlock
              title="Requirements"
              list={[
                "Proven experience in lead generation, sales support, or a similar role.",
                "Strong communication skills, both written and verbal.",
                "Experience with CRM software such as Salesforce or HubSpot.",
                "Ability to work independently and collaboratively in a fast-paced environment.",
                "Excellent organizational and time-management skills.",
                "Attention to detail and a proactive approach to problem-solving.",
              ]}
            />

            <SectionBlock
              title="Preferred Skills"
              list={[
                "Experience in B2B or B2C lead generation processes.",
                "Familiarity with digital marketing strategies and tools.",
                "Knowledge of sales funnels and conversion optimization.",
                "Understanding of data analytics and reporting for lead tracking.",
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
  else if (id == "business-development-executive")
    return (
      <div>
        <CareerBanner
          breddata={bde}
          title={"Business Development Executive"}
          btntext={"Apply"}
          onclick={scrollToFooter}
          stats={feaureofbde}
        />
        <section className="career-inner">
          <div className="container">
            <SectionBlock
              title="Job Overview"
              content="The Business Development Executive (BDE) is responsible for driving business growth by identifying new sales opportunities, nurturing client relationships, and increasing the company’s market presence. The role involves prospecting, lead generation, and closing sales deals, while working closely with the marketing and product teams to deliver solutions that meet client needs."
            />

            <SectionBlock
              title="Responsibilities"
              list={[
                {
                  text: "Identify and generate new business opportunities through cold calling, networking, and research.",
                },
                {
                  text: "Qualify leads and manage the sales pipeline to ensure a steady flow of prospects.",
                },
                {
                  text: "Meet or exceed sales targets and key performance indicators (KPIs).",
                },
                {
                  text: "Build and maintain strong relationships with clients and key stakeholders.",
                },
                {
                  text: "Present and demonstrate products/services to potential clients effectively.",
                },
                {
                  text: "Prepare and negotiate proposals and contracts to close deals.",
                },
                {
                  text: "Work closely with internal teams to ensure successful project delivery and customer satisfaction.",
                },
                {
                  text: "Monitor market trends and competitor activities to identify potential opportunities.",
                },
                {
                  text: "Provide post-sales support to ensure customer retention and satisfaction.",
                },
              ]}
            />

            <SectionBlock
              title="Requirements"
              list={[
                "Proven experience in sales or business development.",
                "Excellent communication and interpersonal skills.",
                "Strong negotiation and presentation skills.",
                "Ability to work independently and as part of a team.",
                "Problem-solving mindset with a customer-centric approach.",
                "Familiarity with CRM software and sales tools.",
                "Bachelor’s degree in Business, Marketing, or related field.",
                "Experience in IT (preferred).",
              ]}
            />

            <SectionBlock
              title="Preferred Skills"
              list={[
                "Experience in B2B and B2C sales processes.",
                "Understanding of digital marketing and lead generation techniques.",
                "Ability to analyze sales data and market trends to optimize strategies.",
                "Familiarity with proposal writing and contract negotiations.",
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
  else if (id == "full-stack-developer")
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
  return <p>No Opening Found</p>;
}

export default Page;
