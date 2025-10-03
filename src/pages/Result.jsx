import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Toc from '../components/Toc';
import RelatedPosts from '../components/RelatedPosts';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Banner from "../assets/resultspic1.jpg"
import Chart from "../assets/resultchart.jpg"
import pfp from "../assets/resultblogpfp.jpeg"


export default function Result() {
    const table= ["Key components of performance creative", "The creative testing process", "What testing performance creative shows us", "Example", "Try these A/B tests!", "What performance creative can tell us about people"]
  return (
    <>
    <div className="w-full lg:fixed top-0 z-50 bg-[#5A2AFF]">
        <Navbar />
      </div>

    <section>
        <div className="px-12.5 pb-7 pt-17 bg-[#5A2AFF] text-white">
            <div className="flex items-center ">
                <Link to="/growth-marketing-resorces"><p className='w-17 h-4 text-[14px] mr-4 '>Rescorces</p></Link>
                <Link to={"/blog"}><p className='w-15 h-4 text-[14px] border-l pl-3 mr-4 border-white'>Blogs</p></Link>
                <Link to="/growth-marketing-guides"><p className='w-15 h-4 text-[14px] border-l pl-3 mr-4 border-white'>Guides</p></Link>
                <p className='w-15 h-4 text-[14px] border-l pl-3 mr-4 border-white'><IoIosSearch /></p>
            </div>
        </div>
    </section>
    <section className=' pt-3 flex flex-col items-center'>
        <div className="w-full md:sticky top-10  flex justify-end">
            <Toc table={table}/>
        </div>
        <div className="px-27  w-full">
            <span className='text-[16px]'>
                <Link className='text-[#ff6b39] font-bold'>Creative  </Link>
                 » How Performance Creative Generates Bold, Actionable Results for Growth Marketing
            </span>
        </div>
        <div className='w-[55%] pt-10'>
            <h1 className='text-3xl sm:text-6xl w-full font-bold text-center'>How Performance Creative Generates Bold, Actionable Results for Growth Marketing</h1>
            <p className='text-xl text-center'>January 9, 2023 / in Creative / <Link to={"/author/hannah"}>by Hannah Burks</Link></p>
            <img className='my-2.5 py-2.5 h-[270px] w-full' src={Banner} alt=" banner" />
            <p className='w-[720px] text-xl'>Performance creative challenges marketers to dig deep into what makes ads “work” better than others. Through deliberate testing and tweaking and testing again, we use data and analytics to not only understand the needs of our target audiences, but to also address them directly–in ad creative and copy. </p>
            <span className='my-4.5 w-full text-xl'>Simple as that, right?</span>
            <h1 id='section-1' className='text-5xl w-full font-bold'>Key components of performance creative</h1>
            <p className='text-xl w-full my-4'>
            Yes, there’s more to advertising than color and copy (<span className='text-[#ff6b39] font-bold'>a lot more</span>). Ad creative is particularly unique because <span className='text-[#ff6b39] font-bold'>75%</span> of campaign success is driven by creative. We know that attention spans have dropped since iPhones magically appeared in all of our back pockets in 2007. That means that first impressions count more than ever, and ad creative is one of the few things that has the ability to still grab someone’s attention mid-scroll. And aside from reading someone’s mind, testing that creative is the best way to understand what made them stop scrolling in the first place (so we can get more people to do the same). We do that testing after we establish a few key elements. 
            </p>
            <p className='my-4 font-bold text-xl w-full'>5 key elements for successful performance creative in growth marketing:</p>
            <ol className='list-decimal w-full ml-10'>
                <li className='mb-2.5 text-xl'><span className='font-bold'>A clear understanding of the target audience:</span> This requires research into their demographics, interests, and behaviors, as well as anything you can find on their motivations for clicking, browsing, purchasing, signing up, etc.</li>
                <li className='mb-2.5 text-xl'><span className='font-bold'>A clear and measurable goal:</span> Set a specific data-driven goal for each marketing campaign so at the end of a test you can say: “We learned something useful here.”</li>
                <li className='mb-2.5 text-xl'><span className='font-bold'>A strong value proposition:</span> The ad creative and copy need to clearly communicate the benefits and value of the brand. </li>
                <li className='mb-2.5 text-xl'><span className='font-bold'>Engaging content:</span> Strong ads capture the attention of the target audience.</li>
                <li className='mb-2.5 text-xl'><span className='font-bold'>A compelling call to action:</span> All ads should include a clear and persuasive call to action, such as “Sign up now” or “Learn more,” that encourages the target audience to take an action immediately. </li>
            </ol>
            <p className='w-full text-xl my-4'>By syncing these elements, performance creative will be set up to trigger specific actions–that are measurable! The “performance” aspect comes in when we start changing ad creative to influence what actions people take (and who’s taking them). We change the ad creative methodically because clear tests mean clear results. </p>
            <h1 id='section-2' className='text-3xl sm:text-6xl font-bold mt-22'>
                The creative testing process
            </h1>
            <p className='text-xl my-4'>
                Remember the scientific method from middle school science class? Our process follows the same steps. (If it worked for Galileo, then it’ll work for us too.)
            </p>
            <img className="my-4" src={Chart}  alt="" />
            <ul className=' list-disc text-xl'>
                <li className='pt-5'>We <span className='font-bold'>observe</span> how the current creative is performing. </li>
                <ul className='list-disc ml-8'>
                    <li className='pt-5 '>We <span className="font-bold">ask</span>: Does one stand out from the pack? Are they similar? Is there an obvious gap in format, messaging, or brand elements?</li>
                </ul>
                <li className='pt-5'>We make a <span className="font-bold">hypothesis</span> based on our experience working with hundreds of companies, products, and partners: “You know what, a bite-sized testimonial might do really well for this SaaS audience.” …or… “I think a video will get more people to purchase than a static quote here.” </li>
                <li className='pt-5'>We whip up the creative and run the <span className="font-bold">experiment</span> for at least two weeks to test just one variable (like an animation vs. static quote). We change one element of the ad and present it to similar audiences. Everything else has to stay constant or else we’ll run the risk of incorrect conclusions about the relationship between our variables (i.e. it gets messy).  </li>
                <li className='pt-5'>We draw <span className="font-bold">conclusions</span> based on specific performance metrics like cost per click (CPC), click-through rate (CTR), and conversion rates. If we’re able to pay less to get more people to take the desired action, that tells us that one specific aspect of your ad is more impactful than the other (and should be tested more!) </li>
            </ul>
            <h1 id='section-3' className='text-3xl sm:text-6xl font-bold mt-10'>
                What testing performance creative shows us
            </h1>
            <p className='text-xl my-4'>
                We don’t launch any campaigns without clear questions and hypotheses outlined beforehand. <span className='text-[#ff6b39] font-bold'>As a growth marketing agency</span>, the broader goal is to understand which messages or offers (or formats or buttons, etc.) are more appealing to different segments of the population, and which channels or platforms are most effective for reaching those audiences. A/B tests provide valuable insights into the attitudes, preferences, and behaviors of our target audience, which helps us continually put out stronger creative and campaigns.
            </p>
            <p className='text-xl my-4'>
                To learn about our audiences, we typically ask questions such as: 
            </p>
            <p className='text-xl my-4 font-bold'>
                What ad formats work best across my acquisition channels and their respective audiences? 
            </p>
            <p className='text-xl my-4 '>
                We load up our campaigns with a mix of ad creative formats so we can continually test their performance and efficiency against each other. It’s been particularly interesting to see the popularity of <span className="text-[#ff6b39] font-bold">video ads</span> skyrocket over the past 7 years, only to begin leveling out with stills this year (according to our data). In the past few months, we’ve seen carousels pick up in popularity across Facebook and Instagram, even more so than video. 
            </p>
            <p className='text-xl my-4 font-bold'>
                What messaging (and copy placement) resonates with our audience best?
            </p>
            <p className='text-xl my-4 '>
                We use value props to create the base from which all marketing messaging for a particular brand is derived. Using a tried-and-true <span className='text-[#ff6b39] font-bold'>value props template</span>, we outline the specific elements of a brand that set it apart from the competition, the very specific problems it solves, and how this solution benefits the user. Then–you guessed it–we test ‘em to see which resonates most. 
            </p>
            <p className='text-xl my-4 '>
                We also test the placement of messaging in our ads. In Facebook ads, for example, there is copy above, overlaying, and underneath all visual ads. It’s important to test where a CTA like, “Get 20% Off Now” works best. A possible test would be to include that CTA directly on the ad creative vs. in the caption underneath. Run the test for two weeks and see which gets more clicks/higher CTR and how many of those clicks lead to purchases. There’s your answer.
            </p>
            <p className='text-xl my-4 font-bold'>
                Which creative works best with which audience (and drives the best results per objective?)
            </p>
            <p className='text-xl my-4 '>
                The creative that works best with a particular audience and drives the best results per objective will depend on the campaign’s (or just the test’s) goals. Here are a few factors that can influence the effectiveness of your creative:
            </p>
            <p className='my-4 text-xl'>
                <span className="font-bold">Relevance:</span> Creative and copy that is relevant to the target audience’s pain points are more likely to inspire action. 
            </p>
            <p className='my-4 text-xl'>
                <span className="font-bold">Clarity:</span> Ads that are easy to understand are more likely to resonate. 
            </p>
            <p className='my-4 text-xl'>
                <span className="font-bold">Emotional appeal:</span> Imagery and messaging that elicits an emotional response (through storytelling, colors, keywords, etc.) from the audience is often more effective.  
            </p>
            <p className='my-4 text-xl'>
                <span className="font-bold">Brand consistency:</span> Creative that is consistent with the overall brand identity (including colors, fonts, messaging, and even CTAs) is more likely to be effective.
            </p>
            <p className='my-4 text-xl'>
                Ultimately, the best creative for a particular audience and objective will depend on the specific context and needs of the campaign. It’ll almost always be necessary to test different types of creative to see which one performs best with the target audience.
            </p>
            <h1 id='section-4' className="mt-10.5 font-bold text-3xl">
                Example
            </h1>
            <p className='text-xl my-4'>
                Say we spent $2,000 on a 2-week creative test on Meta: $1,000 on an animated ad and $1,000 on a static ad with the same messaging, same CTA, and same audience.
            </p>
            <p className='text-xl my-4'>
                Say we spent $2,000 on a 2-week creative test on Meta: $1,000 on an animated ad and $1,000 on a static ad with the same messaging, same CTA, and same audience.
            </p>
            <p className='text-xl my-4'>
                Each ad received 9,000 impressions. Out of 9,000 impressions, the animation got 200 clicks that led to 4 purchases. Out of 9,000 impressions, the static ad got 100 clicks that led to 5 purchases. That leaves us with these metrics: 
            </p>
            <table className="table-auto border border-black text-xs w-full">
                <thead>
                    <tr className='h-8'>
                        <th className='w-1/2 py-2.5 px-2'></th>
                        <th className='font-bold w-1/4 text-left py-2.5 px-2'>Animated Ad</th>
                        <th className='font-bold w-1/4 text-left'>Static Ad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='font-bold py-2.5 px-2'>spend</td>
                        <td className=' py-2.5 px-2'>$1,000.00</td>
                        <td className=' py-2.5 px-2'>$1,000.00</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-2.5 px-2'>Impressions</td>
                        <td className=' py-2.5 px-2'>9,000</td>
                        <td className=' py-2.5 px-2'>9,000</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-2.5 px-2'>Clicks</td>
                        <td className=' py-2.5 px-2'>200</td>
                        <td className=' py-2.5 px-2'>100</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-2.5 px-2'>CPC</td>
                        <td className=' py-2.5 px-2'>$5.00</td>
                        <td className=' py-2.5 px-2'>$10.00</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-2.5 px-2'>CTR</td>
                        <td className=' py-2.5 px-2'>2.22%</td>
                        <td className=' py-2.5 px-2'>1.11%</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-2.5 px-2'>Purchases</td>
                        <td className=' py-2.5 px-2'>4</td>
                        <td className=' py-2.5 px-2'>5</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-2.5 px-2'>Cost Per Purchases</td>
                        <td className=' py-2.5 px-2'>$250.00</td>
                        <td className=' py-2.5 px-2'>$200.00</td>
                    </tr>
                    <tr>
                        <td className='font-bold py-2.5 px-2'>Conversion Rate</td>
                        <td className=' py-2.5 px-2'>2.00%</td>
                        <td className=' py-2.5 px-2'>5.00%</td>
                    </tr>
                </tbody>
            </table>
            <p className='text-xl my-4'>
                There are a few key areas to consider when deciding which creative asset was more successful. The KPI will differ depending on the business’s goals, but let’s stick with purchases as the main measurement for success. 
            </p>
            <p className='text-xl my-4'>
                <span className="font-bold">The quick answer</span>: The static ad saw a lower cost per purchase, so we can draw an initial conclusion that the people interacting with it are further down in the funnel and more likely to buy. This means that it’s more cost-effective to serve a static ad to that audience rather than a video ad, and that’s where we should put our budget. HOWEVER—we’re seeing more engagement with the animated ad (double the clicks from the same number of impressions = higher click-through rate). 
            </p>
            <p className='text-xl my-4'>
                From those numbers, we might form a new hypothesis that those people are higher in the funnel and not quite ready to enter their credit card info. They’re interested in learning more (because they clicked the ad to go to the website), but they’re ever-so-slightly less likely to buy (4 purchases vs. 5). 
            </p>
            <p className='text-xl my-4'>
                By now you know that testing performance creative isn’t a one-and-done type of deal. These early results aren’t strong enough to hang our hats on just yet. In this scenario, we’d want to create another test to poke holes in our static ad and build them up stronger, or maybe rethink the audience we’re putting the animation in front of. There are so many elements to <span className="text-[#ff6b39] font-bold">A/B test</span>, and it’s the marketer’s job to decide which to focus on first. 
            </p>
            <p className='text-xl my-4'>
                Need a push? Here are some ideas…
            </p>
            <h1 id='section-5' className='text-3xl sm:text-6xl font-bold mt-22'>
                Try these A/B tests!
            </h1>
            <p className='text-xl my-4'>
                Our advice: Start small. You won’t find the answers to all your advertising questions in the first month of testing. And if you take anything from this article, take this list of <span className='text-[#ff6b39] font-bold'> creative testing ideas</span> you can put into action immediately. 
            </p>
            <ul className=' list-disc text-xl ml-5'>
                <li className='pt-5'>
                    <span className="font-bold">Headline + CTR</span>: Test two different Facebook ad headlines with the same creative to see which one gets a higher click-through rate. Then use the winning headline on two different creatives. The result? An optimized ad with a proven headline and creative.
                </li>
                <li className='pt-5'>
                    <span className="font-bold">Call-to-Action + CTR</span>: Test two different CTAs to see which one gets a higher click-through rate. Then power up your optimized ad from above with the most effective CTA. Triple threat!
                </li>
                <li className='pt-5'>
                    <span className="font-bold">Audience targeting + purchases</span>: Test different target audiences using the same exact ad to see which group completes more purchases. Those are your people. (Then show the less active audience a different ad to see if that works better!) 
                </li>
                <li className='pt-5'>
                    <span className="font-bold">Audience targeting + time on site</span>: Test different target audiences using the same exact ad to see which group completes more purchases. Those are your people. (Then show the less active audience a different ad to see if that works better!) 
                </li>
                <li className='pt-5'>
                    <span className="font-bold">Ad format + cost per purchase</span>: Test two different ad formats (text-based vs. image-based) with the same ad copy and same audience to see which results in more cost-effective acquisitions. The lower your cost per purchase, the more efficient and effective your ad format is. When you can double down on the most effective ads over and over again–then you’ve cracked the growth marketing code. Nice!
                </li>
            </ul>
            <p className='text-xl my-4'>
                There are hundreds of ad elements and metric combinations you can use to evaluate your performance creative. With so much data at our fingertips, it’s the growth marketer’s job to ask the right questions and demand more of our creative and campaigns. 
            </p>
            <h1 id='section-6' className='text-3xl sm:text-6xl font-bold mt-22'>
                What performance creative can tell us about people
            </h1>
            <p className='text-xl my-4'>
                Creative that’s backed by data is one of the superpowers of growth marketing. It tells us more about our audience, how much they know about our brand, how much they want to know about our brand, and just how close they are to making a purchase (or similar action). By measuring their actions like clicking an ad, scrolling a website, starting the check-out process, or even ignoring us altogether, we can learn first-hand what makes an ad effective–down to the color of a CTA button–and where we need to shape up.
            </p>
            <p className='text-xl my-4'>
                The key is to keep testing and iterating and testing and iterating. Campaigns should flex and flow and change with the market, the audience, the product, the platforms, and the inexplicable tides of people using the internet. Pay attention to the numbers and your performance creative will be better than ever. We promise. 🚀
            </p>
            
        </div>
    </section>
    <section className='pt-12.5 flex flex-col items-center w-full'>
        <div className=" w-[55%]">
            <p className='text-xl my-4 font-bold'>
                Psst 👋 want help? <span className="text-[#ff6b39] font-bold">We got you.</span>
            </p>
            <div className="py-12.5 w-full bg-[#F0F0F0] h-64 rounded-xl px-5 pt-2.5 pb-6 flex items-center">
                <div className="w-1/5">
                    <div className="px-5 pb-5">
                        <img className='rounded-full w-25 h-25 ' src={pfp} alt="" />
                    </div>
                </div>
                <div className="w-4/5">
                    <Link to={"/author/hannah"} className=' text-2xl font-bold'>Hannah Burks</Link>
                    <p>Hey! I’m HB, the Head of Operations at Tuff. With a decade of experience across marketing and web, I specialize in complex problem-solving, strategic planning, and organic acquisition. My focus is on facilitating client growth, supporting our creative teams, and consistently improving efficiency across our org. Let’s chat!</p>
                </div>
            </div>
        </div>
    </section>
    <RelatedPosts/>
    <Newsletter/>
    
    <section>
      <Footer/>
    </section>
    </>
  )
}
