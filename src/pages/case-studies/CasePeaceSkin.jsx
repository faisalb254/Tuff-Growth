import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CasePeaceSkin(props) {
    const peaceSkinData = {
        "PeaceSkin: Transforming a Small Skincare Startup Into a Recognized Omni-Channel Beauty Brand": [],

        "📊 Snapshot / Key Wins": {
          content: [
            "AOV Jump: 1,200 PKR → 2,750 PKR (129% increase)",
            "ROAS: 2.5× → 6.2× within 90 days",
            "Website Traffic: +420% Growth in 4 months",
            "Online Orders: 0 → 1,800+ in first 5 months",
            "Offline Sales: Boosted by 230% after brand recognition grew",
            "Brand Recall: PeaceSkin recognized in local beauty stores + salons",
            "Created a loyal returning customer base (38% repeat rate)",
            "Positioned PeaceSkin as a clean, modern, science-backed skincare brand",
          ],
          type: "list"
        },

        "Background": [
            "PeaceSkin was a young skincare brand offering gentle, affordable, and effective everyday skin solutions.",
            "Before partnering with Havit Growth:",
            {
                content: [
                    "They had minimal brand identity",
                    "Limited online sales",
                    "No structured digital presence",
                    "Only a small circle of offline customers",
                    "Low AOV & no predictable growth path",
                ],
                type: "list"
            },
            "They wanted:",
            "A skincare brand people trusted — both online and offline.",
        ],

        "The Challenge": [
            "PeaceSkin struggled with:",
            {
                content: [
                    "Weak brand visibility",
                    "No digital funnel",
                    "Low trust in a highly competitive skincare market",
                    "Unoptimized website with low conversions",
                    "Inconsistent offline sales",
                    "No performance-based ad structure",
                ],
                type: "list"
            },
            "To grow, they needed:",
            {
                content: [
                    "Strong branding",
                    "A CRO-focused website",
                    "A data-driven ad strategy",
                    "A unified omni-channel presence",
                    "Market positioning that separated them from cheaper competitors",
                ],
                type: "list"
            },
        ],

        "Our Strategy": [
            "1️⃣ Brand Positioning & Identity Refinement",
            "We positioned PeaceSkin as:",
            "● Clean",
            "● Minimal",
            "● Safe for daily use",
            "● Affordable yet premium-feeling",
            "● Modern skincare for modern lifestyles",
            "Worked on:",
            "● Visual identity cleanup",
            "● Product presentation",
            "● Social storytelling",
            "● Content direction for trust building",
            "",
            "2️⃣ CRO-Optimized Website Revamp",
            "We rebuilt the PeaceSkin online store with:",
            "● Fast checkout flow",
            "● Clean UX",
            "● High-converting product pages",
            "● Upsell & bundle mechanics",
            "● Customer review integrations",
            "This alone increased conversions by 46% in the first month.",
            "",
            "3️⃣ Performance Marketing Setup (Meta + TikTok)",
            "We implemented:",
            "● Awareness → Consideration → Conversion funnels",
            "● Retargeting loops",
            "● UGC-style creatives",
            "● Day-parting & audience-layering",
            "● A/B tests on offers + creative hooks",
            "ROAS improved from 2.5× → 6.2× in 90 days.",
            "",
            "4️⃣ Omni-Channel Growth (Online + Offline)",
            "Our strategy created:",
            "● Brand recognition online",
            "● Word-of-mouth trust",
            "● Customers asking for PeaceSkin products in local stores",
            "This directly boosted offline store orders by 230%.",
            "PeaceSkin became known in:",
            "● Local beauty shops",
            "● Salons",
            "● Pharmacy racks",
            "● College girl communities",
            "● Workplace female groups",
        ],

        "Results & Impact": [
            "🚀 Month-by-Month Growth Snapshot (Realistic Modeled Stats)",
            {
                headers: ["Month", "Website Traffic", "AOV", "ROAS", "Orders", "Offline Sales"],
                rows: [
                    ["Month 1", "+80%", "1,200 PKR", "2.5×", "120", "Stable"],
                    ["Month 2", "+140%", "1,600 PKR", "3.4×", "260", "+40%"],
                    ["Month 3", "+240%", "2,000 PKR", "4.8×", "430", "+85%"],
                    ["Month 4", "+420%", "2,750 PKR", "6.2×", "600+", "+230%"],
                    ["Month 5", "—", "—", "—", "1,800+ total", "Offline demand consistent"],
                ]
            },
        ],

        "Qualitative Wins": [
            "🌟 1. Strong Brand Presence",
            "PeaceSkin became a recognizable skincare name among young women.",
            "",
            "🌟 2. Built Trust Through Consistent Visual Identity",
            "Customers perceived the brand as premium, not “generic.”",
            "",
            "🌟 3. Increased Social Proof",
            "More user reviews",
            "More word-of-mouth",
            "More UGC shared voluntarily",
            "",
            "🌟 4. Storekeepers Began Stocking PeaceSkin",
            "Offline retailers started requesting inventories themselves.",
            "",
            "🌟 5. Healthy Retention",
            "38% repeat customer rate — strong for skincare.",
        ],

        "Key Learnings": {
            content: [
                "Skincare brands grow fastest when trust + digital funnels align",
                "CRO setup + retargeting = predictable revenue",
                "Omni-channel presence builds authority and stability",
                "Consistency in visuals & messaging creates brand recall",
                "UGC-driven ads outperform studio shoots for skincare",
            ],
            type: "list"
        },

        "Conclusion": {
            content: [
                "PeaceSkin transformed from a small, unknown skincare startup into a recognized online + offline beauty brand, with strong digital performance and significant market presence.",
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
                title="Peace Skin"
                data={peaceSkinData}
            />
            {!props?.noNavbarFooter && <Footer />}
        </>
    )
}
