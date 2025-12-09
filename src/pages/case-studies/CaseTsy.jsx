import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseTsy(props) {
    const tsyData = {
        "TSY – Transforming a Traditional Travel Agency Into a Digitally Dominant Brand": [],

        "📊 Key Results (First 6–7 Months)": {
          content: [
            "2,700% Increase in online inquiries",
            "8.4× Growth in monthly revenue",
            "600% Boost in total website traffic",
            "5.1× Average ROAS on paid campaigns",
            "47% Lower CPL (Cost Per Lead)",
            "420% Increase in organic traffic",
            "2× Growth in offline walk-in bookings",
            "31% Higher lead-to-booking conversion rate",
            "120% Increase in returning customers",
          ],
          type: "list"
        },

        "Client Overview": [
            "TSY Travels is a long-standing travel agency in Pakistan with strong offline credibility but minimal digital presence.",
            "Their sales heavily relied on walk-ins and word-of-mouth, leaving large online opportunities untapped.",
        ],

        "Our Approach": [
            "1. Brand Revitalization",
            "We upgraded TSY’s brand identity to match global travel industry standards.",
            "● Clean, modern visuals",
            "● Trust-building communication",
            "● Enhanced corporate appeal",
            "● Premium look & feel",
            "",
            "2. CRO-Optimized Website Development",
            "We redesigned TSY’s website into a high-performance lead generation engine.",
            "● Conversion-focused service pages",
            "● User-friendly booking flows",
            "● Faster loading speed",
            "● WhatsApp + CTA integration",
            "● Analytics & tracking setup",
            "Outcome: The website became their #1 source of inquiries.",
            "",
            "3. SEO Strategy That Brought Real Traffic",
            "We optimized TSY across all major travel-related keywords:",
            "● “Flight booking Pakistan”",
            "● “Visa services”",
            "● “Umrah packages”",
            "● “International tour packages”",
            "Deliverables included:",
            "● Technical SEO fixes",
            "● Content optimization",
            "● Keyword mapping",
            "● Backlink strategy",
            "Result: Organic traffic surged by +420%.",
            "",
            "4. Performance Marketing Campaigns",
            "We built multi-layered funnels across social and search:",
            "● Awareness → Consideration → Booking",
            "● Retargeting loops",
            "● High-intent Google search ads",
            "● Audience segmentation (students, families, corporate travelers)",
            "Outcome:",
            "Consistent 5.1× ROAS and a 47% drop in CPL.",
            "",
            "5. End-to-End Digital Transformation",
            "We modernized TSY’s entire digital operations:",
            "● Full social presence",
            "● Automated lead handling",
            "● CRM for tracking, reminders, and follow-ups",
            "● Google My Business optimization",
            "● UGC-style trust content",
            "This ensured smoother operations & better customer retention.",
        ],

        "Impact & Growth": [
            "📈 Online Inquiries",
            "From nearly zero digital leads to 85+ qualified inquiries per day.",
            "Growth: 2,700%",
            "",
            "💸 Sales Growth",
            "Online bookings became their primary revenue stream.",
            "Growth: 8.4× in 7 months",
            "",
            "🌐 Website Traffic Growth",
            "● +600% total traffic",
            "● +420% organic traffic",
            "● 35% lower bounce rate",
            "",
            "⚡ Lead Quality & Conversions",
            "● Lead-to-booking conversion up 31%",
            "● Return customers up 120%",
            "● Corporate leads up 300%",
            "",
            "🏢 Offline Boost",
            "TSY’s improved digital presence also fueled physical business:",
            "● 2× increase in walk-ins & counter sales",
            "● Customers actively mentioning they discovered TSY online",
        ],

        "End Result": [
            "TSY successfully evolved from an old-school travel agency into a fast-growing, digitally dominant travel brand.",
            "We didn’t just build their marketing —",
            "we built a scalable growth ecosystem.",
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
                title="Tsy"
                data={tsyData}
            />
            {!props?.noNavbarFooter && <Footer />}
        </>
    )
}
