"use client";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import VantaBirdsBackground from "./VantaBirdsBackground";

const reviews = [
  { image: "/images/8.png", name: "Samarth Assisted Living", text: "The brand film created by Chalksnboard captured the essence of our facility beautifully. It's now the face of our digital outreach—emotional, authentic, and professional." },
  { image: "/images/9.png", name: "G.D. Goenka Public School, Patna", text: "Chalksnboard's team handled our shoot with precision and creativity. The brand film is now a central piece in our marketing—it speaks volumes to both parents and students." },
  { image: "/images/10.png", name: "Swiss Cottage School", text: "Chalksnboard delivered on every front—brilliant video storytelling, lead generation that works, engaging social content, and dedicated tele-counsellors who followed up with care." },
  { image: "/images/11.png", name: "Jay Kay Public School", text: "Their lead generation campaigns brought us closer to our enrollment targets with minimal effort from our end. Truly a hands-off yet high-return experience!" },
  { image: "/images/13.png", name: "FirstCry Intellitots Preschool & Daycare - Govind Puri, Gwalior", text: "Chalksnboard's lead generation boosted our preschool admissions significantly. The inquiries were high-quality and well-targeted. Their approach was smart, efficient, and results-driven." },
  { image: "/images/14.png", name: "Delhi Public School,Kurukshetra", text: "Every service Chalksnboard offers complemented the other perfectly—from a professional brand film to strong digital engagement and high-quality tele-counselling. We've renewed for another year!" },
  { image: "/images/15.png", name: "Delhi Public World School", text: "We saw consistent, high-quality leads from day one. Chalksnboard's campaign was data-driven, targeted, and delivered measurable results.!" },
  { image: "/images/16.png", name: "Academic Height World School", text: "The digital makeover we received from Chalksnboard changed how parents perceive us. Their social content and branding are both polished and impactful, and the leads just keep coming." },
  { image: "/images/17.png", name: "Manav Bharati International School", text: "Chalksnboard helped us shine in a competitive market. Their storytelling, campaigns, and dedicated follow-ups added real value across our admission funnel." },
  { image: "/images/18.png", name: "Seth Mr. Jaipuria School, Greater Noida", text: "Chalksnboard brought our school's story to life through a stunning brand film, while their lead generation and social media efforts filled our admissions pipeline. Their tele-counselling team handled parent queries with such grace—it felt like an extension of our own staff" },
  { image: "/images/19.png", name: "Flower Valley International School", text: "We were struggling to reach the right parents until Chalksnboard stepped in. Their lead generation campaign brought in genuine inquiries that converted quickly. Highly efficient and insightful!" },
  { image: "/images/20.png", name: "Birla Open Minds International School,BKT Campus", text: "From the visual storytelling in our brand film to the steady stream of qualified leads, Chalksnboard proved they truly understand schools. Their tele-counsellors made a personal connection with every parent" },
  { image: "/images/21.png", name: "Stanfort School", text: "Thanks to Chalksnboard, our visibility among parents improved drastically. Their lead generation services gave us a steady pipeline throughout the admission season." },
  { image: "/images/22.png", name: "The Shri Ram Wonder Years, Karol Bagh", text: "Chalksnboard built a powerful digital presence for us—from a compelling brand film to impactful lead campaigns. Their tele-counselling services turned cold leads into warm conversations." },
  { image: "/images/23.png", name: "Seven Hills, Etawah", text: "With Chalksnboard's lead generation and admissions support, we filled more seats this year than ever before. Their process is smart, fast, and extremely reliable." },
  { image: "/images/24.png", name: "Kaushik Public School, Haridwar", text: "Chalksnboard helped us tap into our local audience effectively. We've seen a noticeable improvement in inquiry quality and admissions conversion." },
];

const ReviewSection = () => {
  const controls = useAnimation();
  const carouselRef = useRef(null);

  useEffect(() => {
    const totalWidth = carouselRef.current.scrollWidth / 2;
    const animate = async () => {
      await controls.start({
        x: -totalWidth,
        transition: { duration: 120, ease: "linear" },
      });
      controls.set({ x: 0 });
      animate();
    };
    animate();
  }, [controls]);

  return (
    <section className="relative min-h-[80vh] bg-gradient-to-br from-slate-800 to-slate-900 py-16 overflow-hidden">
      {/* Vanta Birds Animated Background */}
      <VantaBirdsBackground />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our <span className="text-red-500">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full"></div>
        </div>

        <div className="w-full max-w-7xl mx-auto overflow-hidden">
          <motion.div className="flex" ref={carouselRef} animate={controls}>
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={idx}
                className="w-[320px] flex-shrink-0 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-6 mx-3 flex flex-col items-center border border-white/20 hover:border-red-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Image
                      src={review.image}
                      alt={review.name || "Review"}
                      width={120}
                      height={120}
                      className="rounded-full object-cover border-2 border-red-500/30"
                    />
                   
                  </div>
                </div>

                {/* Name section with min height */}
                <div className="min-h-[3rem] mb-4 flex items-center justify-center text-center px-2">
                  <h3 className="text-lg font-semibold text-white break-words leading-tight">
                    {review.name || "\u00A0"}
                  </h3>
                </div>

                {/* Text section grows naturally */}
                <div className="text-gray-300 text-sm sm:text-base text-left leading-relaxed">
                  <p className="italic">"{review.text}"</p>
                </div>

                {/* Star rating */}
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-red-500 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ReviewSection; 