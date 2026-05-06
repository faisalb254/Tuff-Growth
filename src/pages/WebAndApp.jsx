import React, { useState } from "react";
import Navbar from "../components/NavbarNew";
import FinalSection from "../components/FinalSection";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { BiChevronRight, BiChevronDown } from "react-icons/bi";
import {
  FaWordpress,
  FaShopify,
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";
import {
  SiWix,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiVercel,
  SiStripe,
  SiZapier,
  SiGraphql,
} from "react-icons/si";
import { AiOutlineGoogle, AiOutlineCloud } from "react-icons/ai";
import { HiOutlineCode, HiOutlineDeviceMobile, HiOutlineCog, HiOutlineLightningBolt } from "react-icons/hi";
import star from "../assets/star.svg";
import chevUp from "../assets/chevUp.svg";

export default function WebAndApp() {
  const [openSection, setOpenSection] = useState(null);

  const box = {
    heading: "Ready to Build Your Product?",
    para: [
      "Let's talk about how we can design, develop, and scale your web or mobile application with a performance-driven, future-ready approach.",
    ],
    button: "Book a Strategy Call",
  };

  const cmsServices = [
    {
      title: "WordPress Development",
      subtitle: "Flexible, secure, and conversion-focused WordPress solutions.",
      features: [
        "Custom themes & plugins",
        "High-speed optimization (Core Web Vitals)",
        "CRO-optimized landing pages",
        "SEO-ready architecture",
        "API integrations",
      ],
    },
    {
      title: "Shopify & E-commerce Development",
      subtitle: "Fast, scalable, and revenue-optimized online stores.",
      features: [
        "Shopify & Shopify Plus",
        "Custom storefronts & headless builds",
        "High-speed checkout optimization",
        "Conversion-rate optimization (CRO)",
        "Payment, logistics & CRM integrations",
      ],
    },
    {
      title: "Wix & No-Code Platforms",
      subtitle: "Rapid deployment websites without compromising performance.",
      features: [
        "Custom Wix Studio builds",
        "Advanced animations & interactions",
        "CMS-driven content structures",
        "Third-party integrations",
      ],
    },
  ];

  const saasServices = [
    {
      title: "SaaS Product Development",
      subtitle: "From MVPs to enterprise-grade platforms.",
      features: [
        "User-centric architecture",
        "Subscription & billing systems",
        "Role-based dashboards",
        "Secure authentication",
        "Scalable cloud deployment",
      ],
    },
    {
      title: "CRM Development",
      subtitle: "Custom CRMs designed around your workflow.",
      features: [
        "Sales & pipeline management",
        "Customer lifecycle tracking",
        "Automation & reporting",
        "Third-party API integrations",
      ],
    },
    {
      title: "ERP Development",
      subtitle: "End-to-end business process automation.",
      features: [
        "Inventory & operations management",
        "Finance & HR modules",
        "Centralized data systems",
        "Secure enterprise architecture",
      ],
    },
  ];

  const mobileFeatures = [
    "React Native development",
    "Scalable architecture",
    "Secure backend integrations",
    "App Store & Play Store deployment",
  ];

  const mobileUseCases = [
    "SaaS companion apps",
    "E-commerce apps",
    "On-demand service platforms",
    "Internal business tools",
  ];

  const automationServices = [
    {
      title: "Automation & Integrations",
      features: [
        "CRM & marketing automation",
        "Payment & invoicing automation",
        "Workflow optimization",
        "Zapier, Make, custom APIs",
      ],
    },
    {
      title: "AI-Based Website & App Creation",
      features: [
        "AI-assisted UX flows",
        "Smart content systems",
        "Chatbots & AI assistants",
        "Predictive analytics integrations",
      ],
    },
  ];

  const techStack = {
    "Web & CMS": [
      { name: "WordPress", icon: FaWordpress },
      { name: "Shopify / Shopify Plus", icon: FaShopify },
      { name: "Wix Studio", icon: SiWix },
      { name: "Headless CMS", icon: HiOutlineCode },
    ],
    Frontend: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    Backend: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: FaNodeJs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "REST & GraphQL APIs", icon: SiGraphql },
    ],
    Mobile: [
      { name: "React Native", icon: FaReact },
      { name: "Firebase", icon: SiFirebase },
    ],
    "Cloud & DevOps": [
      { name: "AWS", icon: FaAws },
      { name: "Vercel", icon: SiVercel },
      { name: "Docker", icon: FaDocker },
    ],
  };

  const platformIcons = [
    { name: "Google Cloud", icon: AiOutlineCloud },
    { name: "AWS", icon: FaAws },
    { name: "Shopify", icon: FaShopify },
    { name: "WordPress", icon: FaWordpress },
    { name: "Stripe", icon: SiStripe },
    { name: "Firebase", icon: SiFirebase },
    { name: "Apple", icon: FaApple },
    { name: "Google Play", icon: FaGooglePlay },
    { name: "Zapier", icon: SiZapier },
  ];

  const caseStudyMetrics = [
    { value: "40%", label: "Faster load times", icon: chevUp },
    { value: "65%", label: "Higher conversions", icon: chevUp },
    { value: "3x", label: "Streamlined operations", icon: chevUp },
    { value: "50%", label: "Reduced development overhead", icon: chevUp },
  ];

  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      {/* Hero Section */}
      <section>
        <div className="w-full h-auto max-w-[1700px] mx-auto ServiceBlue pb-20 pt-20 lg:pt-32 px-20 min-[120rem]:px-0">
          <div className="max-w-7xl mx-auto ">
            <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
              WEB & APP DEVELOPMENT
            </div>
            <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[60px] font-bold text-left text-[#fffefb] w-full lg:w-[85%] leading-tight lg:leading-[70px] mt-6 md:tracking-[-2px]">
              Audience-led development solutions that help you build faster,
              scale smarter, and grow revenue.
            </h1>
            <p className="text-[18px] sm:text-[20px] text-[#d1d5db] mt-8 leading-[30px] max-w-[90%] lg:max-w-[75%]">
              We design, develop, and optimize high-performance web and mobile
              applications that are built for users, engineered for scale, and
              aligned with business outcomes. From CMS-powered websites to
              complex SaaS platforms and mobile apps, we turn ideas into
              conversion-driven digital products.
            </p>
            <Link to="/get-started-with-havit-growth">
              <button className="text-lg sm:text-xl cursor-pointer font-extrabold text-[#0C2233] bg-[#ceff2a] mt-8 px-10 py-5 rounded-md transition-all duration-300 hover:bg-[#b8e824] hover:scale-105 tilt-zoom">
                Book a Strategy Call
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Development Strategy Section */}
      <section className="w-full py-20 px-4 bg-[#fffefb] max-w-[1700px] mx-auto ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#0C2233] leading-tight tracking-[-1px]">
              Development Strategy & Execution
            </h2>
            <p className="text-[18px] text-center sm:text-[20px] text-[#4b5563] mt-6 max-w-4xl mx-auto leading-[30px]">
              We don't just build products — we architect digital systems that
              perform. Our development approach combines UX thinking, performance
              optimization, CRO principles, and scalable engineering to ensure
              your product delivers real business impact.
            </p>
          </div>
        </div>
      </section>

      {/* CMS & Web Development */}
      <section className="w-full max-w-[1700px] mx-auto py-16 px-4 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-12">
            {/* <div className="w-14 h-14 bg-[#ceff2a] rounded-xl flex items-center justify-center">
              <HiOutlineCode className="text-3xl text-[#0C2233]" />
            </div> */}
            <h3 className="text-[24px] text-center sm:text-[32px] md:text-[40px] font-bold text-[#0C2233]">
              CMS & Web Development
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-5 min-[120rem]:px-0">
            {cmsServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <h4 className="text-[22px] sm:text-[26px] font-bold text-[#0C2233] mb-3">
                  {service.title}
                </h4>
                <p className="text-[16px] text-[#6b7280] mb-6 leading-relaxed">
                  {service.subtitle}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[16px] text-[#374151]"
                    >
                      <span className="w-2 h-2 bg-[#ceff2a] rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SaaS, CRM & ERP Development */}
      <section className="w-full py-16 px-4 ServiceBlue">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col justify-center items-center gap-4 mb-6">
            {/* <div className="w-14 h-14 bg-[#ceff2a] rounded-xl flex items-center justify-center">
              <HiOutlineCog className="text-3xl text-[#0C2233]" />
            </div> */}
            <h3 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-[#fffefb]">
              SaaS, CRM & ERP Development
            </h3>
            <p className="text-[18px] text-[#ffffff] mb-12 max-w-2xl">
              We build complex systems with simplicity at the core.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10 min-[120rem]:px-0 ">
            {saasServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a3a4f] rounded-2xl p-8 border border-[#2d4a5f] hover:border-[#ceff2a] transition-all duration-300"
              >
                <h4 className="text-[22px] sm:text-[26px] font-bold text-[#fffefb] mb-3">
                  {service.title}
                </h4>
                <p className="text-[16px] text-[#9ca3af] mb-6 leading-relaxed">
                  {service.subtitle}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[16px] text-[#d1d5db]"
                    >
                      <span className="w-2 h-2 bg-[#ceff2a] rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile App Development */}
      <section className="w-full max-w-[1700px] mx-auto py-16 px-4 bg-[#fffefb]">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col justify-center items-center gap-4 mb-6">
            {/* <div className="w-14 h-14 bg-[#ceff2a] rounded-xl flex items-center justify-center">
              <HiOutlineDeviceMobile className="text-3xl text-[#0C2233]" />
            </div> */}
            <h3 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-[#0C2233]">
              Mobile App Development
            </h3>
            <p className="text-[18px]  mb-12">
              Build mobile experiences users love.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 px-10 min-[120rem]:px-0">
            <div className="bg-gradient-to-br from-[#f0fdf4] to-[#ecfdf5] rounded-2xl p-8 border border-[#bbf7d0]">
              <h4 className="text-[22px] sm:text-[26px] font-bold text-[#0C2233] mb-3">
                iOS & Android App Development
              </h4>
              <p className="text-[16px] text-[#6b7280] mb-6">
                High-performance cross-platform and native apps.
              </p>
              <ul className="space-y-3">
                {mobileFeatures.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-[16px] text-[#374151]"
                  >
                    <span className="w-2 h-2 bg-[#22c55e] rounded-full mt-2 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#fefce8] rounded-2xl p-8 border border-[#fde047]">
              <h4 className="text-[22px] sm:text-[26px] font-bold text-[#0C2233] mb-6">
                Use Cases
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {mobileUseCases.map((useCase, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-xl p-4 text-center shadow-sm"
                  >
                    <p className="text-[15px] font-medium text-[#374151]">
                      {useCase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Automation & AI */}
      <section className="w-full max-w-[1700px] mx-auto py-16 px-4 ServiceBlue">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col justify-center items-center gap-4 mb-6">
            {/* <div className="w-14 h-14 bg-[#ceff2a] rounded-xl flex items-center justify-center">
              <HiOutlineLightningBolt className="text-3xl text-[#0C2233]" />
            </div> */}
            <h3 className="text-[24px] sm:text-[32px] md:text-[40px] font-bold text-[#fffefb]">
              Automation & AI-Powered Solutions
            </h3>
            <p className="text-[18px] text-[#ffffff] mb-12">
              Work smarter with intelligent systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 min-[120rem]:px-0">
            {automationServices.map((service, index) => (
              <div
                key={index}
                className="bg-[#1a3a4f] rounded-2xl p-8 border border-[#4d4d4d] hover:border-[#ceff2a] transition-all duration-300"
              >
                <h4 className="text-[22px] sm:text-[26px] font-bold text-[#fffefb] mb-6">
                  {service.title}
                </h4>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-[16px] text-[#d1d5db]"
                    >
                      <span className="w-2 h-2 bg-[#ceff2a] rounded-full mt-2 flex-shrink-0"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="w-full py-20 px-4 bg-[#fffefb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#0C2233] leading-tight">
              Tech Stack Expertise
            </h2>
            <p className="text-[18px] text-[#6b7280] mt-4">
              We choose technology based on performance, scalability, and future
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {Object.entries(techStack).map(([category, techs]) => (
              <div key={category} className="bg-[#f8fafc] rounded-2xl p-6">
                <h4 className="text-[16px] font-bold text-[#0C2233] mb-4 uppercase tracking-wide">
                  {category}
                </h4>
                <div className="space-y-3">
                  {techs.map((tech, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-[15px] text-[#374151]"
                    >
                      <tech.icon className="text-xl text-[#0C2233]" />
                      {tech.name}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Build & Optimize Section */}
      <section className="w-full py-16 px-4 bg-[#f0fdf4]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h3 className="text-[24px] sm:text-[32px] font-bold text-[#0C2233] mb-6">
                Build the Right Product to Maximize ROI
              </h3>
              <p className="text-[16px] text-[#6b7280] mb-6">
                Every feature, flow, and function is designed to serve a purpose.
              </p>
              <ul className="space-y-4">
                {[
                  "User-first UX/UI design",
                  "Performance-driven development",
                  "CRO-focused architecture",
                  "Security & scalability baked in",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-[17px] text-[#374151] font-medium"
                  >
                    <span className="w-3 h-3 bg-[#22c55e] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h3 className="text-[24px] sm:text-[32px] font-bold text-[#0C2233] mb-6">
                Continuous Optimization & Scaling
              </h3>
              <p className="text-[16px] text-[#6b7280] mb-6">
                Launch is just the beginning.
              </p>
              <ul className="space-y-4">
                {[
                  "Performance monitoring",
                  "Feature iteration",
                  "Conversion optimization",
                  "Scalability planning",
                ].map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-[17px] text-[#374151] font-medium"
                  >
                    <span className="w-3 h-3 bg-[#ceff2a] rounded-full"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="w-full py-16 px-4 bg-[#0C2233]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] font-bold text-[#fffefb] mb-12">
            Platforms We Work With
          </h2>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {platformIcons.map((platform, idx) => (
              <div
                key={idx}
                className="h-[50px] px-6 bg-[#9DC67C] rounded-[40px] flex items-center justify-center gap-2 text-[15px] font-semibold text-[#0C2233]"
              >
                <platform.icon size={20} />
                {platform.name}
              </div>
            ))}
          </div>

          <Link to="/get-started-with-havit-growth">
            <button className="text-[#0C2233] cursor-pointer text-[18px] md:text-[22px] font-bold p-4 bg-[#ceff2a] px-10 rounded-md transition-all duration-300 hover:bg-[#b8e824] hover:scale-105 tilt-zoom">
              Book a Strategy Call
            </button>
          </Link>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="w-full py-20 px-4 bg-[#fffefb]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
              CASE STUDIES
            </div>
            <h2 className="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-[#0C2233] mt-6 leading-tight">
              Case Studies & Results
            </h2>
            <p className="text-[18px] text-[#6b7280] mt-4 max-w-3xl mx-auto">
              We partner with startups, growing businesses, and enterprises to
              build products that scale.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {caseStudyMetrics.map((metric, idx) => (
              <div
                key={idx}
                className="bg-[#f8fafc] rounded-2xl p-8 text-center border border-gray-200"
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <img src={metric.icon} alt="up" className="w-5 h-5" />
                  <span className="text-[32px] font-bold text-[#0C2233]">
                    {metric.value}
                  </span>
                </div>
                <p className="text-[16px] text-[#6b7280]">{metric.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to={"/portfolios"}>
              <div className="inline-block px-8 py-3 border-2 border-[#0C2233] text-[#0C2233] text-[18px] font-semibold rounded-md hover:bg-[#0C2233] hover:text-white transition-all duration-300 tilt-zoom">
                View All Case Studies
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full py-20 px-4 bg-gradient-to-br from-[#1a3a4f] to-[#0C2233]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-medium text-[#fffefb] leading-relaxed mb-8">
            "We strategize together, build with clarity, and optimize
            continuously.
          </p>
          <div className="inline-block bg-[#cefd94] px-4 py-2 rounded">
            <p className="text-[20px] sm:text-[24px] lg:text-[28px] font-bold text-[#0c2233]">
              The result is a product that actually performs."
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <img src={star} alt="5 stars" className="w-[150px]" />
          </div>

          <div className="mt-8 text-center">
            <h4 className="text-[20px] font-semibold text-[#fffefb]">
              Client Testimonial
            </h4>
            <p className="text-[16px] text-[#9ca3af] text-center">
              Satisfied Partner
            </p>
          </div>
        </div>
      </section>

      <FinalSection text={box} />
      <Footer />
    </>
  );
}
