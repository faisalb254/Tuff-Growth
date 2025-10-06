import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Toc from '../components/Toc';
import RelatedPosts from '../components/RelatedPosts';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Banner from "../assets/marketingbanner.jpg"
import pfp from "../assets/ellen.png"


export default function Marketing() {
  const table = ["Growth Marketing versus Traditional Marketing", "Responsibilities of a Growth Marketing Team", "1. Identify Areas The Need Testing and Improvement", "2. Crafting Experiments to Optimize Processes in Those Areas", "3. Conducting Experiments to Test Hypothesized Solutions", "4. Analyzing Initial Results and Adjusting to Experiment Further If Needed", "We’d love to work with you."]
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
      <section className=' pt-3 flex flex-col items-center text-xl'>
        <div className="w-full md:sticky top-10  flex justify-end">
          <Toc table={table} />
        </div>
        <div className="px-27  w-full">
          <span className='text-[16px]'>
            <Link className='text-[#ff6b39] font-bold'>Attract more engaged customers  </Link>
            » Growth Marketing: What It Is and Why You Need It
          </span>
        </div>
        <div className="pt-10 w-8/10 md:w-[55%]">
          <h1 className='text-3xl sm:text-6xl w-full font-bold text-center'>
            Growth Marketing: What It Is and Why You Need It
          </h1>
          <p className=' text-center'>
            September 18, 2019/in Attract more engaged customers  / <Link to={"/"}>by Ellen Jantsch</Link>
          </p>
          <img className='my-2.5 py-2.5 h-auto w-full' src={Banner} alt=" banner" />
          <p className='my-4.5'>
            Editor’s note: This content was updated in January 2020. <br /> Original publication date: September 2019
          </p>
          <p className='my-4.5'>
            Growth, as it relates to business, is generally defined as, “The process of improving some measure of an enterprise’s success.” When you consider that definition through the lens of marketing, what does “improvement” really mean to you? More sales? More leads? An expansion of your product line or service offerings? All of the above?
          </p>
          <p className='my-4.5'>
            Growth marketing aims to address them all. At its heart, growth marketing is about going beyond the surface of advertising and diving further into the sales funnel, using data-driven analysis and experimentation to unlock avenues of growth for your business. It is a unique approach to marketing that focuses on the use of the scientific method combined with creative tactics to identify the best possible way for your business to attract more engaged customers.
          </p>
          <div className="mt-21 mb-4.5">
            <h1 id='section-1' className='text-3xl sm:text-6xl w-full font-bold '>
              Growth Marketing versus Traditional Marketing
            </h1>
            <p className=" my-4">
              The marketing industry is full of buzzwords and “growth” has been a big one lately. We can’t blame you if you’re thinking that all marketing is ultimately growth-focused, so why the need for this special designation?
            </p>
            <p className="my-4">
              It’s the job of any marketing expert to grow your revenue, right? The difference, though, is all about how they get there.
            </p>
            <p className='my-4'>
              Traditional marketing focuses primarily on two goals: awareness and customer acquisition. It seeks to play the long game of creating brand recognition and building reputation. Both of those things are incredibly important, but if you’re just starting out (or your growth is stalled), you may not have the luxury of the time it takes to see results from that type of approach. Traditional marketing focuses primarily on two goals: awareness and customer acquisition. It seeks to play the long game of creating brand recognition and building reputation. Both of those things are incredibly important, but if you’re just starting out (or your growth is stalled), you may not have the luxury of the time it takes to see results from that type of approach.
            </p>
            <p className="my-4">
              Growth marketing, on the other hand, aims to deliver more rapid results. It uses experimentation and testing to identify ways of <span className='text-[#ff6b39] font-bold'>maximizing opportunities at every stage of the sales funnel.</span>
            </p>
            <p className="my-4">
              It also considers the LTV (life-time value) of each customer. Rather than focusing solely on “getting bodies in the door,” it creates a framework that hones in on the right customers and then engages them throughout the sales cycle, keeping them coming back for more with proven <span className='text-[#ff6b39] font-bold'>customer retention strategies. </span>
            </p>
            <p className="my-4">
              On its face, growth marketing also looks very different than traditional marketing. A classical approach to marketing usually includes considerable time spent in the stages of planning, strategy, and creative development prior to rolling out a campaign.
            </p>
            <p className="my-4">
              The work is mostly frontloaded, and once deployed, the only thing you can really do is hope for the best and wait to see how it shakes out. There may be some audience testing done beforehand to inform the campaign’s general direction, but that’s about the extent of customer feedback involved in the process.
            </p>
            <p className="my-4">
              Growth marketing, conversely, is a real-time game. Don’t get us wrong—there is absolutely creative thought put into strategy, but much of the strength of this approach lies in its ability to pivot quickly and easily based on audience response. Effective growth marketing is all about <span className='text-[#ff6b39] font-bold'>failing fast</span>, retooling your approach, and attacking every possible angle in order to unearth that hidden growth potential.
            </p>
          </div>
          <div className="mt-21 mb-4.5">
            <h1 id='section-2' className='text-3xl sm:text-6xl w-full font-bold '>
              Responsibilities of a Growth Marketing Team
            </h1>
            <p className=" my-4">
              This type of marketing can honestly feel radical if you’ve never done it before. But the benefits it brings are more than worth scaling the learning curve. The kind of team you’ll need, and the way they’ll work, will be totally different than a traditional marketing department.
            </p>
            <p className="my-4">
              Your team should be well-rounded, with a wide array of skills and an understanding that runs the full gamut of your business operations. While growth marketing is a data-driven approach, a data analyst alone cannot bring you success. You need to marry that scientific approach with innovative creative, an adept understanding of your product/service, and effective project management if you want the execution to be truly fluid.
            </p>
            <p className='my-4'>
              You may already have rockstars in your ranks that can fill some of the spots on your new growth team, but don’t be afraid to go a more non-traditional route if that’s what’s necessary to build the best team. Contract employees can help fill in those knowledge gaps while also bringing new energy to the table.
            </p>
            <p className="my-4">
              Once you’ve established your dream team, and you’re aligned on the essential growth marketing metrics, there are four main phases of effort that should drive all their work:
            </p>
            <h1 id='section-3' className='text-3xl w-full font-bold '>
              1. Identify Areas The Need Testing and Improvement
            </h1>
            <p className='my-4'>
              A growth team needs to understand its customers. Digging into the company’s history and culture can help them paint a more holistic picture of the brand. This will be of vital importance as they work to define the right growth priorities and situate their objectives in the proper context.
            </p>
            <p className='my-4'>
              Next, they’ll need to perform an audit of your current marketing strategies. They should be looking at customer metrics, finding your ideal customers, and the performance of each channel you’re currently using, just for starters. An honest accounting of the current atmosphere will help them zero in on both the obvious and not-so-obvious areas where there is room for improvement.
            </p>
            <p className='my-4'>
              This is also a great time to do a competitive analysis and break down what is and isn’t working for your competitors. You may discover some new growth channels worth exploring during this exercise.
            </p>
            <h1 id='section-4' className='text-3xl w-full font-bold '>
              2. Crafting Experiments to Optimize Processes in Those Areas
            </h1>
            <p className='my-4'>
              Once your team has identified the areas where you’re struggling or where you’re leaving something on the table, it’s time for them to put their heads together. They should spend this time brainstorming ideas about how to improve metrics and close gaps. This is an area where having a diverse team really pays off, as they should have a wealth of ideas and thoughts to explore.
            </p>
            <p className='my-4'>
              Make sure you don’t inadvertently limit their thinking or confine them to a box; some of the best and most viral growth marketing campaigns have been born of that spirit of “throw everything at the wall and prioritize from there.” Growth marketing initiatives can be edgy. They can be inexpensive or even deceptively “simple.” But what they should always be is scrappy and smart.
            </p>
            <p className='my-4'>
              It’s normal to be eager to start a growth campaign, but make sure you give your team ample time and space to come up with plenty of ideas during this phase. Going in fully loaded will mean they’re ready to do extensive experimentation and pivot quickly without having to return entirely to the drawing board before making adjustments.
            </p>
            <h1 id='section-5' className='text-3xl w-full font-bold '>
              3. Conducting Experiments to Test Hypothesized Solutions
            </h1>
            <p className='my-4'>
              Now it’s time for organized, smart, and efficient execution. Your team will roll out their first experiments in the hopes of moving the needle on whatever initiative is your top priority. Chances are high that the testing period will be fast and furious.
            </p>
            <p className='my-4'>
              Growth marketing doesn’t play the game of waiting weeks or months to gauge consumer buy-in on a campaign, so don’t be shocked if your team abandons one avenue just days after they debuted it, or if they A/B test various options in different markets to compare results. The goal here is to amass as much data as possible as quickly as possible.
            </p>
            <h1 id='section-6' className='text-3xl w-full font-bold '>
              4. Analyzing Initial Results and Adjusting to Experiment Further If Needed
            </h1>
            <p className='my-4'>
              Once that quick initial testing period is complete, your team will analyze results and determine how to move forward. They may have hit on something golden that they want to continue leaning into, or they may have been surprised by a new area of opportunity they hadn’t expected. Either way, now is the time for adjustments and continued experimentation.
            </p>
            <p className='my-4'>
              The tweaks they make may be small, such as changing a headline or a few snippets of ad copy. Or they may introduce entirely new creative, or go in a completely new direction. It can be nerve-wracking to watch it all unfold—especially if you’re used to traditional campaigns that are complex, sprawling, and defined—but you have to trust the process.
            </p>
            <p className='my-4'>
              An effective <span className='text-[#ff6b39] font-bold'>growth marketing team</span> will move very fast in gathering and processing customer data and adjusting their approach accordingly. This is why it’s so important to give them time in the brainstorming phase to stock up on ideas. The process is ultimately one of the continuous small changes until you hit on the perfect combination of creative, copy, channel, and audience. But once you find that sweet spot, you’ll be ready to scale up what works.
            </p>
            <p className='my-4'>
              We hope this quick rundown helps you understand a bit more about how growth marketing works and what it could potentially do to energize your company. If you want to learn more about how to leverage this unique marketing approach to generate rapid, sustainable growth for your business, you can check out these top growth marketing experts or give us a shout. We’d love to connect.
            </p>
          </div>
        </div>
      </section>
      <section className='flex justify-center'>
        <div className="pt-10 w-8/10 md:w-[55%]">
          <div className="my-12.5 flex flex-col  text-white mx-6 border-20 border-[#060631] bg-[#060631] p-12.5">
            <h3 id='section-7' className='font-bold text-4xl'>We’d love to work with you.</h3>
            <p className='my-4'>
              <Link to={"/get-started-with-tuff"}><span className='text-[#ff6b39] font-bold'>Schedule a call with our team</span></Link> and we’ll analyze your marketing, product, metrics, and business. Then, present a Growth Plan with actionable strategies to find and keep more engaged customers.
            </p>
            <span className='w-fit text-2xl border-b-3 border-b-white hover:cursor-pointer tilt-zoom'><Link to={"/get-started-with-tuff"}>Get Tuff</Link></span>
          </div>
          <div className="py-12.5 w-full bg-[#F0F0F0] h-64 rounded-xl px-5 pt-2.5 pb-6 flex items-center">
            <div className="w-1/5">
              <div className="px-5 pb-5">
                <img className='rounded-full w-25 h-25 ' src={pfp} alt="" />
              </div>
            </div>
            <div className="w-4/5">
              <Link to={"/"} className=' text-2xl font-bold'>Ellen Jantsch</Link>
              <p>Ellen is the founder at Tuff and one of the team’s core growth marketers. She is a versatile marketer with expertise in multiple channels – from ppc to seo to email to others – responsible for the experiments and testing.  She is happiest when she’s on the ski hill or outside pointing her mountain bike downhill.</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPosts />
      <Newsletter />
      <section>
        <Footer />
      </section>
    </>
  )
}
