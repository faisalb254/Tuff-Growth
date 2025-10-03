import React from "react";
import Line3 from "../assets/Line3.svg";
import Logo from "../assets/logo.png";
import map from "../assets/map.png";
import fb from "../assets/fb.svg";
import lk from "../assets/lk.svg";
import x from "../assets/x.svg";
import yt from "../assets/yt.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const services = [
    {
      name: "All Services",
      link: "services",
    },
    {
      name: "Marketing Attribution",
      link: "marketing-attribution",
    },
    {
      name: "Performance Creative",
      link: "creative",
    },
    {
      name: "Video Marketing",
      link: "videomarketing",
    },
    {
      name: "Strategic Messaging",
      link: "strategic-messaging",
    },
    {
      name: "Paid Media",
      link: "paid-media",
    },
    {
      name: "PPC",
      link: "ppc",
    },
    {
      name: "Social Ads",
      link: "social-advertising",
    },
    {
      name: "Display",
      link: "display",
    },
    {
      name: "Owned Media",
      link: "owned-media",
    },
    {
      name:"Email",
      link: "email-marketing"
    },
    {
      name: "CRO",
      link: "cro",
    },
    {
      name: "SEO",
      link: "seo",
    },
    {
      name: "GEO & AEO",
      link: "geo",
    },
    {
      name: "Content",
      link: "content-strategy",
    }
  ]
  const aboutUs = [
    {
      name: "Our Company",
      link: "our-company"
    },
    {
      name: "Case Studies",
      link: "case-studies"
    },
    {
      name: "Startups",
      link: "startup-marketing-agency"
    }
  ]
  const resources = [
    {
      name: "Blog",
      link: "blog"
    },
    {
      name: "Free Growth Session",
      link: "get-started-with-tuff"
    },
    {
      name: "Download a Sample Proposal",
      link: "sample-growth-marketing-proposal"
    },
    {
      name: "Careers",
      link: "careers"
    },
  ]
  return (
    <>
      <div className="w-full h-auto bg-[#5A2AFF] pb-8">
        <div className="w-full h-auto bg-[#5A2AFF] px-6 md:px-16 lg:px-28 pt-16 md:pt-20 lg:pt-10">
          <div className="w-full h-auto flex flex-col lg:flex-row">
            <div className="h-full w-full lg:w-[48.3%] pt-4">
              <img
                src={Logo}
                alt="Logo"
                loading="lazy"
                className="w-[40%] sm:w-[30%]"
              />
              <p className="text-[16px] font-normal text-[#FFFEFB] mt-8 md:mt-10 ml-1 md:ml-3">
                <span className="font-semibold">Inbox:</span>{" "}
                hello@tuffgrowth.com
              </p>
              <p className="text-[16px] font-normal text-[#FFFEFB] mt-2 ml-1 md:ml-3">
                <span className="font-semibold">Office:</span> 1099 Capitol St,
                Eagle, CO 81631
              </p>
              <p className="text-[16px] font-semibold text-[#FFFEFB] mt-6 md:mt-7 ml-1 md:ml-3">
                With remote team members in:
              </p>
              <img
                src={map}
                alt="map"
                loading="lazy"
                className="w-[98%] m-auto mt-[-7%] bg-transparent"
              />
              <div className="flex gap-2 mt-[-30px] ml-1 md:ml-3">
                <img src={fb} alt="fb" loading="lazy" />
                <img src={x} alt="x" loading="lazy" />
                <img src={lk} alt="lk" loading="lazy" />
                <img src={yt} alt="yt" loading="lazy" />
              </div>
            </div>

            <div className="w-full lg:w-[14.8%] h-auto pt-10 md:pt-12 lg:ml-36">
              <h2 className="text-[24px] font-semibold text-[#FFFFFF]">
                What We Do
              </h2>
              {services.map((item, i) => (
                <h4
                  key={i}
                  className="text-[16px] font-medium mt-3 text-[#FFFFFF]"
                >
                  <Link to={`/${item.link}`}>{item.name}</Link>
                </h4>
              ))}
            </div>

            <div className="w-full lg:w-[14.8%] h-auto pt-10 md:pt-12 lg:ml-20">
              <h2 className="text-[24px] font-semibold text-[#FFFFFF]">
                Why Tuff
              </h2>
              {aboutUs.map((item, i) => (
                <h4
                  key={i}
                  className="text-[16px] font-medium mt-3 text-[#FFFFFF]"
                >
                  <Link to={`/${item.link}`}>{item.name}</Link>
                </h4>
              ))}
              <h2 className="text-[24px] font-semibold text-[#FFFFFF] mt-14">
                Resources
              </h2>
              {resources.map((item, i) => (
                <h4
                  key={i}
                  className="text-[16px] font-medium mt-3 text-[#FFFFFF]"
                >
                  <Link to={`/${item.link}`}>{item.name}</Link>
                </h4>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full pt-10 lg:pt-14 px-6 md:px-16 lg:px-28">
          <div className="w-full flex flex-col lg:flex-row justify-between border-t-2 border-b-2 border-[#607222] lg:px-0 py-8 lg:py-0">
            {[
              {
                title: "Paid Media",
                items: [
                  {name: "TikTok Ads Agency", link: "tiktok-ad-agency"},
                  {name: "YouTube Ads Agency", link: "youtube-ad-agency"},
                  {name:"Google Ads Agency", link: "google-ad-agency"},
                  {name: "Bing Ads Agency", link: "bing-ad-agency"},
                  {name: "LinkedIn Ads Agency", link: "linkedin-ad-agency"},
                ],
              },
              {
                title: "Owned Media",
                items: [{name: "Technical SEO Agency", link: "technical-seo-agency"}, {name: "Content Strategy Agency", link:"content-strategy-agency"}],
              },
              {
                title: "Creative",
                items: [
                  {name: "Ad Creative", link: "creative"},
                  {name: "Video Marketing", link: "videomarketing"},
                  {name: "Strategic Messaging", link: "strategic-messaging"}
                ],
              },
              {
                title: "Growth",
                items: [
                  {name: "Growth Marketing Agency", link: "growth-marketing-agency"},
                  {name: "Growth Agency", link: "growth-agency"},
                  {name: "Digital Marketing Agency", link: "digital-marketing-agency"},
                  {name: "Performance Marketing Agency", link: "performance-marketing-agency"},
                  {name: "B2B Digital Marketing Agency", link: "b2b-digital-marketing-agency"},
                  {name: "Growth Marketing Framework", link: "growth-marketing-framework"},
                  {name: "Startup Marketing Agency", link: "startup-marketing-agency"},
                ],
              },
            ].map((section, idx) => (
              <div
                key={idx}
                className="w-full lg:w-[25%] pt-4 lg:pt-7 mb-8 lg:mb-0"
              >
                <h2 className="text-[24px] font-semibold text-[#FFFFFF]">
                  {section.title}
                </h2>
                {section.items.map((item, i) => (
                  <h4
                    key={i}
                    className="text-[16px] font-medium mt-3 text-[#FFFFFF]"
                  >
                    <Link to={`/${item.link}`}>{item.name}</Link>
                  </h4>
                ))}
              </div>
            ))}
          </div>
          <p className="text-[14px] font-medium mt-6 text-[#FFFFFF] text-center">
            © 2024 Tuff | We're a division of Goodway Group!
          </p>
        </div>

      </div>
    </>
  );
}
