import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Toc from '../components/Toc';
import RelatedPosts from '../components/RelatedPosts';
import Newsletter from '../components/Newsletter';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Banner from "../assets/spreadsheetbanner.jpg"
import pfp from "../assets/ellen.png"
import img from "../assets/spreadsheetimg.png"
import img2 from "../assets/spreadsheetimg2.png"
import img3 from "../assets/spreadsheetimg3.png"
import img4 from "../assets/spreadsheetimg4.png"
import img5 from "../assets/spreadsheetimg5.png"
import img6 from "../assets/spreadsheetimg6.png"
import img7 from "../assets/spreadsheetimg7.png"
import img8 from "../assets/spreadsheetimg8.png"
import img9 from "../assets/spreadsheetimg9.png"
import img101 from "../assets/spreadsheetimg10-1.png"
import img102 from "../assets/spreadsheetimg10-2.png"
import img103 from "../assets/spreadsheetimg10-3.png"
import img104 from "../assets/spreadsheet10-4.png"
import img105 from "../assets/spreadsheet10-5.png"
import img106 from "../assets/spreadsheet10-6.png"
import img11 from "../assets/spreadsheetimg11.png"
import img12 from "../assets/spreadsheetimg12.png"
import img13 from "../assets/spreadsheetimg13.png"
import img14 from "../assets/spreadsheetimg14.png"


export default function Spreadsheets() {
    const table = ["1. Growth Marketing Framework", "2. Channel Projections for Experiments", "3. Growth Marketing Scorecard ", "4. UTM Generator for Campaigns (Tracking)", "5. Blog Post Traffic Tracker from Buffer (Content) ", "6. Budget Tracker for PPC Campaigns (Paid)", "7. Influencer Marketing Template (Influencer)", "8. Email User Onboarding Flow (Email)", "9. Google Ads Keyword Audit (Paid)", "10. CRM Spreadsheet Hack", "11. Value Props Exercise", "12. Facebook Ad Creative Analysis Spreadsheet", "13. Landing Page Testing Plan Timeline", "14. SEO Forecasting ", "Happy Spreadsheeting-ing"]
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
                <div className="px-27 w-full">
                    <span className='text-[16px]'>
                        <Link className='text-[#ff6b39] font-bold'>Winning new customers for your startup </Link>
                        » 14 Ready-to-Go Growth Marketing Spreadsheets Startups Can Use to Boost Productivity
                    </span>
                </div>
                <div className="pt-10 w-[50%]">
                    <h1 className='text-3xl sm:text-6xl w-full font-bold text-center'>
                        14 Ready-to-Go Growth Marketing Spreadsheets Startups Can Use to Boost Productivity
                    </h1>
                    <p className=' text-center'>
                        April 4, 2020/in Winning new customers for your startup / <Link to={"/author/derek"}>by Ellen Jantsch</Link>
                    </p>
                    <img className='my-2.5 py-2.5 h-auto w-full' src={Banner} alt=" banner" />
                    <p className='my-4.5 italic'>
                        Note: this post was updated in September 2022 with one new spreadsheets to help with SEO forecasting.
                    </p>
                    <p className='my-4.5'>
                        One of our team values at Tuff is to work smarter, not harder. For the work that we do, this often means creating clear and repeatable processes.
                    </p>
                    <p className='my-4.5'>
                        We also think dashboards are a little overrated.
                    </p>
                    <p className='my-4.5'>
                        Although they give you a snapshot of important metrics, and they look good, dashboards aren’t great at providing the details or context that effective data-driven decision making requires.
                    </p>
                    <p className='my-4.5'>
                        This is why spreadsheets have been such a staple for our <Link to={"/growth-marketing-agency"}><span className="text-[#ff6b39] font-bold">growth marketing agency</span></Link>, helping us to collaborate more efficiently with our <Link to={""}><span className="text-[#ff6b39] font-bold">startup partners</span></Link>, track budgets and core metrics, see our growth more clearly, organize our experiments, and <Link to={"/growth-marketing-agency"}><span className="text-[#ff6b39] font-bold">get more work done</span></Link>.
                    </p>
                    <p className='my-4.5'>
                        That being said, building the right spreadsheets that are actually helpful and relevant to your startup can be time-consuming. We’d love to help.
                    </p>
                    <p className='my-4.5'>
                        We’ve pulled together a list of the essential spreadsheets and templates we have used and improved to help prioritize experiments, run campaigns, and track growth for Tuff and our startup partners.
                    </p>
                    <p className='my-4.5'>
                        Let’s jump in…
                    </p>
                    <p className='my-4.5'>
                        For many of the growth marketing spreadsheets linked below, you can download as an .xls file to use and customize in Excel or Google Docs. Google Doc users can also go to “File {">"} Make a Copy …” to add the spreadsheet to their account, then edit.
                    </p>
                    <div className="">
                        <h1 id='section-1' className='text-3xl w-full font-black mt-10.5'>
                            1. Growth Marketing Framework
                        </h1>
                        <img src={img} alt="" />
                        <p className="font-bold">
                            Use for: Prioritizing and tracking your growth marketing experiments
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            We discovered this Growth Marketing Framework spreadsheet after attending <Link to={"/growth-marketing-agency"}><span className="text-[#ff6b39] font-bold">Sid Bharath’s talk at the GrowthMentor summit</span></Link> last year. We tested it out on our own and it’s quickly become a go-to for our team when we need to prioritize campaigns, identify new experiments, and find big wins for our partners. We like it so much that we have one for Tuff that we look at weekly as a team.
                        </p>
                        <p className='my-4.5'>
                            We discovered this Growth Marketing Framework spreadsheet after attending <Link to={"/growth-marketing-agency"}><span className="text-[#ff6b39] font-bold">Sid Bharath’s talk at the GrowthMentor summit</span></Link> last year. We tested it out on our own and it’s quickly become a go-to for our team when we need to prioritize campaigns, identify new experiments, and find big wins for our partners. We like it so much that we have one for Tuff that we look at weekly as a team.
                        </p>
                        <p className='my-4.5'>
                            In this spreadsheet, you have four core tabs:
                        </p>
                        <ul className=' list-disc pl-8'>
                            <li className='mt-5'>Customer Personas </li>
                            <li className='mt-5'>Customer Journey </li>
                            <li className='mt-5'>Tactics Backlog </li>
                            <li className='mt-5'>Experiments</li>
                        </ul>
                        <p className='my-4.5'>
                            Our favorite part about this spreadsheet is that your customer personas exist in the same spreadsheet as your ideas. In the past, we built out personas in a word doc or slides with visuals and descriptors, and sometimes we still do. But having your target audience in the same place you go to list ideas and pick experiments is extremely helpful when it comes to prioritization. Before we add any ideas to our backlog, we can revisit our personas, their journey, and then truly assess if they are the right fit for our audience. With this setup, your personas become a driving force for tactics instead of an afterthought. You end up with experiments that hit the mark more often because they’ve passed the persona check.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-2' className='text-3xl w-full font-black mt-10.5'>
                            2. Channel Projections for Experiments
                        </h1>
                        <img src={img2} alt="" />
                        <p className="font-bold">
                            Use for: Forecasting budget based on historical data and determining projected performance
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            We get these two questions a lot: How much should I spend? And, what can I get in return?
                        </p>
                        <p className='my-4.5'>
                            In order to set monthly budgets and projections, we start with core KPIs. What are we trying to achieve? Do we want to book more demos, increase sales, drive more leads? Once we understand these goals, we can forecast budget based on historical data and determine projected performance using this spreadsheet. This isn’t an exact science but it helps us align as a team about what we’re trying to achieve based on specific targets. It also helps you know how much you need in the bank to test and learn.
                        </p>
                        <p className='my-4.5'>
                            For traffic and conversion rate data, we lean on tools like Google Analytics, Shopify, Metorik, Firebase, Salesforce, Facebook, and Google Ads. If you don’t have this data available because you haven’t experimented on these channels, you can still use this spreadsheet, you’ll just need to take bigger leaps with the numbers based on industry averages.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-3' className='text-3xl w-full font-black mt-10.5'>
                            3. Growth Marketing Scorecard
                        </h1>
                        <img src={img3} alt="" />
                        <p className="font-bold">
                            Use for: Tracking results daily, weekly, and monthly in one shared spreadsheet
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            When you’re running experiments and testing new campaigns, we like to have a reporting template that gives us true insight into what’s working and what’s not. We use this spreadsheet to track daily, weekly, and monthly results for our campaigns.
                        </p>
                        <p className='my-4.5'>
                            One of the most important things about this scorecard is that it’s 100% manual. While there are a bunch of automated dashboards out there, after three years and 35 startups, we still think this is the best option for our team and partners in the early stages. It’s simple (no fluff) and sticks to the most important metrics. While pulling the data from various sources takes time (about 10 minutes each morning), it gives you an opportunity to really look at the data, dig into what it’s telling us, and then make smarter optimizations and budget allocations.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-4' className='text-3xl w-full font-black mt-10.5'>
                            4. UTM Generator for Campaigns (Tracking)
                        </h1>
                        <img src={img4} alt="" />
                        <p className="font-bold">
                            Use for: Understanding which campaigns are driving meaningful results
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            UTM codes are snippets of text added to the end of a URL to help you track where website traffic comes from if users click a link to this URL. If you’re anything like the data-driven campaign managers on the Tuff team, you probably don’t run any campaigns without UTM parameters. By tagging your URLs with UTMs, you can get a good understanding of how your visitors interact with your website, allocate budget more efficiently, and cut out anything that isn’t working. For a full rundown on UTMs, we turn to Niel Patel’s ultimate <Link to={"/growth-marketing-agency"}><span className="text-[#ff6b39] font-bold">UTM guide here</span></Link>.
                        </p>
                        <p className='my-4.5'>
                            So what’s with this spreadsheet? If you’re running multiple campaigns and experimenting quickly, it’s easy to lose track of your URLs. For example, we have a batch of Facebook campaigns active right now, with 23 different audiences, using 23 different URLS. These can add up! This spreadsheet keeps all active URLs organized so anyone on the team can check the URL, review performance in Google Analytics, and then help make smarter marketing decisions at the campaign level.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-5' className='text-3xl w-full font-black mt-10.5'>
                            5. Blog Post Traffic Tracker from Buffer (Content)
                        </h1>
                        <img src={img5} alt="" />
                        <p className="font-bold">
                            Use for: Knowing which posts are gaining the most traffic
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            This is one of the best spreadsheets to understand how your content is stacking up. If you don’t have a blog yet, skip this spreadsheet.
                        </p>
                        <p className='my-4.5'>
                            The blog post traffic spreadsheet from Buffer enables you to keep an eye on which posts are hitting your traffic goals and it’s also really great to keep an eye on what topics are performing best, too. While this is easy to see in Google Analytics, pulling the data into a spreadsheet helps you benchmark performance more easily to identify content wins.
                        </p>
                        <p className='my-4.5'>
                            One of the more actionable ways we use this spreadsheet is to help us identify articles we want to update. To increase the effectiveness of your SEO efforts and boost your search engine traffic, you canupdate your old content and give yourself an improved freshness score.
                        </p>
                        <p className='my-4.5'>
                            Buffer has 10 other very helpful <Link to={"/growth-marketing-agency"}><span className="text-[#ff6b39] font-bold">social media and content spreadsheets here</span></Link>, in case you want more.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-6' className='text-3xl w-full font-black mt-10.5'>
                            6. Budget Tracker for PPC Campaigns (Paid)
                        </h1>
                        <img src={img6} alt="" />
                        <p className="font-bold">
                            Use for: Creating an automated monthly budget pacing dashboard for Google Ads
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            When you build this spreadsheet, you’ll get a quick glimpse at how your budget is pacing for the month on Google Ads. This can be helpful when you have specific monthly targets you want to hit.
                        </p>
                        <p className='my-4.5'>
                            With this spreadsheet you can see how far through the month you are, what percent of spend you’ve used, and how close you are tracking towards your goal. For example, you might be 61% of the way through your budget but only 53% of the way to your revenue goal.
                        </p>
                        <p className='my-4.5'>
                            This works best with larger budgets (below $1,000 per month is less effective) but as you ramp up, it can help you stay more efficient and effective with your spend.
                        </p>

                    </div>
                    <div className="">
                        <h1 id='section-7' className='text-3xl w-full font-black mt-10.5'>
                            7. Influencer Marketing Template (Influencer)
                        </h1>
                        <img src={img7} alt="" />
                        <p className="font-bold">
                            Use for: Managing and tracking your Instagram influencer marketing campaign
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            Performance-based influencer campaigns can drive revenue and user growth if you can tap into the right communities.
                        </p>
                        <p className='my-4.5'>
                            The way that this spreadsheet works is simple. Once you’ve defined your niche and set goals for your influencer program, you can start compiling your influencers in this spreadsheet. From here, you can start to calculate each influencer’s engagement rate. This will tell you who has an active audience.
                        </p>
                        <p className='my-4.5'>
                            There are a bunch of different ways to calculate engagement rates and this spreadsheet uses the below formula:
                        </p>
                        <p className='my-4.5'>
                            ER post = Total engagements on a post / Total followers *100.
                        </p>
                        <p className='my-4.5'>
                            A higher engagement rate typically spells out a wider reach and stronger influence.
                        </p>
                        <p className='my-4.5'>
                            Again, this is another manual process and it takes time. If you find early traction with your program in the first 90 days, we recommend transitioning to a tool to help manage as you scale.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-8' className='text-3xl w-full font-black mt-10.5'>
                            8. Email User Onboarding Flow (Email)
                        </h1>
                        <img src={img8} alt="" />
                        <p className="font-bold">
                            Use for: Building and visualizing your welcome email flow
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            Installs, sign ups, and demos mean nothing if you can’t keep your users — which makes your onboarding email campaign incredibly important.
                        </p>
                        <p className='my-4.5'>
                            We use this template to outline our Email user flow from start to finish. For a successful strategy, it helps us:
                        </p>
                        <p className='my-4.5'>
                            There are a bunch of different ways to calculate engagement rates and this spreadsheet uses the below formula:
                        </p>
                        <ul className=' list-disc pl-8'>
                            <li className='mt-5'>Set a goal for each email in the series </li>
                            <li className='mt-5'>Set timing for each email</li>
                            <li className='mt-5'>See the entire flow at once</li>
                        </ul>
                        <p className='my-4.5'>
                            From here, you can start thinking about copy, CTAs, and design for each email, benchmark performance, and start testing. This structure has helped us get higher retention rates and increase revenue.
                        </p>
                        <p className='my-4.5'>
                            Bonus Template: If you don’t have an onboarding flow for new customers or leads, this <Link><span className='text-[#ff6b39] font-bold'>email marketing planning template from Hubspot</span></Link> is handy for planning marketing and transactional emails.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-9' className='text-3xl w-full font-black mt-10.5'>
                            9. Google Ads Keyword Audit (Paid)
                        </h1>
                        <img src={img9} alt="" />
                        <p className="font-bold">
                            Use for: Efficiently auditing your PPC keywords & search queries to identify top performers based on ROAS.
                        </p>
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            When it comes to optimizing paid search campaigns, keyword optimizations can oftentimes be time-consuming, scattered, or – even worse – ineffective. A keyword with a high CTR and low CPC may be performing well at first glance, but these are surface-level metrics and they don’t necessarily correlate with the most important metrics.
                        </p>
                        <p className='my-4.5'>
                            Organizing your keywords and search queries into a format that helps you focus on what really matters the most – in this case, ROAS – will give you a clear picture of which keywords to invest more money into and which keywords to scrap from your campaign(s).
                        </p>
                        <p className='my-4.5'>
                            To use this spreadsheet, export your keyword report from Google Analytics for your chosen time period. Be sure to include the following attributes: Keyword, Campaign, Clicks, Cost, CPC, User, Sessions, Ecommerce Conversion Rate (or Goal Conversion Rate), Transactions (or Goals Completions), & Revenue.
                        </p>
                        <p className='my-4.5'>
                            The first row in this spreadsheet maps to these attributes. In Column K, you’ll find a ROAS calculation equipped with Conditional Formatting that will provide you with a quick visual representation of your Keyword success.
                        </p>
                        <p className='my-4.5'>
                            As a starting point, we’ve got Conditional Formatting set up to turn cells in Column K green when the ROAS is greater than or equal 250% and red when the ROAS is less than or equal to 150%.
                        </p>
                        <p className='my-4.5'>
                            With your exported data placed in this sheet, you’ll quickly see which of your keywords are driving the best ROAS.
                        </p>
                        <p className='my-4.5'>
                            To help sort, we have a filter placed in row 1 that provides you with endless filtering and sorting options. There’s also a nifty word count formula in Column L which will provide some insight into how your long tail and short tail keyword performance compare.
                        </p>
                        <p className='my-4.5'>
                            Run the same report at the Search Query level and compare it with your Keyword list. You may find some standout queries that can be added as Exact Match keywords to your campaigns.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-10' className='text-3xl w-full font-black mt-10.5'>
                            10. CRM Spreadsheet Hack
                        </h1>
                        <p className='my-4.5'>
                            Housing your website signup leads for b2b and b2c businesses doesn’t have to be complicated and doesn’t mean you automatically need to upgrade to an expensive email service provider (esp) or customer relationship management (CRM) software.
                        </p>
                        <p className='my-4.5'>
                            Take it from us at Tuff Growth. We don’t use a CRM or ESP to manage our inbound prospect leads but we also don’t spend time migrating information from lead forms to spreadsheets.
                        </p>
                        <p className='my-4.5'>
                            Our solution for a CRM is 100% free and utilizes tools that you likely already know about and some you might already use.
                        </p>
                        <p className='my-4.5'>
                            This solution isn’t for everyone. If you have over 100 leads coming in per day and need to send them down specific email drip funnel campaigns or assign them to specific sales managers, then a free CRM solution like Hubspot might be a better option for you.
                        </p>
                        <p className='my-4.5'>
                            For us, we have a manageable amount of leads come in through our website form each day and we either reach out to them should they look to be a good fit for our business or we do not. We also don’t have a full-service sales team and don’t plan to for the foreseeable future. All of our leads are 100% inbound generated and referral driven, which speaks to our dedication to SEO Content Strategy and doing great work for our existing clients.
                        </p>
                        <p className='my-4.5'>
                            To learn more about how you can create your own free CRM, let’s dive in:
                        </p>
                        <p className='my-4.5'>
                            At Tuff, our website is built on WordPress and we use the basic WordPress forms known as WPForms. Once a prospect enters their information into our form, then that person’s contact form information is sent directly to our Website leads Google Spreadsheet that is broken out by month.
                        </p>
                        <p className='my-4.5'>
                            The way that we send the form from WordPress Forms to our Google Sheets’ Lead Form is through a tool called Zapier which connects software APIs through no-code integrations.
                        </p>
                        <img src={img101} alt="" />
                        <p className='my-4.5'>
                            To set up this particular Zap, you will need to have a Zapier account, access to your WordPress site, and access to your website lead form sheet.
                        </p>
                        <p className='my-4.5'>
                            Enter your email to download the process for setting up this Zap:
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 1:</span>Select WPForms as your trigger
                        </p>
                        <img src={img102} alt="" />
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 2:</span>Choose the Trigger Event of New Form Entry
                        </p>
                        <img src={img103} alt="" />
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 3:</span>Select the WP Account with which the form is associated. You’ll need to connect your WP Account to Zapier with API Keys if you haven’t done this before. Follow the steps to do so.
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 4:</span>Choose the form that you want to send submitted information from in your zap.
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 5:</span>Test trigger as instructed by Zapier and make sure information is correct in your test.
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 6:</span>Choose the action that you want to happen when someone submits a form. In this case, the action is Google Sheets.
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 7:</span>Choose your action event. For this zap, you’ll want to choose “Create Spreadsheet Row”
                        </p>
                        <img src={img104} alt="" />
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 8:</span>Choose the Google Account associated with where your spreadsheet is housed.
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 9:</span>Choose the Google Drive associated with account that house the spreadsheet.
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 10:</span>Choose the Google Sheet that you want to send the submission data to.
                        </p>
                        <img src={img105} alt="" />
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 11 Optional:</span>If there are tabs in your spreadsheet, then choose which tab you want to send the data to.
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 12:</span>Now that you’re connected to the correct spreadsheet then Zapier will pull in header information and you will need to select what information from the form goes in each header column.
                        </p>
                        <img src={img106} alt="" />
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 13:</span>Test and review that your Zap is working correctly. This is a live test so Zapier will pull info from your latest submission on your WPForms over to Google Sheets. If it successful then you should see your submission updated in Google Sheets after you click test.
                        </p>
                        <p className='mt-4.5'>
                            <span className='font-black'>Step 14:</span>Once your test returns a positive result, then click “continue” and turn on your Zap.
                        </p>
                        <p className='mt-4.5 italic'>
                            Note: You will need to refresh your zap every few weeks. If it stops working for some reason then go back through the steps and re-integrate your accounts to keep everything working smoothly.
                        </p>
                    </div>
                    <div className="">
                        <h1 id='section-11' className='text-3xl w-full font-black mt-10.5'>
                            11. Value Props Exercise
                        </h1>
                        <img src={img11} alt="" />
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            While it’s incredibly important to make sure you’re set up for success with budgets, projections, goals, and reporting, it all falls flat without putting in the legwork to really dig in and create smart, compelling value props. For the data and dollar-sign driven types like founders and growth marketers, this can feel a bit daunting, but sharpening the language around why your customer/client should convert can streamline spend and make all other growth marketing activities work more efficiently.
                        </p>
                        <p className='my-4.5'>
                            For the left-brainers in the room (us included!) we created a spreadsheet to help us achieve this right-brain task.
                        </p>
                        <p className='my-4.5'>
                            Hot tip: many marketers that jump into value props start in the wrong place. Instead of focusing first on the end goal—a smart value prop—we recommend starting with the problem. Think first about the exact moment in someone’s life where they stumble across a problem, hit a roadblock, or create a workaround that your product directly addresses. Then, work right, circling back to the actual value prop as the last thing you do.
                        </p>
                        <p className='my-4.5'>
                            If you’re Uber, here’s how we would approach it.
                        </p>
                        <p className='my-4.5'>
                            <span className=' font-bold'>Problem:</span> I waste my time standing on a street corner trying to flag down an empty taxi.
                        </p>
                        <p className='my-4.5'>
                            <span className=' font-bold'>Implication:</span> I cut into my day by carving out extra time to flag down a taxi and I run the risk of being late.
                        </p>
                        <p className='my-4.5'>
                            <span className=' font-bold'> Solution:</span> A way to connect with an available driver and know exactly when they’ll show up.
                        </p>
                        <p className='my-4.5'>
                            <span className=' font-bold'> Benefit:</span> A guaranteed ride and a predictable timeline.
                        </p>
                        <p className='my-4.5'>
                            <span className=' font-bold'> Value Prop:</span> Get a guaranteed ride on your time.
                        </p>
                        <p className='my-4.5 italic'>
                            Note: the most important part of this exercise is to remember that even when you’ve scrutinized it, edited it, and rewritten it, it’s still a living document. Instead of putting it up on a shelf, periodically crack it open, make strategic updates, and use it!
                        </p>
                    </div>

                    <div className="">
                        <h1 id='section-12' className='text-3xl w-full font-black mt-10.5'>
                            12. Facebook Ad Creative Analysis Spreadsheet
                        </h1>
                        <img src={img12} alt="" />
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            We’re a revenue and conversion-first agency. But great creative—from ads to emails to landing pages and beyond—is a critical part of the equation.
                        </p>
                        <p className='my-4.5'>
                            Because we want to really dig into understanding what ad creative is performing the best, our team uses this spreadsheet to pull the core performance metrics for our paid campaigns on Facebook and Instagram. This helps us, and our clients, understand what’s working, what’s not working, and how we want to test moving forward.
                        </p>
                        <p className='my-4.5'>
                            We left the data in this spreadsheet so that you could see what the final output looks like. If you’re interested in using this spreadsheet to better understand how your Facebook creative is performing, download this and make a copy.
                        </p>
                    </div>

                    <div className="">
                        <h1 id='section-13' className='text-3xl w-full font-black mt-10.5'>
                            13. Landing Page Testing Plan Timeline
                        </h1>
                        <img src={img13} alt="" />
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            When it comes to increasing the conversion rate for our clients, we’re often focused on implementing impactful changes to the layout, copy, and images used throughout various landing pages to help increase our number of conversions.
                        </p>
                        <p className='my-4.5'>
                            For our process, it’s important to isolate as many variables as possible throughout testing so that we’re able to definitively say what improved (or negatively impacted) results. Not all CRO landing page tests go as planned, but with our testing methodology, we can always go back to the previous version of the landing page and start again with a new variable to test.
                        </p>
                        <p className='my-4.5'>
                            That’s why we structure our tests bracket-style using this spreadsheet. We’ll have two almost identical campaigns running in our paid channels, but with the ads pointing to two different landing pages. We’ll take the winner, and pit it against the next iteration of the landing page, keeping all the data organized in this spreadsheet.
                        </p>
                    </div>

                    <div className="">
                        <h1 id='section-14' className='text-3xl w-full font-black mt-10.5'>
                            14. SEO Forecasting
                        </h1>
                        <img src={img14} alt="" />
                        <p className='text-[#ff6b39] font-bold my-4.5'>
                            Grab a copy of this spreadsheet here {">>"}
                        </p>
                        <p className='my-4.5'>
                            SEO forecasting lets you use data to estimate future organic traffic results and keyword movement. It leverages historical data and assumes traffic patterns are likely to continue and can help you prioritize SEO efforts and allocated resources based on potential impact.
                        </p>
                        <p className='my-4.5'>
                            Forecasting is critical when it comes to prioritization and something we believe every early stage startup and scaleup needs to consider.
                        </p>
                        <p className='my-4.5'>
                            At Tuff, we’ve been using this Google Sheet to forecast organic traffic growth for our clients for the last 6 months, and it’s proven extremely reliable with its predictions.
                        </p>
                    </div>
                </div>
            </section>
            <section className=' pt-3 flex flex-col items-center text-xl'>
                <div className=" w-[50%]">
                    <h1 id='section-15' className='text-3xl w-full font-black '>
                        Happy Spreadsheeting-ing
                    </h1>
                    <p className="my-4.5">
                        Thanks for reading! I hope you picked up one or two new tips and tricks for your spreadsheets here.
                    </p>
                    <p className="my-4.5">
                        I’d love to hear what growth marketing spreadsheets your team has been using? What has worked well for you?
                    </p>
                    <div className="py-12.5 w-full bg-[#F0F0F0] h-64 rounded-xl px-5 pt-2.5 pb-6 flex items-center">
                        <div className="w-1/5">
                            <div className="px-5 pb-5">
                                <img className='rounded-full w-25 h-25 ' src={pfp} alt="" />
                            </div>
                        </div>
                        <div className="w-4/5">
                            <Link to={"/"} className=' text-xl text-[#515455] font-bold'>Ellen Jantsch</Link>
                            <p className='text-lg'>Ellen is the founder at Tuff and one of the team’s core growth marketers. She is a versatile marketer with expertise in multiple channels – from ppc to seo to email to others – responsible for the experiments and testing.  She is happiest when she’s on the ski hill or outside pointing her mountain bike downhill.</p>
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
