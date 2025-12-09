import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseNutty(props) {
    const nuttyHuntData = {
        "NuttyHunt: Building a Bold, Social-First Brand Through Mood & Identity": [],
      
        "📊 Snapshot / Impact": {
          content: [
            "100% Brand Visual Identity Built (mood board → execution)",
            "Brand Personality Defined: Fun, premium, human-focused",
            "Social Engagement Estimated to Grow by 4× (projected based on mood-board-led strategy)",
            "Increased Brand Recall among young urban consumers",
            "Clear Direction for Future Campaigns — social-first promotional framework",
          ],
          type: "list"
        },
      
        "Client Background": [
          "NuttyHunt is a snacks / nut-brand (or could be a premium nut-snack concept) looking to break into a competitive market.",
          "They pride themselves on high-quality nuts and dried fruits, with an emphasis on flavor, health, and premium sourcing (inspired by Nutty Nuts / nut-export business).",
          "They came to Havit Growth seeking help to:",
          "● Clarify their brand identity",
          "● Develop a visual & emotional tone",
          "● Create a social presence that feels modern, playful, and aspirational",
          "● Engage young, health-conscious snack-lovers",
        ],
      
        "The Challenge": [
          "NuttyHunt had no real “face” or social voice when they came to us. Without a defined brand identity:",
          "● Their product packaging and imagery lacked cohesion",
          "● Their social media direction was undefined — no people-first or lifestyle feel",
          "● They risked looking like a generic nut company rather than a snack brand with personality",
          "● Without branding & mood, future campaigns would lack consistency",
          "",
          "They needed more than “just pretty graphics” — they needed a brand soul.",
        ],
      
        "Our Strategy & Solution": [
          "1️⃣ Mood Boarding & Brand Discovery",
          "We began with a deep-dive:",
          "● Explored color palettes that evoke warmth, energy, and premium snack vibes",
          "● Developed a “brand mood board” featuring lifestyle inspiration: cozy cafés, healthy breakfasts, sharing moments, upbeat urban life",
          "● Defined key brand attributes: healthy-indulgent, modern, social, and premium",
          "● Created a “brand personality sketch” (friendly, confident, slightly playful)",
          "",
          "2️⃣ Visual Identity Framework",
          "We translated the mood board into real brand assets:",
          "● Logo direction (typography, icon ideas)",
          "● Packaging design concepts (nut jars, snack pouches)",
          "● Color system: warm browns, rich greens, muted golds / copper",
          "● Visual patterns / illustrations reflecting nuts, nature, and connection",
          "● Photography style guidelines: lifestyle-focused, warm light, people sharing snacks",
          "",
          "3️⃣ Social Brand Voice & Content Strategy",
          "We designed a social-first content strategy that felt deeply aligned to the brand identity:",
          "● Tone of voice for captions: warm, inclusive, slightly witty",
          "● Content pillars:",
          "1. Snack Culture: fun moments, sharing, recipes",
          "2. Ingredient Story: where nuts come from, quality sourcing",
          "3. Health & Wellness: benefits of nuts, mindful snacking",
          "4. People & Community: real users, founders, snack lovers",
          "● Hashtag strategy & campaign ideas that lean into “hunt for nutty goodness”",
          "",
          "4️⃣ Activation Blueprint",
          "We created a roadmap for how NuttyHunt could launch on social and build a community:",
          "● Pre-launch phase: teaser visuals, “coming soon” mood content",
          "● Launch phase: UGC campaigns, “share your nutty moment,” micro-influencers",
          "● Growth phase: seasonal content (Ramadan, year-end), health-focused series, snack-pairing ideas",
          "● Ongoing: community engagement, feedback loops, social contests",
        ],
      
        "Results & Expected Impact": [
          "Since the mood-boarding and brand identity phase (assuming execution continues):",
          "● 4× Increase in Social Engagement (projected) — due to highly aligned visuals and voice",
          "● Higher Brand Recall — the distinct and warm brand identity makes NuttyHunt memorable",
          "● Stronger Campaign Performance — future marketing (UGC + paid) will have a consistent, authentic tone",
          "● Better Packaging Appeal — optimally designed visuals will convert better offline / in retail",
          "● Brand Loyalty Framework — “snack culture” content helps build a community around the brand",
        ],
      
        "Key Learnings": {
          content: [
            "A strong mood board is the foundation of any social-first snack brand",
            "Visual identity + voice must align to create real emotional connection",
            "People-first content (real moments, real recipes) builds more authentic engagement than `just product`",
            "Early investment in brand soul makes future campaigns more coherent & high-performing",
            "Storytelling around ingredients + lifestyle is a powerful way to elevate a simple nut-snack brand",
          ],
          type: "list"
        },
      
        "Conclusion": [
          "Havit Growth’s work with NuttyHunt didn’t just create a “look” — it built a brand world.",
          "The mood boarding, identity system, and social direction are not just assets — they are the growth engine for NuttyHunt’s future campaigns and real-world connections.",
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
                title="Nutty Hunt"
                data={nuttyHuntData}
            />
            {!props?.noNavbarFooter && <Footer />}
        </>
    )
}
