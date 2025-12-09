import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseLdnio(props) {
  const ldnioData = {
    "LDNIO Pakistan: From Zero Presence to ₨10M in Just 7 Months — Brand Launch, Store Activation & D2C Growth Engine": [],

    "📊 Snapshot / Highlights": [
      "⬆ ₨10 Million+ — Revenue in First 7 Months",
      "⬆ 5× – 6× — ROAS Every Single Month",
      "⬆ 80,000+ — New Organic Users via SEO",
      "⬆ 92% — Website Conversion Funnel Efficiency",
      "⬆ AOV Growth: ₨5,000 → ₨9,000",
      "⬆ 1st Flagship Store — Lahore, Full Branding & Launch Setup",
      "⬆ 0 → 100% Digitalized Brand Presence (Web + Social + Retail)",
    ],

    "Client Background": [
      "LDNIO is a globally recognized fast-charging accessories and electronics brand. Known for high-quality chargers, data cables, power strips, and car charging devices — LDNIO products are sold in over 100+ countries.",
      "When they entered Pakistan, they didn't have:",
      "● A local brand presence",
      "● A D2C website",
      "● Any social media footprint",
      "● No physical retail store",
      "● No marketing funnel",
      "● No channel domination",
      "They came to Havit Growth to build their Pakistan presence from scratch — and scale fast.",
    ],

    "The Challenge": [
      "LDNIO wanted to:",
      "● Enter a competitive accessories market",
      "● Launch in a price-sensitive economy",
      "● Build trust with Pakistani buyers",
      "● Acquire customers profitably",
      "● Establish a retail footprint",
      "● Achieve fast revenue traction",
      "● Compete with faster, cheaper Chinese imports",
      "And they needed all of it — with zero existing brand equity.",
    ],

    "Our Strategy & Approach": [
      "1. Full Brand Setup & Market Entry Strategy",
      "We started from zero:",
      "● Market & competitor research",
      "● Pricing psychology & positioning",
      "● Messaging framework for Pakistan",
      "● New visual identity adaptation",
      "● Local brand persona & communication tone",
      "We didn’t “launch a brand.”",
      "We engineered a market entry strategy.",
      "",
      "2. CRO-Optimized E-Commerce Website",
      "We built a high-converting store:",
      "● Fast, fully responsive site",
      "● CRO-focused layout",
      "● Smart product page architecture",
      "● Bundling & upsell systems",
      "● Integrated local logistics + payment",
      "● Full funnel tracking & analytics",
      "Results:",
      "AOV jumped from ₨5,000 → ₨9,000 with optimization cycles.",
      "",
      "3. SEO Strategy to Build Foundational Organic Growth",
      "We didn’t wait for ads to do all the work.",
      "We executed continuous SEO from Day 1:",
      "● Technical SEO",
      "● Product keyword mapping",
      "● Category landing pages",
      "● Blog content clusters",
      "● Backlinks & authority building",
      "Organic results:",
      "● 80,000+ new users from SEO",
      "Ranking for charging accessories, cables & fast chargers",
      "● Top search visibility against local competitors",
      "",
      "4. Full-Funnel Paid Strategy (Meta + Google)",
      "We launched + refined:",
      "● Awareness campaigns",
      "● Retargeting funnels",
      "● Dynamic product ads",
      "● Seasonality bursts (11.11, 12.12, Ramadan, Jashn-e-Azaadi)",
      "We maintained:",
      "5× – 6× ROAS for 7 months straight",
      "Through:",
      "● Smart lookalike audiences",
      "● Intent-based traffic",
      "● High-performing creative",
      "● Offer sequencing",
      "● Spend efficiency focus",
      "",
      "5. 360° Brand Digitalization",
      "We took LDNIO from “offline OEM” → Pakistani D2C brand",
      "● Instagram",
      "● TikTok",
      "● Facebook",
      "● YouTube",
      "● Google Shopping",
      "● Website tracking",
      "● Email automations",
      "● WhatsApp commerce",
      "● Influencers & UGC",
      "Everything synced into a single growth ecosystem.",
      "",
      "6. Flagship Store Launch — Lahore",
      "We fully executed:",
      "● Store identity + interior branding",
      "● Product displays & experiential layout",
      "● Launch campaign",
      "● Retail-to-online synergy via QR journeys",
      "● Multi-channel promo amplification",
      "This wasn’t just a store opening —",
      "it was a retail brand activation event.",
    ],

    "Implementation Timeline": [
      "Month 1–2",
      "Brand research, identity, positioning, e-commerce build",
      "",
      "Month 3–4",
      "SEO foundation, ad funnel launch, social activation",
      "",
      "Month 5–6",
      "AOV lift, remarketing scaling, organic traffic surge",
      "",
      "Month 7",
      "₨10M milestone + Lahore flagship store launch",
    ],

    "Results": [
      "🚀 Growth Metrics",
      "⬆ ₨10 Million in 7 Months — starting from zero",
      "⬆ AOV from ₨5k → ₨9k",
      "⬆ 5× – 6× ROAS maintained every month",
      "⬆ 80,000+ organic visitors from SEO",
      "⬆ 92% checkout funnel efficiency",
      "⬆ 1,000s of repeat customers within 6 months",
      "And most importantly...",
      "LDNIO is now one of Pakistan’s fastest-growing mobile accessory brands.",
    ],

    "Key Learnings": {
      content: [
        "Launching without data is a mistake — research built the foundation",
        `We didn't "push ads", we engineered demand`,
        "CRO + AOV strategy did the heavy lifting for profit",
        "SEO ensured long-term, free traffic (instead of ad-only reliance)",
        "Syncing retail + D2C builds unmatched brand trust",
        `A "brand system" scales faster than a "sales strategy"`,
      ],
      type: "list"
    },

    "Client Testimonial": [
      "“We were new. Zero presence. Havit made us not just visible — but dominant. Their strategy didn’t just generate sales, it established LDNIO as a serious brand in Pakistan.”",
      "— Official LDNIO Pakistan Team",
    ],
  };


  return (
    <>
      {!props?.noNavbarFooter && (
        <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
          <Navbar />
        </div>
      )}
      <CaseStudy
        title="LDNIO"
        data={ldnioData}
      />
      {!props?.noNavbarFooter && <Footer />}
    </>
  )
}
