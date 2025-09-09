import { useEffect, useState } from "react";
import { FaReact, FaNodeJs, FaDatabase, FaPaintBrush } from "react-icons/fa";
import profileImg from "/profile.avif"; // حولها WebP/AVIF مضغوط

const Hero = () => {
  const fullName = "Mohammed Alzekh";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Typing effect
  useEffect(() => {
    let typingTimeout;
    if (index < fullName.length) {
      typingTimeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullName[index]);
        setIndex((prev) => prev + 1);
      }, 120);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, 4000);
    }
    return () => clearTimeout(typingTimeout);
  }, [index, fullName]);

  const icons = [FaReact, FaNodeJs, FaDatabase, FaPaintBrush];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-16 pb-20 bg-gradient-to-b from-[#1B0042] to-[#2D0065] text-white relative overflow-hidden"
    >
      {/* Few Floating Icons */}
      {icons.map((Icon, idx) => (
        <Icon
          key={idx}
          className="absolute text-[#0F0030]/30 animate-pulse"
          style={{
            top: `${15 + idx * 20}%`,
            left: `${20 + idx * 15}%`,
            fontSize: "2.5rem",
          }}
        />
      ))}

      <div className="container mx-auto px-4 md:px-6 flex flex-col-reverse md:flex-row items-center justify-between relative z-10">
        {/* Text */}
        <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span
              className="text-[#F46A0C] inline-block"
              style={{ minWidth: `${fullName.length}ch` }}
            >
              {displayedText}
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-[#D0B3FF]">
            Full Stack Developer
          </h2>
          <p className="mt-6 text-lg text-[#E5D6FF] max-w-lg mx-auto md:mx-0">
            I build modern, responsive, and user-friendly web applications —
            combining clean code with creative design.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <a
              href="#projects"
              className="bg-[#F46A0C] text-white font-medium py-3 px-6 rounded-lg hover:opacity-90 transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white font-medium py-3 px-6 rounded-lg hover:border-[#F46A0C] hover:text-[#F46A0C] transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-2/5 flex justify-center relative">
          <div
            className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.6)]"
          >
            <img
              src={profileImg}
              alt="Mohammed Alzekh"
              className="w-full h-full object-cover rounded-full"
              loading="eager" // مهم للـ LCP
              fetchpriority="high"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
