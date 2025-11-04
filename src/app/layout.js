import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ReusableComponent/Header/Header";
import Footer from "@/components/ReusableComponent/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Contectinfo from "@/components/ReusableComponent/Contectinfo/Contectinfo";
import { addresses, testimonials } from "@/data/home";
import Testimonial from "@/components/ReusableComponent/Testimonial/Testimonial";
import { icons } from "lucide-react";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/lemolite.ico",
  },
  title: "Custom Software Development Services | Lemolite Technologies",
  description: "Lemolite Technologies LLP provides custom software development services tailored to your business needs, ensuring innovative and efficient solutions.",
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        <Header />
        <ToastContainer />
        {children}
        <Testimonial
          title="Hear from Our Happy Clients"
          testimonials={testimonials}
        />
        <Contectinfo
          maintitle={"Let’s Transform Your Vision into Reality"}
          subtitle={"Get in Touch!"}
          content={
            "Working on something big? Let’s chat! We’re excited to hear about your project and see how we can help."
          }
          addresses={addresses}
        />
        <Footer />
      </body>
    </html>
  );
}
