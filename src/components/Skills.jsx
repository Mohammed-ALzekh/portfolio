import { useState, useEffect, useRef } from 'react';
import { 
  FaCode, FaPaintBrush, FaServer, FaDatabase, FaTools, FaClipboardList,
  FaHandshake, FaGlobe, FaStar, FaJs, FaHtml5, FaCss3Alt, FaReact, FaFigma, FaNodeJs, FaGitAlt
} from 'react-icons/fa';

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [animatedLevels, setAnimatedLevels] = useState({});
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Technical skills data
  const technicalSkills = [
    {
      category: "Programming Languages",
      skills: [
        { name: "JavaScript (ES6+)", icon: <FaJs className="text-yellow-400" /> },
        { name: "C#", icon: <FaCode className="text-purple-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> }
      ],
      icon: <FaCode className="text-blue-400" />,
      type: "technical"
    },
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", icon: <FaReact className="text-blue-400" /> },
        { name: "Tailwind CSS", icon: <FaCss3Alt className="text-cyan-400" /> },
        { name: "Responsive Web Design", icon: <FaPaintBrush className="text-pink-400" /> },
        { name: "UI/UX (Figma)", icon: <FaFigma className="text-purple-400" /> }
      ],
      icon: <FaPaintBrush className="text-pink-400" />,
      type: "frontend"
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
        { name: "Express.js", icon: <FaServer className="text-gray-400" /> },
        { name: "RESTful APIs", icon: <FaCode className="text-blue-300" /> }
      ],
      icon: <FaServer className="text-green-400" />,
      type: "backend"
    },
    {
      category: "Databases",
      skills: [
        { name: "MongoDB", icon: <FaDatabase className="text-green-500" /> },
        { name: "Mongoose", icon: <FaDatabase className="text-red-400" /> },
        { name: "SQL (Oracle)", icon: <FaDatabase className="text-blue-600" /> }
      ],
      icon: <FaDatabase className="text-yellow-400" />,
      type: "database"
    },
    {
      category: "Tools & Platforms",
      skills: [
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Postman", icon: <FaTools className="text-orange-400" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-500" /> },
        { name: "Cursor", icon: <FaTools className="text-purple-400" /> }
      ],
      icon: <FaTools className="text-gray-400" />,
      type: "tools"
    }
  ];

  // Soft skills
  const softSkills = [
    { skill: "Team Collaboration", level: 90, icon: <FaHandshake className="text-blue-400" /> },
    { skill: "Communication", level: 85, icon: <FaHandshake className="text-green-400" /> },
    { skill: "Problem-Solving", level: 95, icon: <FaCode className="text-red-400" /> },
    { skill: "Time Management", level: 88, icon: <FaClipboardList className="text-yellow-400" /> },
    { skill: "Fast Learning", level: 92, icon: <FaStar className="text-purple-400" /> },
    { skill: "Attention to Detail", level: 93, icon: <FaStar className="text-pink-400" /> }
  ];

  // Languages
  const languages = [
    { language: "Arabic", level: "Native", proficiency: 100, icon: <FaGlobe className="text-green-500" /> },
    { language: "English", level: "Intermediate", proficiency: 70, icon: <FaGlobe className="text-blue-400" /> }
  ];

  // Filters
  const filters = [
    { id: 'all', label: 'All Skills', icon: <FaStar className="text-yellow-400" /> },
    { id: 'frontend', label: 'Frontend', icon: <FaPaintBrush className="text-pink-400" /> },
    { id: 'backend', label: 'Backend', icon: <FaServer className="text-green-400" /> },
    { id: 'database', label: 'Database', icon: <FaDatabase className="text-yellow-400" /> },
    { id: 'tools', label: 'Tools', icon: <FaTools className="text-gray-400" /> },
    { id: 'soft', label: 'Soft Skills', icon: <FaHandshake className="text-blue-400" /> }
  ];

  // Filtered technical skills
  const filteredTechnicalSkills = technicalSkills.filter(skill => activeFilter === 'all' || skill.type === activeFilter);
  const showSoftSkills = activeFilter === 'all' || activeFilter === 'soft';
  const showLanguages = activeFilter === 'all';

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !hasAnimated) {
            const newLevels = {};
            softSkills.forEach(skill => newLevels[skill.skill] = skill.level);
            languages.forEach(lang => newLevels[lang.language] = lang.proficiency);
            setAnimatedLevels(newLevels);
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, [softSkills, languages, hasAnimated]);

  return (
    <section ref={sectionRef} id="skills" className="py-20 bg-gradient-to-b from-[#2D0065] to-[#1B0042] text-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-[#F46A0C]">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-[#F46A0C] mx-auto"></div>
          <p className="mt-6 text-lg text-[#E5D6FF] max-w-2xl mx-auto">
            Explore my technical expertise, soft skills, and language proficiency through interactive filtering.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-all duration-500 transform hover:scale-105 ${
                activeFilter === filter.id
                  ? 'bg-[#F46A0C] text-white shadow-lg shadow-[#F46A0C]/40'
                  : 'bg-[#1B0042]/50 text-[#E5D6FF] hover:bg-[#F46A0C]/30 border border-[#F46A0C]/20 hover:border-[#F46A0C]/40'
              }`}
            >
              <span className="mr-2 text-lg">{filter.icon}</span>
              {filter.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <span className="text-3xl mr-3 text-[#F46A0C]">💻</span>
              {activeFilter === 'all' ? 'Technical Skills' : filters.find(f => f.id === activeFilter)?.label}
            </h3>
            <div className="space-y-6">
              {filteredTechnicalSkills.map((category, index) => (
                <div key={index} className="bg-[#1B0042]/50 p-5 rounded-xl border border-[#F46A0C]/20 transition-all duration-500 hover:border-[#F46A0C]/50 hover:shadow-lg hover:shadow-[#F46A0C]/10 transform hover:-translate-y-1">
                  <h4 className="text-lg font-semibold text-[#F46A0C] mb-3 flex items-center">
                    <span className="mr-2 text-xl">{category.icon}</span>
                    {category.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, i) => (
                      <span key={i} className="flex items-center px-4 py-2 bg-[#1B0042] text-[#E5D6FF] border border-[#F46A0C]/30 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#F46A0C] hover:text-white hover:border-[#F46A0C] hover:scale-105">
                        <span className="mr-2 text-base">{skill.icon}</span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
              {filteredTechnicalSkills.length === 0 && (
                <div className="text-center py-10">
                  <span className="text-5xl text-[#F46A0C]">🔍</span>
                  <p className="text-[#E5D6FF] mt-4">No skills found for this category</p>
                </div>
              )}
            </div>
          </div>

          {/* Soft Skills & Languages */}
          <div className="space-y-12">
            {/* Soft Skills */}
            {showSoftSkills && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="text-3xl mr-3 text-[#F46A0C]">🤝</span>
                  Soft Skills
                </h3>
                <div className="space-y-5">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="transition-all duration-500 hover:scale-[1.02]">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <span className="mr-2 text-lg text-[#F46A0C]">{skill.icon}</span>
                          <span className="text-[#E5D6FF] font-medium">{skill.skill}</span>
                        </div>
                        <span className="text-[#F46A0C]">{animatedLevels[skill.skill] || 0}%</span>
                      </div>
                      <div className="h-2 bg-[#1B0042] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#F46A0C] to-[#FF8C39] rounded-full transition-all duration-2000 ease-out"
                             style={{ width: `${animatedLevels[skill.skill] || 0}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            {showLanguages && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="text-3xl mr-3 text-[#F46A0C]">🌐</span>
                  Languages
                </h3>
                <div className="space-y-5">
                  {languages.map((lang, index) => (
                    <div key={index} className="transition-all duration-500 hover:scale-[1.02]">
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center">
                          <span className="mr-2 text-lg text-[#F46A0C]">{lang.icon}</span>
                          <span className="text-[#E5D6FF] font-medium">{lang.language}</span>
                        </div>
                        <span className="text-[#F46A0C]">{lang.level}</span>
                      </div>
                      <div className="h-2 bg-[#1B0042] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#8E44AD] to-[#6C3483] rounded-full transition-all duration-2000 ease-out"
                             style={{ width: `${animatedLevels[lang.language] || 0}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
