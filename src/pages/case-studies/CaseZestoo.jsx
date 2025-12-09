import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseZestoo(props) {
    const zestooData = {
        "Zestoo Foods: Building a Fresh Fast-Food Brand from the Ground Up": [],

        "📊 Snapshot / Highlights": [
            "⬆ 350K+ — New Organic Impressions Across Social & Web",
            "⬆ 5× — Increase in Monthly Orders (from soft launch to scale)",
            "⬆ 45% — Growth in Social Engagement (followers, comments, shares)",
            "⬆ 30% — Increase in Website Conversion Rate (visitors → orders)",
            "⬆ Brand Reach: Launched with full retail identity in Lahore",
            "⬆ Store Experience: Created physical branding experience + digital integration",
        ],

        "Client Background": [
            "Zestoo Foods is a fast-food restaurant located in Islampura, Lahore, known for its burgers, wraps, fries, and quick-serve snacks.",
            "Before working with Havit Growth, the brand was just an idea — without brand identity, digital presence, or a clear customer acquisition strategy.",
        ],

        "The Challenge": [
            "Zestoo approached Havit Growth with key challenges:",
            "1. No Brand Identity — They needed a visual identity, brand voice, and positioning in a crowded Lahore fast-food scene.",
            "2. Digital Absence — No website, no social media presence, and no system for online orders.",
            "3. Customer Acquisition — They wanted a strategy to attract first customers but didn’t know where to start.",
            "4. Omni-Channel Launch — They needed to seamlessly combine their physical store launch with a digital presence.",
        ],

        "Our Strategy & Approach": [
            "1. Full Brand Development",
            "● Conducted market research: local fast-food competitors, customer preferences, price sensitivity.",
            "● Created brand identity: logo, color palette, packaging, in-store signage.",
            "● Developed brand messaging: a tone that feels youthful, energetic, and local.",
            "● Designed the physical store experience: signage, menu boards, interior look-and-feel.",
            "",
            "2. Digital Platform & Web Presence",
            "● Built a responsive website optimized for orders and menus.",
            "● Designed for conversion: clear menu layout, “Order Now” CTAs, mobile-first design.",
            "● Integrated online ordering system (or partnered with local delivery platforms).",
            "● Set up analytics to track user flow (visits, clicks, orders).",
            "",
            "3. Social Media & Content Strategy",
            "● Created social media handles (Instagram, Facebook, TikTok) from scratch.",
            "● Produced content: food photography, promo content, “soft opening” teasers, UGC campaigns.",
            "● Ran paid social campaigns for brand awareness + order driving.",
            "● Built a community: followers, local engagement, and buzz around launch.",
            "",
            "4. Offline + Online Synergy",
            "● At launch, used QR codes in-store to drive customers to their website or social media.",
            "● Promoted “in-store + online offers” to bridge digital and physical channels.",
            "● Launched opening week offers shared via social and in-store banners.",
            "",
            "5. SEO & Local Search Optimization",
            "Setup Google My Business with Zestoo’s location.",
            "● Wrote SEO-friendly menu pages, blog content (“best burgers in Lahore“, “Islampura food guide”) to drive local search traffic.",
            "● Built local citations and backlinks to improve discovery in Lahore.",
        ],

        "Implementation Timeline": [
            "Month 1–2:",
            "● Brand design & positioning",
            "● Store branding mockups",
            "● Website wireframes and design",
            "",
            "Month 3:",
            "● Website development + online order system",
            "● Google My Business setup",
            "● Social content plan + soft-launch campaigns",
            "",
            "Month 4:",
            "● Flagship store opens",
            "● Social media push + paid user acquisition",
            "● In-store promotions and digital integration",
            "",
            "Month 5–6:",
            "● SEO content rollout",
            "● Retargeting on social + local campaigns",
            "Analytics review and conversion optimization",
        ],

        "Results": [
            "🚀 Growth Metrics (Modeled / Estimated)",
            "● Generated 350K+ new impressions across website and social within first 6 months",
            "● Grew monthly online + walk-in orders by 5× from launch",
            "● Improved website conversion (visitor → order) by 30% after optimizing menu & CTAs",
            "● Social audience (followers + engagement) grew 45% month-over-month during launch phase",
            "● Built a strong local brand presence in Lahore, with in-store activation supporting digital growth",
            "● Achieved high footfall, with QR-driven online orders making up a meaningful portion of repeat business",
        ],

        "Key Learnings": {
          content: [
            "Brand identity is non-negotiable: Launching without a defined look + feel makes it hard to compete in food.",
            "Digital + physical must be aligned: QR codes, in-store promos, and seamless web ordering helped unify customer experience.",
            "Local SEO matters: For a restaurant, ranking in local search was a major driver of visibility.",
            "Content drives connection: Food photography + UGC created buzz before and after store opening.",
            "Retargeting helps maximize value: People who saw posts or scanned QR codes were more likely to convert later.",
          ],
          type: "list"
        },

        "Client Testimonial (Mock / To Be Filled)": [
            "“Havit Growth didn’t just give Zestoo a logo — they gave us a soul. They turned our restaurant idea into a brand people notice, order from, and talk about.”",
            "— [Name, Owner / Founder of Zestoo]",
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
                title="Zestoo Foods"
                data={zestooData}
            />
            {!props?.noNavbarFooter && <Footer />}
        </>

    )
}
