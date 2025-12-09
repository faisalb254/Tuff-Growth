import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseFgf(props) {
    const fairGradeData = {
        "FairGrade Forests – Brand Positioning, Social Optimization & Fundraising Growth for a Greener Planet": [],

        "📊 Key Results": {
          content: [
            "85,00+ Social Media Community Growth",
            "3.5× Increase in Monthly Website Traffic",
            "2.8× Higher Engagement across social channels",
            "Fundraising Campaign ROI: 4.2×",
            "10X Funds Raised through digital campaigns",
            "80% Growth in online donor participation",
            "3 Successful Online Events with a combined reach of 500,000+ viewers",
            "Brand Awareness Lift: +340% across eco-audiences",
            "Volunteer Signups Increased by 170%",
          ],
          type: "list"
        },

        "Client Background": [
            "FairGrade Forests is an environmental and sustainability-focused NGO dedicated to reforestation, climate action, and environmental education.",
            "Their mission: plant trees, restore forests, and mobilize communities for a greener, sustainable future.",
            "However, before partnering with Havit Growth Agency, the organization struggled with:",
            "● A weak digital presence",
            "● Lack of brand positioning clarity",
            "● Low engagement on social media",
            "● Minimal donor conversions",
            "● Underperforming fundraising campaigns",
            "● No structured online event strategy",
            "",
            "They needed a complete digital uplift — and a brand identity that matched the scale of their mission.",
        ],

        "Our Strategic Approach": [
            "1️⃣ Brand Positioning & Identity Refinement",
            "We rebuilt FairGrade Forests’ brand foundation:",
            "● Defined a clear brand voice: hopeful, action-driven, community-first",
            "● Designed story-based brand messaging",
            "● Created a positioning framework around “Climate Action Starts With Us”",
            "● Developed hero narratives to highlight impact",
            "● Ensured all visuals aligned with eco-friendly tone (nature-inspired palettes, soft organic textures)",
            "Outcome: A recognizable, trustworthy, emotionally charged brand.",
            "",
            "2️⃣ Social Media Optimization",
            "We turned their dormant pages into high-engagement social hubs:",
            "● Revamped all social profiles",
            "● Optimized bios, highlights, story categories",
            "● Set up content pillars:",
            "1. Planet Education",
            "2. Impact Stories",
            "3. Events & Plantation Drives",
            "4. Volunteer & Donor Spotlights",
            "5. Reforestation Updates",
            "● Increased posting consistency",
            "● Added human-centric storytelling",
            "Result:",
            "2.8× engagement and 85,000+ followers through organic + campaign growth.",
            "",
            "3️⃣ Digital Fundraising Campaigns",
            "We created multi-stage fundraising funnels:",
            "🟢 Awareness",
            "● Emotional storytelling",
            "● “Before & After Forest Restoration” visuals",
            "● Climate education Reels",
            "● Influencer shoutouts",
            "🟡 Consideration",
            "● Donor impact stats",
            "● “Plant a Tree = Save a Life” micro-campaign",
            "● Transparent fund usage breakdown",
            "🔴 Conversion",
            "● High-intent video ads",
            "● UGC content from volunteers",
            "● Website donation landing pages optimized for CRO",
            "Result:",
            "● $220,000+ funds raised",
            "● 4.2× ROI on paid fundraising campaigns",
            "",
            "4️⃣ Online Event Coverage & Streaming",
            "We handled concept, promotion, and live coverage for events including:",
            "● Green Action Summit",
            "● International Tree Plantation Day",
            "● Eco Learning Workshop for Schools",
            "● Climate Talks with guest speakers",
            "● Remote plantation drives live-streamed",
            "Impact:",
            "● 6 successful events",
            "● 500K+ total reach across platforms",
            "● Massive increase in volunteer participation",
            "",
            "5️⃣ Website Traffic & Donor Optimization",
            "We improved:",
            "● Website funnel flow",
            "● Donation landing pages",
            "● Blog optimization",
            "● SEO for climate-related topics",
            "● Mobile-first donation experience",
            "Achievements:",
            "● 3.5× increase in monthly site traffic",
            "● 110% increase in donor participation",
        ],

        "Impact Summary": [
            "FairGrade Forests now stands as a digitally empowered eco-organization, with:",
            "● Clear brand identity",
            "● Strong online community",
            "● Solid donor ecosystem",
            "● High-performing fundraising campaigns",
            "● Scaled social impact",
            "● Consistent volunteer engagement",
            "",
            "Our partnership helped transform the organization into a recognized digital green movement.",
        ],

        "Conclusion": [
            "Havit Growth Agency didn’t just handle FairGrade Forests’ online presence —",
            "we built them a movement, a voice, and a digital ecosystem capable of increasing environmental impact & global reach.",
            "Together, we turned awareness into action and action into planet-saving results.",
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
                title="FairGrade Forests"
                data={fairGradeData}
            />
            {!props?.noNavbarFooter && <Footer />}
        </>
    )
}
