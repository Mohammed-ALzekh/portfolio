import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'contact', name: 'Contact' },
  ];

  // منع scroll عند فتح المينيو
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    document.body.style.overflowX = 'hidden'; // منع scroll أفقي دائمًا
  }, [isMenuOpen]);

  // تغيير الـ active section عند scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full z-[1000] transition-all duration-300 ${
        isScrolled
          ? 'bg-[#1B0042]/95 backdrop-blur-sm py-3 shadow-lg'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center relative z-[1001]">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold flex items-center group"
          onClick={() => handleNavClick('home')}
        >
          <span className={`transition-colors duration-300 ${isScrolled ? 'text-[#F46A0C]' : 'text-white'}`}>
            &#60;
          </span>
          <span
            className={`bg-gradient-to-r from-[#F46A0C] to-[#FF9D4C] bg-clip-text text-transparent mx-1 transition-all duration-300 group-hover:scale-105 ${
              isScrolled ? 'opacity-100' : 'opacity-90'
            }`}
          >
            MZ
          </span>
          <span className={`transition-colors duration-300 ${isScrolled ? 'text-[#F46A0C]' : 'text-white'}`}>
            /&#62;
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-lg font-medium transition-all duration-300 relative group/nav ${
                activeSection === item.id ? 'text-[#F46A0C]' : 'text-white hover:text-[#F46A0C]'
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-[#F46A0C] transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover/nav:w-full'
                }`}
              ></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col space-y-2 z-[1002]" // أعلى من كل شيء
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-white transition-opacity duration-300 ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-7 h-0.5 bg-white transition-transform duration-300 ${
              isMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto z-[998]' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-full max-w-xs bg-[#1B0042]/95 backdrop-blur-lg flex items-center justify-center transition-transform duration-500 z-[999] ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col items-center space-y-10 text-2xl relative z-[1000]">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors duration-300 py-3 relative group/mobilenav ${
                activeSection === item.id ? 'text-[#F46A0C]' : 'text-white hover:text-[#F46A0C]'
              }`}
              onClick={() => handleNavClick(item.id)}
            >
              {item.name}
              <span
                className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-[#F46A0C] transition-all duration-300 ${
                  activeSection === item.id ? 'w-4/5' : 'w-0 group-hover/mobilenav:w-4/5'
                }`}
              ></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
