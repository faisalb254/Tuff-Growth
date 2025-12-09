import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseTgr(props) {
    const tgrData = {
        "TGR: Building a Purpose-Driven Podcast Brand to Inspire Growth": [],

        "📊 Snapshot / Impact": [
            "🎙 0 → Full Podcast Brand Identity Built",
            "🚀 Launched a Socially-Driven Platform Focused on IT, Society & Human Growth",
            "💡 Unique Format Created: Real People, Real Rooms, Real Stories",
            "🔥 Positioned TGR as a Niche Thought-Leadership Media Brand",
            "🌱 Became a Voice for Underrepresented, Everyday Heroes in the Tech Industry",
        ],

        "Background": [
            "TGR — The Growth Room — was created with a bold vision:",
            "To bring forward the untold struggles, journeys, and growth stories of individuals who shape the IT and digital ecosystem, but rarely get recognition.",
            "Unlike typical celebrity-driven podcasts, TGR focused on:",
            "● Societal issues",
            "● Challenges in the IT industry",
            "● Mental health & work-life balance",
            "● Growth journeys of real people",
            "● Hidden talent and unknown achievers",
            "The idea was simple but powerful:",
            "Every growth story starts in a small room — and TGR wanted to show those rooms.",
        ],

        "The Challenge": [
            "TGR came to Havit Growth with:",
            "● No name",
            "● No identity",
            "● No positioning",
            "● No media direction",
            "● No structure for episodes",
            "● No brand experience",
            "",
            "The team had the vision but needed complete brand creation, story development, and platform identity.",
            "They wanted a podcast brand that felt:",
            "● Inspirational",
            "● Human",
            "● Raw",
            "● Real",
            "● Modern",
            "● Emotionally engaging",
            "",
            "And above all — a brand that represented growth.",
        ],

        "Our Approach": [
            "⃣ Brand Concept & Story Creation",
            "We developed TGR – The Growth Room as a brand rooted in:",
            "● Personal evolution",
            "● Career struggles",
            "● Resilience",
            "● Human transformation",
            "● Stories that inspire change",
            "The name itself became the identity — reflecting:",
            "● The literal rooms where people started",
            "● The metaphorical “growth rooms” of their lives",
            "● The small spaces where big dreams were born",
            "",
            "2️⃣ Complete Podcast Branding",
            "We created a full visual brand system:",
            "● Logo",
            "● Typography",
            "● Color psychology for inspiration & calm",
            "● Thumbnail series templates",
            "● Episode identity framework",
            "● Studio branding direction",
            "Everything was designed to feel:",
            "✔ Clean",
            "✔ Modern",
            "✔ Purpose-driven",
            "✔ Story-focused",
            "",
            "3️⃣ Format & Content Strategy",
            "We built the storytelling structure:",
            "● Episode flow",
            "● Intro/outro script tone",
            "● Types of guests (unknown talents + industry voices)",
            "● Themes focusing on IT industry struggles",
            "● Real-life achievements",
            "● Unfiltered discussions about societies & careers",
            "This made the podcast more than “content” —",
            "It became a mirror of real life and real growth.",
            "",
            "4️⃣ Market Positioning",
            "We positioned TGR as:",
            "● A podcast for professionals, not influencers",
            "● A space for real stories, not PR narratives",
            "● A growth platform that focuses on journeys, not fame",
            "This gave TGR a rare identity in a cluttered podcast market.",
        ],

        "Results & Impact": [
            "Even without massive budgets or celebrity guests, the branding made TGR:",
            "✔ A credible podcast from day one",
            "✔ A platform people emotionally connected with",
            "✔ A niche brand with a clear purpose & direction",
            "✔ A trusted voice in IT and societal growth conversations",
            "",
            "The biggest win?",
            "TGR successfully broke the stereotype that:",
            "“Only famous people have stories worth telling.”",
            "It gave visibility to:",
            "● Hidden talents",
            "● Underrated industry contributors",
            "● People shaping the digital future quietly",
            "● Individuals who overcame tough personal & professional struggles",
            "This made the brand authentic, relatable, and deeply impactful.",
        ],

        "Key Learnings": {
          content: [
            "Purpose-driven branding adds soul to a platform",
            "Real stories create stronger audience connection than celebrity hype",
            "A unique angle sets a podcast apart in a saturated market",
            "People want to see raw, unfiltered journeys, not highlight reels",
            "Story-first branding is the backbone of any media success",
          ],
          type: "list"
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
                title="TGR"
                data={tgrData}
            />
            {!props?.noNavbarFooter && <Footer />}
        </>
    )
}
