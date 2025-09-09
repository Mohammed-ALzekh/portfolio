import profileImg from "/profile.avif"; // نفس الصورة اللي استخدمناها بالـ Hero

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#2D0065] to-[#1B0042] text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* عنوان القسم */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-[#F46A0C]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#F46A0C] mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* الصورة */}
          <div className="lg:w-2/5 flex justify-center relative" data-aos="fade-right">
            <div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg"
              style={{
                boxShadow:
                  "0 0 15px rgba(255,255,255,0.8), 0 0 30px rgba(255,255,255,0.6), 0 0 45px rgba(255,255,255,0.4)",
              }}
            >
              <img
                src={profileImg}
                alt="Mohammed Alzekh"
                className="w-full h-full object-cover rounded-full"
                loading="lazy"
              />
            </div>
          </div>

          {/* المحتوى النصي */}
          <div className="lg:w-3/5 text-center lg:text-left" data-aos="fade-left">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Hi, I'm <span className="text-[#F46A0C]">Mohammed Khaled Alzekh</span>, a Full Stack Developer passionate about creating modern, responsive, and user-friendly web applications.
            </h3>

            <div className="space-y-4 text-lg text-[#E5D6FF]">
              <p>
                I specialize in building scalable web solutions using modern technologies, with a strong focus on <span className="text-[#F46A0C] font-medium">frontend design, UI/UX, and clean code</span>. I aim to craft digital experiences that are both functional and visually engaging.
              </p>

              <p>
                I enjoy continuous learning and staying up-to-date with the latest web development trends, which helps me deliver innovative and efficient solutions.
              </p>

              <p>
                Outside of coding, I explore <span className="text-[#F46A0C] font-medium">graphic design, Arabic calligraphy, and creative arts</span>, which inspire my approach to design and development.
              </p>
            </div>

            {/* المهارات */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3">
              {['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'UI/UX', 'Responsive Design'].map((skill) => (
                <span 
                  key={skill} 
                  className="px-4 py-2 bg-[#F46A0C]/20 text-[#F46A0C] border border-[#F46A0C]/30 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
