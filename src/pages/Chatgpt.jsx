import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Toc from '../components/Toc';
import RelatedPosts from '../components/RelatedPosts';
import Newsletter from '../components/Newsletter';
import ScrollButton from '../components/ScrollButton';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import Banner from "../assets/chatgptbanner.jpg"
import pfp from "../assets/derek-colmen.png"
import img from "../assets/chatgptimg.png"
import img2 from "../assets/chatgptimg2.png"
import img3 from "../assets/chatgptimg3.png"
import img4 from "../assets/chatgptimg4.png"
import img5 from "../assets/chatgptimg5.png"
import img6 from "../assets/chatgptimg6.png"


export default function Chatgpt() {
    const table = ["Importance of crafting thoughtful prompts", "Open-ended vs close-ended prompts", "Role-based Priming", "Knowledge & Task-based Priming", "Utilizing personas in prompts", "Segment your asks", "Break your request into smaller parts", "Make AI ask you the questions", "Reference books or well-known marketing frameworks and tell it what to avoid", "Go heavy on context", "Build this all into a repeatable template", "Key Takeaways"]
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
                        <Link className='text-[#ff6b39] font-bold'>Growth Marketing </Link>
                        » Level up your growth marketing strategies with ChatGPT: how to write AI prompts to get the best results
                    </span>
                </div>
                <div className="pt-10 w-[50%]">
                    <h1 className='text-3xl sm:text-6xl w-full font-bold text-center'>
                        Level up your growth marketing strategies with ChatGPT: how to write AI prompts to get the best results
                    </h1>
                    <p className=' text-center'>
                        April 6, 2023/in Growth Marketing / <Link to={"/author/derek"}>by Derek Coleman</Link>
                    </p>
                    <img className='my-2.5 py-2.5 h-auto w-full' src={Banner} alt=" banner" />
                    <p className='my-4.5'>
                        Marketing teams are constantly searching for innovative ways to streamline processes, optimize campaigns, and drive business growth.
                    </p>
                    <p className='my-4.5'>
                        Well, what if I told you there was a way to do all of that?
                    </p>
                    <p className='my-4.5'>
                        Please welcome, 🥁ChatGPT and the AI Revolution! 💥
                    </p>
                    <p className='my-4.5'>
                        As a <Link to={"/growth-marketing-agency"}><span className="text-[#ff6b39] font-bold">growth marketer</span></Link>, ChatGPT is an incredibly powerful tool that you can use to help drive engagement and conversions. By crafting the right prompts, you can create personalized experiences that speak directly to your target audience.
                    </p>
                    <p className='my-4.5'>
                        In this post, we’ll explore the art of crafting effective prompts and walk you through tips and best practices for writing prompts that will help you take your growth marketing strategy to the next level.
                    </p>
                    <h1 id='section-1' className='text-3xl w-full font-black mt-10.5'>
                        Importance of crafting thoughtful prompts
                    </h1>
                    <p className='my-4.5'>
                        In the age of AI-powered marketing, crafting thoughtful and precise prompts is critical to unlocking the full potential of generative AI tools. 🤖As growth marketers, it’s important to remember that AI is the doer, not the thinker. 💡Our role is to be the strategic masterminds, guiding the AI with well-constructed prompts to help us streamline processes, optimize strategies, and achieve growth goals.
                    </p>
                    <blockquote className=' mb-7 mr-7 border-l-8 border-[#FF6A39] pl-5'>
                        <p className='font-bold'>AI is the doer, not the thinker.</p>
                    </blockquote>
                    <p className='my-4.5'>
                        The importance of prompt writing has become so apparent that companies are now hiring dedicated ‘AI prompt engineers’ and offering up to <Link to={""}><span className="text-[#ff6b39] font-bold"> $335,000 a year</span></Link>. 💰💻
                    </p>
                    <p className="my-4.5">
                        To write an expert prompt, start by being clear and specific about your intentions. Remember that AI will do what you want it to do, as long as you explain it thoroughly and accurately. Avoid using ambiguous language or overloading the prompt with unnecessary details, which can lead to confusion and subpar results. 😕 Instead, focus on providing concise and direct instructions to maximize the AI’s ability to understand and execute the task.
                    </p>
                    <p className="my-4.5">
                        Ultimately, the success of AI-driven <Link to={""}><span className="text-[#ff6b39] font-bold"> growth marketing strategies</span></Link> hinges on the collaboration between humans and machines 💻🤝 – sounds like we’re in a Sci-Fi movie, right? We’re certainly getting closer…
                    </p>
                    <p className="my-4.5">
                        Let’s dig into certain types of prompts and how you can interact with generative AI.
                    </p>
                    <h1 id='section-2' className='text-3xl w-full font-black mt-10.5'>
                        Open-ended vs close-ended prompts
                    </h1>
                    <p className="my-4.5">
                        Open-ended prompts encourage more creative and extensive responses, while closed-ended prompts typically yield brief, specific answers. Choose the type of prompt based on your desired output.
                    </p>
                    <p className="my-4.5">
                        Example:
                    </p>
                    <p className='font-bold'>
                        Open-ended prompt
                    </p>
                    <p className="my-4.5">
                        “Can you suggest some ways to improve our marketing strategy?”
                    </p>
                    <p className="my-4.5">
                        Assuming you’ve provided detailed specifics on your marketing strategy prior to asking this question.
                    </p>
                    <p className="my-4.5">
                        This prompt encourages ChatGPT to generate its own thoughts and ideas on how to improve the marketing strategy without limiting it to a specific set of options or ideas. The response may be more varied and generate broad suggestions that may or may not be what you’re looking for.
                    </p>
                    <p className='font-bold'>
                        Closed-ended prompt
                    </p>
                    <p className="my-4.5">
                        “Which social media platform is the most effective for reaching a younger audience?”
                    </p>
                    <p className="my-4.5">
                        This prompt provides a specific set of options for ChatGPT to choose from and limits the response to one choice. This type of prompt is useful when seeking specific information or opinions, but may not provide as much insight or variety in responses compared to open-ended prompts.
                    </p>
                    <h1 id='section-3' className='text-3xl w-full font-black mt-10.5'>
                        Role-based Priming
                    </h1>
                    <img src={img} alt="" />
                    <p className="my-4.5">
                        Define a specific role for ChatGPT to adopt during the conversation.
                    </p>
                    <p className="my-4.5">
                        If you leave this up to chance, the AI will make too many assumptions.
                    </p>
                    <p className="my-4.5">
                        e.g. “You are a world-class software developer.”
                    </p>
                    <p className="my-4.5">
                        By tailoring prompts to my specific role, ChatGPT can provide more relevant and accurate responses. This approach helps to ensure that the conversation stays focused on my needs and interests, ultimately leading to more productive and effective interactions.
                    </p>
                    <h1 id='section-4' className='text-3xl w-full font-black mt-10.5'>
                        Knowledge & Task-based Priming
                    </h1>
                    <p className="my-4.5">
                        Specify the knowledge level or expertise you expect from ChatGPT. As you can see in the example prompt above, I specifically asked for beginner-friendly, step-by-step instructions. I combined knowledge and task-based priming by asking for specific tasks – the names of the files, which files to paste which code into, and how to export and upload the code into WordPress.
                    </p>
                    <p className="my-4.5">
                        I’ve defined AI as the world-class expert and me as the beginner. The roles and tasks are very clear and as things progress and I start to ask more questions, the AI will remember its role as well as mine.
                    </p>
                    <h1 id='section-5' className='text-3xl w-full font-black mt-10.5'>
                        Utilizing personas in prompts
                    </h1>
                    <img src={img2} alt="" />
                    <p className="my-4.5">
                        Defining a Persona. Provide a specific persona to ChatGPT to enhance the conversation’s depth and consistency.
                    </p>
                    <p className="my-4.5">
                        Persona: 🙋Jennifer, a 35-year-old marketing manager at a B2B SaaS company.
                    </p>
                    <p className="my-4.5">
                        Prompt: As a marketing manager for a B2B SaaS company, Jennifer needs to generate high-quality leads for the sales team. Can you suggest some strategies that are effective for reaching decision-makers in the tech industry, particularly those who are actively researching solutions in our market?
                    </p>
                    <p className="my-4.5">
                        In this prompt, the persona “Jennifer” is clearly defined by her role, company, and <Link to={""}><span className="text-[#ff6b39] font-bold"> target audience</span></Link>. The prompt is specific to the challenges she faces and the desired outcome, which is to generate high-quality leads. By utilizing this persona and providing specific context, ChatGPT can generate more relevant and effective strategies for Jennifer’s specific situation, leading to a more productive and valuable conversation.
                    </p>
                    <h1 id='section-6' className='text-3xl w-full font-black mt-10.5'>
                        Segment your asks
                    </h1>
                    <img src={img3} alt="" />
                    <p className="my-4.5">
                        Most requests in ChatGPT fall into 1 of 3 buckets:
                    </p>
                    <ul className=' list-disc pl-8'>
                        <li className='mt-5'>Research</li>
                        <li className='mt-5'>Creation</li>
                        <li className='mt-5'>Improvement</li>
                    </ul>
                    <p className="my-4.5">
                        Research prompts can have less context.
                    </p>
                    <p className="my-4.5">
                        Creation prompts need the most context.
                    </p>
                    <p className="my-4.5">
                        Improvement prompts require the most back and forth.
                    </p>
                    <h1 id='section-7' className='text-3xl w-full font-black mt-10.5'>
                        Break your request into smaller parts
                    </h1>
                    <img src={img4} alt="" />
                    <p className="my-4.5">
                        If you ask for a whole blog post at once, it won’t be as good.
                    </p>
                    <p className="my-4.5">
                        If you break the request into parts, you can get great content.
                    </p>
                    <p className="my-4.5">
                        A good rule of thumb?
                    </p>
                    <p className="my-4.5">
                        Ask for a max of 150 words at a time.
                    </p>
                    <h1 id='section-8' className='text-3xl w-full font-black mt-10.5'>
                        Make AI ask you the questions
                    </h1>
                    <img src={img5} alt="" />
                    <p className="my-4.5">
                        Maybe the most underrated tip here.
                    </p>
                    <p className="my-4.5">
                        If you’re stuck or want to look at a problem from different angles…
                    </p>
                    <p className="my-4.5">
                        Make AI think of all the angles for you.
                    </p>
                    <p className="my-4.5">
                        Working from a list of questions helps you generate more ideas yourself.
                    </p>
                    <h1 id='section-9' className='text-3xl w-full font-black mt-10.5'>
                        Reference books or well-known marketing frameworks and tell it what to avoid
                    </h1>
                    <p className="my-4.5">
                        Priming ChatGPT with references to reputable sources or well-known marketing frameworks can significantly enhance the quality and relevance of its output because you’re guiding it to generate insights that align with established theories and strategies.
                    </p>
                    <p className="my-4.5">
                        Fun fact. When one of our SEO strategists thought that the invoice from their CPA was unreasonably expensive, they asked ChatGPT to write an email using principles from “How to Win Friends & Influence People” and they were able to get a reduced fee! 🫰
                    </p>
                    <h1 id='section-10' className='text-3xl w-full font-black mt-10.5'>
                        Go heavy on context
                    </h1>
                    <img src={img6} alt="" />
                    <p className="my-4.5">
                        Bad prompt, bad result.
                    </p>
                    <p className="my-4.5">
                        Simple as that.
                    </p>
                    <p className="my-4.5">
                        The more context you give, the better your responses will be.
                    </p>
                    <p className="my-4.5">
                        Trying giving basic context like:
                    </p>
                    <ul className=' list-disc pl-8'>
                        <li className='mt-5'>Tone</li>
                        <li className='mt-5'>Length</li>
                        <li className='mt-5'>Target audience</li>
                        <li className='mt-5'>Desired outcome</li>
                        <li className='mt-5'>Where the content will go</li>
                    </ul>
                    <h1 id='section-11' className='text-3xl w-full font-black mt-10.5'>
                        Build this all into a repeatable template
                    </h1>
                    <img src={img6} alt="" />
                    <p className="my-4.5">
                        The last step is to bring it all together and build a repeatable template that you can use time and time again. 🔁
                    </p>
                    <p className="my-4.5">
                        Creating a repeatable template with these suggestions streamlines the interaction process, ensures consistent, high-quality results, and saves you time on future tasks.
                    </p>
                </div>
            </section>
            <section className=' pt-3 flex flex-col items-center text-xl'>
                <div className=" w-[50%]">
                    <h1 id='section-12' className='text-3xl w-full font-black '>
                        Key Takeaways
                    </h1>
                    <p className="my-4.5">
                        Leveraging ChatGPT’s full potential requires thoughtful and strategic interactions.
                    </p>
                    <p className="my-4.5">
                        Use effective prompts that are explicit, concise, and specify the desired output format. Priming AI with context, such as “You are a world-class content marketer,” can guide responses toward a desired expertise.
                    </p>
                    <p className="my-4.5">
                        Employing personas can further refine AI-generated content by instructing it to emulate a specific tone or style, for example, “You are an enthusiastic fitness coach.”
                    </p>
                    <p className="my-4.5">
                        By mastering these techniques and continuously refining your approach, you can significantly streamline marketing processes, optimize campaigns, and drive business growth.
                    </p>
                    <div className="py-12.5 w-full bg-[#F0F0F0] h-64 rounded-xl px-5 pt-2.5 pb-6 flex items-center">
                        <div className="w-1/5">
                            <div className="px-5 pb-5">
                                <img className='rounded-full w-25 h-25 ' src={pfp} alt="" />
                            </div>
                        </div>
                        <div className="w-4/5">
                            <Link to={"/"} className=' text-xl text-[#515455] font-bold'>Derek Coleman</Link>
                            <p className='text-lg'>Derek is a digital marketer based in Boston, Massachusetts with almost a decade of hands-on SEO experience. He finds it meaningful, challenging, and exciting to develop, test, and implement new SEO strategies. When he’s not auditing websites and optimizing content he’s usually backpacking and exploring new cultures.</p>
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
