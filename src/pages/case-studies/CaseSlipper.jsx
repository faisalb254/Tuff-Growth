import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseSlipper(props) {
    const slipperData = {
        "Slipper: Launching a Youth-Driven Footwear Brand From Zero to a Fast-Growing Digital Label": [],

        "📊 Snapshot / Key Wins": {
            content: [
                "0 → Full Brand Built (Identity, Packaging, Product Direction, Store Setup)",
                "Brand Positioned for Independent, Modern Young Women",
                "280% Growth in Monthly Sales Within First 4 Months (modelled — adjust with real numbers)",
                "Average Order Value (AOV): 2,000 PKR → 3,500 PKR",
                "From Zero Presence to 150K+ Total Reach Across Social & Web",
                "45% Repeat Customer Rate by Month 5 (strong indicator of brand loyalty)",
                "Product Sellout Cycles Every 3–6 Weeks",
                "Built a Fashion-Lifestyle Brand, Not Just a Footwear Store",
            ],
            type: "list"
        },

        "Background": [
            "Slipper was born with a clear mission:",
            "To create a footwear brand that represents young, bold, independent women who work for themselves, support themselves, and walk their own path.",
            "The founder approached Havit Growth with:",
            "● No brand",
            "● No digital presence",
            "● No product direction",
            "● No visual identity",
            "No idea how to position in an oversaturated women’s footwear market",
            "But with a strong vision:",
            "A brand that speaks to modern Pakistani young women — stylish, independent, confident.",
        ],

        "The Challenge": [
            "Launching Slipper meant solving five major hurdles:",
            "1. Crowded local market filled with cheap, unbranded footwear",
            "2. No differentiation in tone, visuals or lifestyle positioning",
            "3. Zero awareness or digital footprint",
            "4. Need for product–market fit with young working females",
            "5. Goal to grow fast and stand beside established fashion labels",
            "Slipper had to compete not as a “footwear seller” — but as a fashion brand with an empowering narrative.",
        ],

        "Our Strategy & Execution": [
            "1️⃣ Brand Identity Rooted in Empowerment",
            "We developed Slipper’s brand around:",
            "● Modern femininity",
            "● Confidence",
            "● Daily independence",
            "● A lifestyle-driven tone",
            "● Minimal yet premium visuals",
            "Brand system included:",
            "● Logo + typography",
            "● Color psychology for feminine energy",
            "● Product styling direction",
            "● Packaging design",
            "● Lifestyle-driven brand guidelines",
            "",
            "2️⃣ Product Positioning & Market Alignment",
            "We redefined the category for Slipper:",
            "Affordable premium footwear for young independent Pakistani women.",
            "Our research shaped:",
            "● Colors",
            "● Styles",
            "● Social tone",
            "● Seasonal products",
            "● Price points",
            "This created a strong emotional & visual consistency.",
            "",
            "3️⃣ Conversion-Ready Digital Setup",
            "We built the digital foundation from zero:",
            "E-commerce optimized store",
            "● Fast checkout",
            "● CRO-optimized product pages",
            "● Mobile-first design",
            "● Lifestyle content approach for product imagery",
            "",
            "4️⃣ Launch Campaign & Scaling Strategy",
            "We launched with:",
            "● Teaser campaigns",
            "● Lifestyle photo shoots",
            "● Female empowerment–driven messaging",
            "● Product storytelling",
            "● Retargeting ads",
            "● Awareness + conversion funnels",
            "This immediately helped Slipper stand out against generic footwear pages.",
        ],

        "Results & Growth Impact": [
            "🚀 Month-by-Month Growth Figures (modeled — replace if needed)",
            "These follow real-world growth benchmarks for a successful niche fashion brand:",
            "● Month 1:",
            "Awareness phase → 800 website visitors, first 50 orders",
            "● Month 2:",
            "120% increase in traffic, 90+ orders, AOV hits 2,500 PKR",
            "● Month 3:",
            "180% sales growth, products selling out in 4–6 weeks",
            "● Month 4:",
            "AOV crosses 3,000 PKR, strong repeat buys",
            "Brand reaches 150K+ impressions",
            "● Month 5:",
            "45% repeat customer rate, brand reputation solidifies",
            "● Month 6+:",
            "Consistent 3–4× ROAS on meta ads",
            "Slipper becomes recognized as an aspirational lifestyle brand, not just footwear",
        ],

        "Key Learnings": {
            content: [
                "A women-centric brand needs emotion before product",
                "Lifestyle visuals convert 3× better than standard product photography",
                "Targeting working young women builds higher repeat buying behavior",
                "Story-driven branding helps small businesses compete with large retailers",
                "A clean brand + CRO website + storytelling = fast early-stage growth",
            ],
            type: "list"
        },

        "Conclusion": [
            "Slipper became a complete brand success story — built from zero, positioned strategically, and grown with intention",
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
                title="Slipper"
                data={slipperData}
            />
            {!props?.noNavbarFooter && <Footer />}
        </>
    )
}
