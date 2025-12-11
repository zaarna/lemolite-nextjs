import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/ReusableComponent/Header/Header";
import Footer from "@/components/ReusableComponent/Footer/Footer";
import { ToastContainer } from "react-toastify";
import Contectinfo from "@/components/ReusableComponent/Contectinfo/Contectinfo";
import { addresses, testimonials } from "@/data/home";
import Testimonial from "@/components/ReusableComponent/Testimonial/Testimonial";
import { icons } from "lucide-react";
import PopupTimer from "@/components/PopupTimer";
import WhatsAppIcon from "@/components/ReusableComponent/WhatsAppIcon/WhatsAppIcon";
import Script from "next/script";

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
  variable: "--font-outfit",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://lemolite.com/"),
  icons: {
    icon: "/lemolite.ico",
  },
  authors: [{ name: "Lemolite Technologies" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager  */}

        <Script id="gtm-script" strategy="afterInteractive">
          {`
    (function(w,d,s,l,i){
      w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(), event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s), dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;
      j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window, document, 'script', 'dataLayer', 'GTM-M7FDB3B7');
  `}
        </Script>

        {/* End Google Tag Manager */}
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Lemolite Technologies LLP",
              url: "https://lemolite.com/",
              logo: "https://lemolite.com/assets/logo-C8ojSocg.png",
              sameAs: [
                "https://www.facebook.com/lemolitetech",
                "https://www.instagram.com/lemolite.tech/",
                "https://www.linkedin.com/company/lemolite-technologies-llp",
              ],
            }),
          }}
        />

        {/* -------- LocalBusiness Schema -------- */}
        <Script
          id="localbusiness-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lemolite Technologies LLP",
              image: "https://lemolite.com/assets/logo-C8ojSocg.png",
              "@id": "",
              url: "https://lemolite.com/",
              telephone: "9313834815",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "1101, 1103, 1104, Colonnade, Iskcon Cross Road, Satellite,",
                addressLocality: "Ahmedabad",
                postalCode: "380059",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 23.0259629,
                longitude: 72.5074979,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
              sameAs: [
                "https://www.facebook.com/lemolitetech",
                "https://www.instagram.com/lemolite.tech/",
                "https://www.linkedin.com/company/lemolite-technologies-llp",
              ],
            }),
          }}
        />
      </head>
      <body className={`${outfit.variable} antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7FDB3B7"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <PopupTimer>
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
          <WhatsAppIcon />
          <Footer />
        </PopupTimer>
      </body>
    </html>
  );
}
