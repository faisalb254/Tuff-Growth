import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseCheckIn(props) {
  const checkinData = {
    "📈 Snapshot / Highlights": {
      content: [
        "⬆ 2.3M+ — Increase in Total Impressions",
        "⬆ 62% — Increase in App Sign-Ups",
        "⬆ 48% — Increase in Booking Conversion Rate (BCR)",
        "⬆ 71% — Growth in Monthly Online Bookings",
        "⬇ 36% — Reduction in Cost Per Acquisition (CPA)",
        "⬆ 3.2× — Return on Ad Spend (ROAS) after scaling",
      ],
      type: "list"
    },

    "Client Background": [
      "CheckIn.pk is one of Pakistan’s earliest digital travel platforms — a pioneer offering online flight and hotel bookings long before it became the norm.",
      "The vision:",
      "Make travel booking simple, fast, local & 100% online.",
      "But after several years in the market, competitors caught up. The brand felt outdated. The platform was losing momentum.",
      "They needed a relaunch, not just a redesign.",
    ],

    "The Challenge": [
      "Before working with Havit Growth, CheckIn.pk was stuck in a growth plateau:",
      {
        content: [
          "Outdated brand identity and weak digital presence",
          "Inefficient funnel — high drop-off during booking flow",
          "Lack of mobile-first UX",
          "No scalable growth marketing engine",
          "Rising acquisition costs and low conversion confidence",
        ],
        type: "list"
      },
      "Their biggest question:",
      `"How do we become the best online travel experience in Pakistan — again?"`,
    ],

    "Our Strategy & Approach": [
      "1. Brand Repositioning & Identity Refresh",
      "We rebuilt the brand from the ground up:",
      {
        content: [
          "Modernized visuals & logo",
          "Clearer, sharper messaging",
          "Positioning focused on trust, local expertise & ease",
        ],
        type: "list"
      },
      "The goal: look like the future of Pakistani travel.",
      "",
      "2. Full Website & App Experience Rebuild",
      "We redesigned the UX with data and simplicity at the center:",
      {
        content: [
          "3-step booking flow",
          "Faster search + checkout",
          "Real-time API flight data",
          "Secure multi-gateway payment system",
          "App and site fully responsive and mobile-optimized",
        ],
        type: "list"
      },
      "This wasn't a redesign.",
      "It was a re-engineering of the user journey",
      "",
      "3. Multi-Channel Growth Marketing Engine",
      "We launched new campaigns across:",
      {
        content: [
          "Meta Ads (awareness + retargeting)",
          "Google Search & Performance Max",
          "App Store Optimization",
          "Travel content & email flows",
          "Retargeting audiences based on behaviors (browse, cart, abandoned booking)",
        ],
        type: "list"
      },
      "We built a system designed to scale — not burn cash.",
      "",
      "4. Data & Conversion Optimization",
      "A/B tests across:",
      {
        content: [
          "Search screens",
          "Checkout UI",
          "App onboarding steps",
          "Content messaging",
          "Trust badges & social proof",
        ],
        type: "list"
      },
      "These small UX upgrades → big conversion wins.",
    ],

    "Implementation Timeline": [
      "Month 1–2:",
      "Brand audit, messaging, new UI/UX, funnel rebuild",
      "",
      "Month 3–4:",
      "App + web launch, analytics integration, campaign rollout",
      "",
      "Month 5–6:",
      "Scaling growth channels, retargeting, CRO testing, performance optimization",
    ],

    "Results": [
      "🚀 Performance Stats",
      {
        content: [
          "⬆ 2.3M+ — Total Impressions",
          "⬆ 62% — New App Sign-Ups",
          "⬆ 48% — Higher Booking Conversion Rate",
          "⬆ 71% — Increase in Monthly Bookings",
          "⬇ 36% — Drop in CPA",
          "⬆ 3.2× — ROAS After Optimization",
        ],
        type: "list"
      },
    ],

    "Key Learnings": {
      content: [
        "Brand freshness drives trust — especially in digital travel.",
        "Fixing UX = more growth than spending more ad money.",
        "Local targeting + retargeting = lower CPA & better ROAS.",
        "App onboarding was a major lever — simplifying it increased bookings.",
        "Continuous CRO made the system smarter every month.",
      ],
      type: "list"
    },

    "Client Testimonial": {
      content: [
        `"This didn't feel like hiring an agency — it felt like a growth partner. Havit rebuilt not just our product, but our momentum. We're now scaling confidently again."`,
        "— Yousaf Rizvi, Co-Founder — CheckIn.pk",
      ],
      type: "paragraph"
    },
  };

  return (
    <>
      {!props?.noNavbarFooter && (
        <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
          <Navbar />
        </div>
      )}
      <CaseStudy
        title="CheckIn.pk"
        data={checkinData}
      />
      {!props?.noNavbarFooter && <Footer />}
    </>
  )
}
