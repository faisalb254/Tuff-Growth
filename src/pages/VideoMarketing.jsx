import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../assets/hero.png";
import VideoYou from "../assets/VideoYou.svg";
import VideoTik from "../assets/VideoTik.svg";
import YideoRoc from "../assets/YideoRoc.svg";
import VideoMar from "../assets/VideoMar.svg";
import VideoProdu from "../assets/VideoProdu.svg";
import FinalSection from '../components/FinalSection'
import Footer from "../components/Footer";
import VideoImg from "../assets/VideoImg.png";
import VideoPro from "../assets/VideoPro.png";
import VideoLast from "../assets/VideoLast.png";
import Video1 from "../assets/Video1.mp4";
import Video2 from "../assets/Video2.mp4";
import TopVideo from "../assets/videomarketingvideo.webm"
import { Link } from "react-router-dom";

export default function VideoMarketing() {
  const box = {
        heading: "Video marketing isn’t as Tuff as it looks.",
        para: ["Let’s create beautiful, data-driven video assets together."],
        button: "Book a Strategy Call"
    }
  return (
    <>
      <div className="w-full lg:fixed top-0 z-50 bg-[#1e1e1e]">
        <Navbar />
      </div>

      <section>
        <div className="w-full h-auto VideoLine pt-1">
          <div className="w-full h-auto flex pb-23 mt-40 md:mt-20 lg:mt-30 px-4 sm:px-6 md:px-12 lg:pl-19">
            <div className="w-full sm:w-[80%] md:w-[60%] lg:w-[40%] h-auto pb-10 pt-1">
              <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-medium text-[#ffffff] leading-[36px] sm:leading-[42px] md:leading-[52px] lg:leading-[60px] mt-4 sm:mt-6 md:mt-7">
                With the right video marketing strategies, you can be seen and
                heard by a whole new audience.
              </h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#ffffff] mt-6 sm:mt-8 md:mt-10 lg:mt-13 leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Ads, landing pages, and content – quality video racks up
                engagement and stickiness. And for good reason.
              </p>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] font-medium text-[#ffffff] mt-4 sm:mt-5 w-full lg:w-[95%] leading-[22px] sm:leading-[24px] md:leading-[25px]">
                Even TikTok has become a top place to find everything you need.
              </p>
              <Link to="/get-started-with-tuff">
                <button className="text-[#0C2233] cursor-pointer text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] font-bold mt-6 sm:mt-7 md:mt-8 lg:mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                  Let's Talk
                </button>
              </Link>
            </div>
            <div className=" w-3/5 h-auto flex justify-center items-center">
              <video autoPlay loop muted className="w-2/3"><source  src={TopVideo} type="video/webm"/></video>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex items-center justify-center flex-col pb-10 sm:pb-14 md:pb-16 lg:pb-20 px-4 sm:px-6 md:px-10">
          <h2 className="text-[20px] xs:text-[24px] sm:text-[32px] md:text-[36px] lg:text-[46px] font-semibold text-[#0C2233] text-center w-full lg:w-[50%] leading-tight sm:leading-[38px] md:leading-[44px] lg:leading-[60px] mt-[20px] sm:mt-[25px] md:mt-[30px] lg:mt-30 tracking-normal md:tracking-[-1.5px] lg:tracking-[-2.5px]">
            Yes, video marketing actually boosts ROI.
          </h2>
          <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#0C2233] text-center mt-[20px] sm:mt-[25px] md:mt-[28px] lg:mt-3 leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[53%] px-2 sm:px-0">
            A whopping{" "}
            <span className="text-[#FF6A39] font-bold">84% of people</span>{" "}
            they’ve been convinced to buy a product or service after watching a
            video. Done right, video content allows you to take control of your
            brand’s story and help your audience visualize the benefits your
            company offers them.
          </p>
          <img
            src={VideoImg}
            alt="VideoImg"
            loading="lazy"
            className="w-full sm:w-[90%] md:w-[85%] lg:w-[79%] mt-10 sm:mt-14 lg:mt-16"
          />
        </div>
      </section>

      <section>
        <div className="w-full h-auto VideoLine2 pb-20 flex items-center flex-col px-4 sm:px-6 md:px-8 lg:px-0">
          <h2 className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[37px] mt-[30px] sm:mt-[35px] lg:mt-25 w-full sm:w-[80%] md:w-[65%] lg:w-[55%] text-center font-extrabold text-[#FFFFFF] leading-tight">
            Youtube, TikTok, Landing Pages, Blog Posts, and beyond…
          </h2>

          <p className="text-[16px] xs:text-[18px] sm:text-[20px] lg:text-[20px] text-[#FFFFFF] mt-[20px] sm:mt-[25px] lg:mt-5 leading-[24px] sm:leading-[27px] max-w-full lg:max-w-[38%] text-center px-2 sm:px-0">
            Our growth marketing experts are equipped to create video marketing
            strategies that target the right channels to reach your audience.
          </p>

          <div className="w-full h-auto flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-6 sm:gap-5 lg:gap-0 px-0 sm:px-4 lg:px-19 mt-10">
            <div className="w-full sm:w-[48%] lg:w-[31.7%] h-auto bg-[#1f3343] border-[3px] border-[#40525F] p-6 sm:p-8 px-6 sm:px-9 pb-12">
              <img src={VideoYou} alt="VideoYou" loading="lazy" />
              <h2 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold mt-2 text-[#FFFFFF]">
                Youtube Marketing
              </h2>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-[#ffffff] leading-[25px] mt-4">
                Whether it’s video remarketing ads, a need to spice up your
                videos with animation, or optimizing your Youtube channel, we’ll
                help you be found on one of the largest search engines in the
                world.
              </p>
            </div>

            <div className="w-full sm:w-[48%] lg:w-[31.7%] h-auto bg-[#1f3343] border-[3px] border-[#40525F] p-6 sm:p-8 px-6 sm:px-9 pb-12">
              <img src={VideoTik} alt="VideoTik" loading="lazy" />
              <h2 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold mt-2 text-[#FFFFFF]">
                TikTok Campaigns
              </h2>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-[#ffffff] leading-[25px] mt-4">
                The new frontier of search for younger generations. We’ll create
                a TikTok SEO strategy that can help you stay ahead of the
                competition and support your TikTok ads strategy.
              </p>
            </div>

            <div className="w-full sm:w-[100%] lg:w-[31.7%] h-auto bg-[#1f3343] border-[3px] border-[#40525F] p-6 sm:p-8 px-6 sm:px-9 pb-12">
              <img src={YideoRoc} alt="YideoRoc" loading="lazy" />
              <h2 className="text-[22px] sm:text-[24px] lg:text-[28px] font-semibold mt-2 text-[#FFFFFF]">
                And beyond…
              </h2>
              <p className="text-[16px] sm:text-[18px] lg:text-[20px] font-medium text-[#ffffff] leading-[25px] mt-4">
                We’ll tell your brand story through product explainer videos and
                testimonials. From creative briefs to video editing and
                animation, we’ll be there every step of the way.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <Link to="/get-started-with-tuff">
              <button className="text-[#0C2233] cursor-pointer text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-bold mt-9 p-3 sm:p-4 bg-[#ceff2a] px-6 sm:px-8 rounded-[2px] transition-transform duration-500 tilt-zoom">
                Let's Talk
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pt-1">
          <div className="h-auto md:h-[39px] m-auto py-2 md:py-0 bg-[#CEFD94] rounded-[20px] flex justify-center items-center px-5 mt-19 text-sm font-semibold tracking-[1.5px] text-[#0C2233] whitespace-normal w-fit">
            OUR PROCESS
          </div>

          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#0c2233] text-center mt-2 px-4">
            Video marketing, but make it easy.
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal m-auto text-[#0c2233] text-center w-[90%] md:w-[80%] lg:w-[63%] mt-3">
            Video marketing can seem pretty intimidating. We make it easy to
            create and launch high-performing video content for ads, organic
            social, landing pages, and more.
          </p>

          <div className="w-[92.5%] h-auto pb-10 m-auto mt-20">
            {/* Block 1 */}
            <div className="w-full h-auto pb-20 VideoLine3 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-37">
              <div className="w-full lg:w-[50%] h-full lg:pr-10 pt-10 lg:pt-20 px-4 lg:px-0">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#FFFFFF] mt-2">
                  Performance Audit
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#FFFFFF] mt-2">
                  We’ll take the time to get to know your company and what has
                  or hasn’t worked for you.
                </p>
              </div>
              <div className="w-full lg:w-[50%] h-full pt-10 lg:pt-25 px-4 lg:pl-20">
                <img
                  src={VideoMar}
                  alt="VideoMar"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>

            {/* Block 2 */}
            <div className="w-full h-auto pb-25 flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20">
              <div className="w-full lg:w-[50%] h-full pt-10 lg:pt-31 px-4 lg:pl-20">
                <video
                  src={Video1}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full lg:w-[79%]"
                ></video>
              </div>
              <div className="w-full lg:w-[50%] h-full pt-10 lg:pt-26 px-4">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#0C2233] mt-2">
                  Video Marketing Strategy
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                  After a deep dive, we take our findings and create the best
                  strategy to tackle your goals through high-performing video
                  assets
                </p>
              </div>
            </div>

            {/* Block 3 */}
            <div className="w-full h-auto pb-20 VideoLine3 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-37">
              <div className="w-full lg:w-[50%] h-full lg:pr-10 pt-10 lg:pt-20 px-4 lg:px-0">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#FFFFFF] mt-2">
                  Video Production
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#FFFFFF] mt-2">
                  We won’t leave you in the dark. Our experts will provide
                  guidance on formatting and best practices to create great
                  video content.
                </p>
              </div>
              <div className="w-full lg:w-[50%] h-full pt-10 lg:pt-25 px-4 lg:pl-34">
                <img
                  src={VideoPro}
                  alt="VideoPro"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>

            {/* Block 4 */}
            <div className="w-full h-auto pb-25 flex flex-col-reverse lg:flex-row items-center px-6 lg:px-20">
              <div className="w-full lg:w-[50%] h-full pt-10 lg:pt-31 px-4 lg:pl-20">
                <video
                  src={Video2}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full lg:w-[79%]"
                ></video>
              </div>
              <div className="w-full lg:w-[50%] h-full pt-10 lg:pt-26 px-4">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#0C2233] mt-2">
                  Video Editing & Animation
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#0C2233] mt-2">
                  Our video designers will bring the vision to life through
                  strategic editing and animation choices to keep your
                  audience’s attention.
                </p>
              </div>
            </div>

            {/* Block 5 */}
            <div className="w-full h-auto pb-20 VideoLine3 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-37">
              <div className="w-full lg:w-[50%] h-full lg:pr-10 pt-10 lg:pt-20 px-4 lg:px-0">
                <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#FFFFFF] mt-2">
                  Video Optimization
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal text-[#FFFFFF] mt-2">
                  Prior to launch, the{" "}
                  <span className="font-semibold">SEO experts</span> at Tuff
                  optimize for Youtube, TikTok, and your website through things
                  like metadata and schema markups.
                </p>
              </div>
              <div className="w-full lg:w-[50%] h-full pt-10 lg:pt-25 px-4 lg:pl-34">
                <img
                  src={VideoProdu}
                  alt="VideoProdu"
                  loading="lazy"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full h-auto pb-10 pt-1">
          <h2 className="text-[28px] sm:text-[36px] md:text-[40px] lg:text-[44px] font-semibold text-[#0c2233] text-center mt-10 lg:mt-18 px-4">
            Quick wins and long-term growth. No mysterious secret sauce.
          </h2>

          <p className="text-[16px] sm:text-[18px] md:text-[20px] font-normal m-auto text-[#0c2233] text-center w-[95%] sm:w-[90%] md:w-[80%] lg:w-[60%] mt-3 px-4">
            We show our work. Hit your revenue goals alongside a team of growth
            marketing experts that’s transparent about strategy, execution, and
            reporting.
          </p>

          <div className="flex items-center justify-center pt-10 sm:pt-12 px-4 lg:px-78">
            <img
              src={VideoLast}
              alt="VideoLast"
              className="w-full max-w-[700px]"
            />
          </div>
        </div>
      </section>

      <FinalSection text={box}/>
      <section>
        <Footer />
      </section>
    </>
  );
}
