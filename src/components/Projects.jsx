import { FaRocket, FaHome, FaCar } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      id: 1,
      icon: <FaRocket className="text-white text-2xl" />,
      title: "Real-Time Chat Application",
      description:
        "A collaborative project delivering seamless two-way communication with a modern, user-friendly chat interface.",
      details: [
        "Implemented an intuitive chat UI with real-time messaging using WebSocket.",
        "Designed user profiles, contact lists, and smooth interaction flows.",
        "Focused on engaging UI/UX to keep conversations simple and enjoyable."
      ],
      role: "Frontend Developer (UI/UX & Chat Interface)",
      techStack: ["React", "Node.js", "Express.js", "WebSocket", "Figma"]
    },
    {
      id: 2,
      icon: <FaHome className="text-white text-2xl" />,
      title: "Real Estate Platform",
      description:
        "A full-stack application for property selling and renting tailored to the Syrian market.",
      details: [
        "Developed a seller dashboard with full CRUD functionality for property listings.",
        "Built interactive components to improve user engagement and browsing experience.",
        "Delivered a professional UI combined with a robust backend system."
      ],
      role: "Full Stack Developer (Backend & Dashboard)",
      techStack: [
        "React.js",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose"
      ]
    },
    {
      id: 3,
      icon: <FaCar className="text-white text-2xl" />,
      title: "TAWSILA – Ride-Sharing Platform",
      description:
        "A 24-hour hackathon challenge to deliver a functional ride-sharing MVP for students.",
      details: [
        "Designed and built a responsive landing page with a student-focused interface.",
        "Adopted a mobile-first approach using Tailwind CSS for accessibility.",
        "Showcased creativity, adaptability, and teamwork under strict time limits."
      ],
      role: "Frontend Developer (Landing Page & UI)",
      techStack: ["React.js", "Tailwind CSS"]
    }
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-b from-[#1B0042] to-[#2D0065] text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#F46A0C]">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-[#F46A0C] mx-auto"></div>
          <p className="mt-6 text-lg text-[#E5D6FF] max-w-2xl mx-auto">
            Here are some of the projects I’ve worked on. Each project highlights
            different challenges and showcases my skills in design, development,
            and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1B0042]/70 backdrop-blur-sm rounded-xl overflow-hidden border border-[#F46A0C]/20 hover:border-[#F46A0C]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#F46A0C]/10"
            data-aos="fade-up"
            >
              {/* Project Header */}
              <div className="p-6 bg-gradient-to-r from-[#2D0065] to-[#1B0042] text-white">
                <div className="flex items-center gap-4">
                  <span>{project.icon}</span>
                  <h3 className="text-xl font-bold">{project.title}</h3>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-[#E5D6FF] mb-4">{project.description}</p>

                <ul className="mb-5 space-y-2">
                  {project.details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-[#F46A0C] mr-2">•</span>
                      <span className="text-[#D0B3FF]">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="mb-5">
                  <h4 className="text-[#F46A0C] font-medium mb-2">My Role:</h4>
                  <p className="text-[#E5D6FF]">{project.role}</p>
                </div>

                <div>
                  <h4 className="text-[#F46A0C] font-medium mb-2">
                    Tech Stack:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-[#F46A0C]/20 text-[#F46A0C] border border-[#F46A0C]/30 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Footer */}
              <div className="px-6 py-4 bg-[#1B0042]/50 border-t border-[#F46A0C]/10">
                <button className="w-full py-2 bg-[#F46A0C] hover:bg-[#D45A0A] text-white font-medium rounded-lg transition-colors duration-300">
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#E5D6FF] mb-6">
            Interested in seeing more of my work or discussing a project?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-[#F46A0C] hover:bg-[#D45A0A] text-white font-medium rounded-lg transition-colors duration-300"
          >
            Get In Touch
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
