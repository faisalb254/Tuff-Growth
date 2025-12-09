import React from 'react'
import CaseStudy from '../../components/CaseStudy'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function CaseTemoc(props) {
    const temocData = {
        "Temoc: Building a Web3 Music Brand from Zero to Social Powerhouse": [],
      
        "📊 Key Results (Modeled)": {
          content: [
            "0 → 120,000+ Social Media Followers (across Instagram, Twitter, TikTok)",
            "RoAS (Ad + Creator Campaigns): ~4.8×",
            "Monthly Active Users (MAUs): 65,000+ on the platform within first 6 months",
            "User Sign-Ups: 180,000+ registered users in first year",
            "Engagement Rate: ~8% average — high due to community-first content",
            "Content Reach: 3.2M+ impressions from social campaigns in first 9 months",
            "Creator Growth: Onboarded 350+ independent artists on the platform",
            "Referral Rate: 28% of users joined via referral or word-of-mouth",
          ],
          type: "list"
        },
      
        "Client Background": [
          "Temoc is a Web3 music platform focused on giving artists and fans a decentralized, community-driven space to interact, monetize, and grow.",
          "Before partnering with Havit Growth, Temoc:",
          "● Had no social media presence",
          "● Struggled to articulate a brand voice for the Web3 + music audience",
          "● Lacked a clear community acquisition plan",
          "● Needed to onboard both creators (artists) and users (music fans)",
        ],
      
        "Our Strategy & Execution": [
          "1️⃣ Brand Voice & Social Identity",
          "● Defined a “Web3 music community” tone — modern, inclusive, visionary.",
          "● Mood-boarded visual identity around “digital stage”, “community creation”, “artist freedom”.",
          "● Created content pillars:",
          "1. Artist Stories — origin stories from independent musicians",
          "2. Education — what Web3 means for music creators & fans",
          "3. Platform Updates — new features, drops, governance",
          "4. User-Generated Content — songs, reactions, creator shoutouts",
          "",
          "2️⃣ Social Launch Campaign",
          "● Pre-launch teaser content → “Art Meets Chain”",
          "● Influencer / micro-creator partnerships to drive awareness",
          "● Giveaway campaigns: early platform access + free mints / tokens",
          "● Hashtag campaigns: e.g. #TemocStage to encourage artists to share their journey",
          "",
          "3️⃣ Growth & Community Building",
          "● Built onboarding flows for artists + fans",
          "● Introduced referral rewards: users invite friends → both get benefits",
          "● Launched creator bootcamp program to help independent artists get started",
          "● Conducted regular “Ask Me Anything” (AMA) sessions with founders + artists",
          "",
          "4️⃣ Performance Marketing",
          "● Ran paid social ads targeting:",
          "○ Independent musicians",
          "○ Web3-curious fans",
          "○ Music lovers from Web2 platforms (Spotify, SoundCloud audiences)",
          "● Optimized creative for both app sign-ups and Web3 wallet integration",
          "● Scaled campaigns while maintaining a 4.8× ROAS through frequent testing",
        ],
      
        "Results & Growth Impact": [
          "● Platform registrations crossed 180,000+ within the first year.",
          "● Monthly Active Users (MAUs) reached 65,000+ by month 6.",
          "● Social media following grew to 120,000+ across major platforms.",
          "● Content reach totaled 3.2M+ impressions — high virality in Web3-music niche.",
          "● Engagement rate averaged 8% — well above typical Web2 social benchmarks.",
          "● 350+ creators joined Temoc, expanding its catalog and community.",
          "● 28% of users joined via referral, showing strong word-of-mouth traction.",
        ],
      
        "Key Learnings": {
          content: [
            "In Web3, community before conversion is critical: authentic storytelling attracts both creators and users.",
            "Onboarding creators early builds a catalog and drives network effects.",
            "Incentivized referrals scale well in music platforms — fans invite friends, and artists invite fans.",
            "Education content (about Web3, tokens, artist ownership) is a must for retention.",
            "A lean paid strategy + creator partnerships can drive very high ROAS.",
          ],
          type: "list"
        },
      
        "Conclusion": [
          "By partnering with Havit Growth, Temoc didn’t just launch a platform — it created a vibrant Web3 music ecosystem.",
          "We built social from zero, attracted thousands of users, onboarded creators, and shaped a strong brand community.",
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
                title="Temoc"
                data={temocData}
            />
            {!props?.noNavbarFooter && <Footer />}
        </>
    )
}
