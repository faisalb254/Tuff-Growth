import React from "react";
import Navbar from "../components/Navbar";
import Works from "../assets/Work.png";
import Search from "../assets/search.svg";
import Userborder from "../assets/Userborder.svg";
import UserEx from "../assets/UserEx.svg";
import Measur from "../assets/Measur.svg";
import Not from "../assets/Not.svg";
import Pic from "../assets/pic.svg";
import star1 from "../assets/star1.svg";
import VPBrad from "../assets/VPBrad.png";
import { BiChevronRight } from "react-icons/bi";
import User from "../assets/User.svg";
import Set from "../assets/Set.svg";
import WorkImg1 from "../assets/WorkImg1.png";
import WorkImg2 from "../assets/WorkImg2.png";
import WorkImg3 from "../assets/WorkImg3.png";
import Tick from "../assets/Tick.svg";
import FinalSection from '../components/FinalSection'
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Work() {
  const box = {
        heading: "Ready to grow?",
        para: ["Your compounding growth curve begins here."],
        button: "Book a Strategy Call"
    }
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full h-auto md:h-[100vh] ContentLine pt-1">
          <div className="w-full h-auto mt-20 md:mt-20 lg:mt-35 px-4 sm:px-6 md:px-12 lg:pl-19 flex flex-col lg:flex-row gap-10">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[48%] h-auto pt-4">
              <div className="h-auto md:h-[39px] py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-4 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit mb-5">
                WHAT WE DO
              </div>
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-semibold text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-7">
                Growth Strategy and Execution
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-13 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                We’re a full-service growth marketing agency, providing strategy
                and execution for some of the world’s most exciting startups and
                established brands. Let’s go deep on positioning and strategy,
                customer acquisition, lifecycle, and conversion. And let’s keep
                it curious and human-centered every step of the way.
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let’s Talk
                </button>
              </Link>
            </div>
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[50%] mt-6 lg:mt-0 px-4 sm:px-6 md:px-10 lg:px-20">
              <img src={Works} alt="Works" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto flex items-center flex-col pt-20">
          <h2 className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[2.5rem] mt-4 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[45%]">
            We’re designed to flex to meet you on your terms:
          </h2>
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[66%] m-auto mt-18 h-auto flex flex-col lg:flex-row gap-6 justify-between">
            <div className="h-full w-full lg:w-[48.5%] p-8 border border-gray-200 rounded-[5px]">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                Hands-on help
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Our team has full-stack skills and technical expertise, so we’re
                not afraid to get in the weeds. This includes things like rapid
                message testing, building amazingly effective web pages,
                usability testing, ad optimization, A/B testing, and
                multivariate testing. We’re ready to bolt-on to your existing
                marketing team to support the overall strategy and nitty-gritty
                execution.
              </p>
            </div>
            <div className="h-full w-full lg:w-[48.5%] p-8 pb-14 border border-gray-200 rounded-[5px]">
              <h2 className="text-[27px] font-semibold text-[#0c2233]">
                Coaching
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                We offer a mix of individual and/or team-based coaching services
                to managers and senior growth leaders. We’ll support you on your
                day-to-day or unique complex growth needs to give your team a
                measurable lift. We believe strategy is not a phase, but a way
                of making deliberate decisions and we can bring a long-term
                perspective to help execute your vision.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-14 pb-20 flex items-center flex-col">
          <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-10 sm:mt-16 md:mt-19 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            OUR SERVICES
          </div>
          <p className="text-[24px] sm:text-[32px] lg:text-[43px] font-semibold text-[#0C2233] leading-snug lg:leading-[2.5rem] mt-4 text-center w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]">
            Provide the best experience for the customer at every stage of the
            funnel
          </p>
          <div className="w-full h-auto pt-10 sm:pt-16 lg:pt-19 px-4 sm:px-6 md:px-10 lg:px-19 pb-10 flex flex-col flex-wrap lg:flex-row gap-8 lg:gap-0 justify-center lg:justify-between items-center lg:items-start">
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Search} alt="Search" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Paid Media
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                The right media mix across brand and performance.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={Userborder} alt="Userborder" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Strategy and Insights
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Activation underpinned by detailed action orientated roadmaps.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8">
              <img src={UserEx} alt="UserEx" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                User Experience
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                The right experience at each stage of the funnel.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Measur} alt="Measur" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Measurement
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Know what’s working and replicate it.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Not} alt="Not" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Content and SEO
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Capture demand & visibility across customer segments.
              </p>
            </div>
            <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[31.3%] h-auto min-h-[274px] pb-11 border-2 border-[#E0E0E0] rounded-[3px] p-7 px-8 md:mt-7">
              <img src={Pic} alt="Pic" />
              <h2 className="text-[22px] sm:text-[24px] font-bold text-[#0C2233] mt-6">
                Performance Creative
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Constantly create a large volume of messages to test.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto Croline2 pb-10 flex flex-col items-center justify-center pt-10 px-4 sm:px-6 md:px-10 lg:px-65">
          <img src={star1} alt="star1" className="mt-14 sm:mt-16 md:mt-20" />

          <p className="bg-[#CEFD94] text-[#0C2233] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-7 px-4 text-center lg:text-[26px]">
            “I view our partnership with Tuff as more like an extension of my
            team.
          </p>

          <p className="text-[#FFFFFF] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-5 px-4 text-center lg:text-[26px]">
            We strategize together, ask tough questions, examine the results,
            optimize – and it just keeps getting better. Exactly what I was
            looking for.”
          </p>

          <img src={VPBrad} alt="VPBrad" className="mt-10 sm:mt-12 md:mt-14" />

          <h1 className="text-[#FFFFFF] text-[16px] sm:text-[17px] md:text-[18px] font-semibold mt-3 text-center lg:text-[20px]">
            Brad Veach
          </h1>

          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-center px-4 sm:px-6 font-normal text-[#FFFFFF] mt-6 leading-[22px] lg:text-[20px] lg:w-[55%] lg:mt-0 lg:leading-[25px]">
            VP of Marketing at THNKS
          </p>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pb-10 ">
          <div className="h-auto m-auto py-2 bg-[#ceff2a] rounded-[20px] flex justify-center items-center px-5 mt-24 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit lg:h-[39px] lg:py-0">
            WHY TUFF
          </div>
          <h2 className="text-[24px] sm:text-[32px] lg:text-[43px] font-bold text-[#0C2233] leading-snug lg:leading-[2.5rem] mt-4 text-center">
            Navigate, pivot, and grow with confidence:
          </h2>

          <div className="w-full flex flex-col gap-6 px-6 pb-20 pt-10 lg:flex-row lg:gap-0 lg:justify-between lg:px-20">
            <div className="w-full p-6 rounded-[3px] border border-gray-300 lg:w-[31.5%] lg:p-8 mt-4">
              <img src={User} alt="User" />
              <h2 className="text-[24px] text-[#0C2233] font-semibold mt-4 lg:text-[28px]">
                Experience & Team
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                We’ve worked with teams in nearly every industry at nearly every
                stage of growth. From individual, self-funded founders to
                established players with multi-million dollar ad budgets, we’ve
                seen it all. This diversity puts us in a position to learn at a
                high speed and make a significant impact. Whether you’re still
                searching for your highest ROI channel or you’re ready to scale
                it, our growth marketers have you covered.
              </p>
              <Link to={"/our-company"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-4 text-[#0C2233]cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Meet our team
                  <span>
                    <BiChevronRight className="text-[24px] text-[#0C2233]lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full p-6 rounded-[3px] border border-gray-300 lg:w-[31.5%] lg:p-8 mt-4">
              <img src={UserEx} alt="UserEx" />
              <h2 className="text-[24px] text-[#0C2233] font-semibold mt-4 lg:text-[28px]">
                Flexibility & Scale
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                Our unique operating model allows us to be flexible based on
                your needs. Meaning, when you need to pivot or the data tells
                you to go in another direction we’re able to take you there
                faster than anyone else. The way our process functions at Tuff
                allows us to seamlessly sub in new services or team members to
                try something new based on the current company stage and
                strategy.
              </p>
              <Link>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-4 text-[#0C2233] cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Learn about our pricing model
                  <span>
                    <BiChevronRight className="text-[24px] text-[#0C2233]lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>

            <div className="w-full p-6 rounded-[3px] border border-gray-300 lg:w-[31.5%] lg:p-8 mt-4">
              <img src={Set} alt="Set" />
              <h2 className="text-[24px] text-[#0C2233] font-semibold mt-4 lg:text-[28px]">
                Performance Focused
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px]">
                We’re ruthless with results. While each channel requires rapid
                testing and optimization (some more than others), if we’re not
                seeing real, measurable impact on your revenue goals, we’re
                quick to pivot and test elsewhere. Ultimately, we’ll end up with
                the right channel mix that sets the stage for true, sustainable
                growth.
              </p>
              <Link to={"/case-studies"}>
                <p className="flex items-center gap-1 text-[18px] font-semibold mt-4 text-[#0C2233]cursor-pointer transition-transform duration-500 tilt-zoom hover:text-[21px] lg:text-[19px] hover:text-[#FF6A39]">
                  Read our case studies
                  <span>
                    <BiChevronRight className="text-[24px] text-[#0C2233]lg:text-[30px]" />
                  </span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto bg-[#0C2233]">
          <div className="w-[90%] h-auto m-auto pb-20 pt-9 flex flex-col lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-[47.5%] h-auto pb-10 pt-10 lg:pt-20">
              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#FFFFFF] leading-[1.4]">
                You have an always-on, responsive extension of your team.
              </h2>
              <p className="text-[16px] lg:text-[18.7px] font-normal text-[#FFFFFF] mt-4 lg:mt-3">
                Part of what makes us different is the way we’ve prioritized
                real-time, transparent communication. We’re collaborators by
                nature and our communication toolbox helps us do our best work
                together. We love our shared Slack channels with our partners
                and lean on other resources like weekly calls, shared docs, and
                more to make sure we’re always in lock step and on the same
                page.
              </p>
            </div>
            <div className="w-full lg:w-[47.5%] h-auto pb-10 pt-10">
              <img src={WorkImg1} alt="WorkImg1" />
            </div>
          </div>
          <div className="w-[90%] h-auto m-auto pb-20 flex flex-col lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-[47.5%] h-auto pb-10 pt-10">
              <img src={WorkImg2} alt="WorkImg2" />
            </div>
            <div className="w-full lg:w-[47.5%] h-auto pb-10 pt-7">
              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#FFFFFF] leading-[1.4]">
                You get high-level marketing strategies with expert
                implementation.
              </h2>
              <p className="text-[16px] lg:text-[18.7px] font-normal text-[#FFFFFF] mt-4 lg:mt-3">
                The best decisions are made through quality research and
                strategic insights. If you have an opportunity you are looking
                to take advantage of, a problem you are trying to solve or a
                desire to more successfully embrace big ideas, we can help you
                uncover the right path forward and then execute against that
                plan across multiple tactics and services.
              </p>
            </div>
          </div>
          <div className="w-[90%] h-auto m-auto pb-10 flex flex-col lg:flex-row justify-between gap-10">
            <div className="w-full lg:w-[47.5%] h-auto pb-10 pt-7">
              <h2 className="text-[28px] md:text-[32px] lg:text-[40px] font-semibold text-[#FFFFFF] leading-[1.4]">
                You get a squad of tirelessly curious, inventive, experienced
                question-askers.
              </h2>
              <p className="text-[16px] lg:text-[18.7px] font-normal text-[#FFFFFF] mt-4 lg:mt-3">
                The greatest growth mistakes happen when complacency creeps in.
                We’re constantly on the curling edge of new technology, trends
                and tools and full of zest for sharing. But we engage deeply in
                data, findings, and hypotheses to dig a layer deeper, observe
                from new perspectives, and constantly work to stay one step
                ahead of the rest of the pack.
              </p>
            </div>
            <div className="w-full lg:w-[47.5%] h-auto pb-10 pt-10">
              <img src={WorkImg3} alt="WorkImg3" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-1 flex flex-col items-center">
          <h1 className="text-[28px] sm:text-[36px] md:text-[43px] text-center font-semibold text-[#0C2233] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-15 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[65%]">
            We focus on finding traction and scale for brands, ideas, and
            campaigns for teams of all sizes.
          </h1>
          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-4 leading-[24px] md:leading-[25px] w-[90%] sm:w-[80%] md:w-[70%] lg:w-[55%] text-center">
            We have found success working with teams in nearly every industry,
            from early traction startups to large enterprises. We’re typically
            the most effective in the following scenarios:
          </p>
          <div className="w-[90%] m-auto mt-10 h-auto flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
            <div className="w-full lg:w-[31.5%] h-auto p-8 pb-11 border border-gray-300 rounded-[5px]">
              <img src={Tick} alt="Tick" />
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[24px] md:leading-[25px]">
                Early stage brands that need to invest in growth strategy and
                brand development.
              </p>
            </div>
            <div className="w-full lg:w-[31.5%] h-auto p-8 pb-11 border border-gray-300 rounded-[5px]">
              <img src={Tick} alt="Tick" />
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[24px] md:leading-[25px]">
                Scaleups and teams that just raised and need to build out the
                marketing foundations, develop a strategy, and test quickly.
              </p>
            </div>
            <div className="w-full lg:w-[31.5%] h-auto p-8 pb-11 border border-gray-300 rounded-[5px]">
              <img src={Tick} alt="Tick" />
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-6 leading-[24px] md:leading-[25px]">
                Established brands looking for a fresh perspective on how they
                can accelerate growth with a focus on performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pb-10 flex flex-col items-center justify-center pt-10 px-4 sm:px-6 md:px-10 lg:px-65">
          <img src={star1} alt="star1" className="mt-14 sm:mt-16 md:mt-20" />

          <p className="bg-[#CEFD94] text-[#0C2233] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-7 text-center lg:text-[26px]">
            “Great team to work with. Very experienced, quick to respond and
            always
          </p>
          <p className="bg-[#CEFD94] text-[#0C2233] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-1 text-center lg:text-[26px]">
            willing to pivot based on feedback.
          </p>

          <p className="text-[#0C2233] text-[18px] sm:text-[20px] md:text-[22px] font-semibold mt-5 px-4 text-center lg:text-[26px]">
            I have really enjoyed working with the Tuff team and have learned a
            ton from them!”
          </p>
          <h1 className="text-[#0C2233] text-[16px] sm:text-[17px] md:text-[18px] font-semibold mt-3 text-center lg:text-[20px]">
            Laurens Spethmann
          </h1>

          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-center px-4 sm:px-6 font-normal text-[#0C2233] mt-6 leading-[22px] lg:text-[20px] lg:w-[55%] lg:mt-0 lg:leading-[25px]">
            Growth Leader at Headway
          </p>
        </div>
      </section>

      <FinalSection text={box}/>
      <Footer />
    </>
  );
}
