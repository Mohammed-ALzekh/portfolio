import { useState } from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaLinkedin, 
  FaGithub 
} from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const contactMethods = [
    {
      icon: <FaMapMarkerAlt className="text-[#F46A0C]" />,
      title: 'Location',
      value: 'Damascus, Syria',
      link: null
    },
    {
      icon: <FaEnvelope className="text-[#F46A0C]" />,
      title: 'Email',
      value: 'mohammedalzekh@gmail.com',
      link: 'mailto:mohammedalzekh@gmail.com'
    },
    {
      icon: <FaPhoneAlt className="text-[#F46A0C]" />,
      title: 'Phone',
      value: '+963 991 021 377',
      link: 'tel:+963991021377'
    },
    {
      icon: <FaLinkedin className="text-[#F46A0C]" />,
      title: 'LinkedIn',
      value: 'linkedin.com/in/mohammedalzekh',
      link: 'https://linkedin.com/in/mohammedalzekh',
      external: true
    },
    {
      icon: <FaGithub className="text-[#F46A0C]" />,
      title: 'GitHub',
      value: 'github.com/Mohammed-Alzekh',
      link: 'https://github.com/Mohammed-Alzekh',
      external: true
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#1B0042] to-[#2D0065] text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Contact <span className="text-[#F46A0C]">Me</span>
          </h2>
          <div className="w-20 h-1 bg-[#F46A0C] mx-auto"></div>
          <p className="mt-6 text-lg text-[#E5D6FF] max-w-2xl mx-auto">
            I'm always open to new opportunities, collaborations, or just a friendly chat.
            Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* معلومات التواصل */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#F46A0C]">Get in Touch</h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-2xl mr-4 mt-1">{method.icon}</span>
                  <div>
                    <h4 className="font-semibold text-[#E5D6FF]">{method.title}</h4>
                    {method.link ? (
                      <a 
                        href={method.link} 
                        target={method.external ? "_blank" : "_self"}
                        rel={method.external ? "noopener noreferrer" : ""}
                        className="text-[#D0B3FF] hover:text-[#F46A0C] transition-colors duration-300"
                      >
                        {method.value}
                      </a>
                    ) : (
                      <p className="text-[#D0B3FF]">{method.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* وسائل التواصل الاجتماعي */}
            <div className="mt-10">
              <h4 className="font-semibold text-[#E5D6FF] mb-4">Follow me on</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com/in/mohammedalzekh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#F46A0C]/20 border border-[#F46A0C]/30 rounded-full flex items-center justify-center text-[#F46A0C] hover:bg-[#F46A0C] hover:text-white transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://github.com/Mohammed-Alzekh" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#F46A0C]/20 border border-[#F46A0C]/30 rounded-full flex items-center justify-center text-[#F46A0C] hover:bg-[#F46A0C] hover:text-white transition-all duration-300"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-[#F46A0C]">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#E5D6FF] mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1B0042]/50 border border-[#F46A0C]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46A0C] focus:border-transparent text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#E5D6FF] mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[#1B0042]/50 border border-[#F46A0C]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46A0C] focus:border-transparent text-white"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-[#E5D6FF] mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#1B0042]/50 border border-[#F46A0C]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46A0C] focus:border-transparent text-white"
                  placeholder="What is this regarding?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-[#E5D6FF] mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-[#1B0042]/50 border border-[#F46A0C]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F46A0C] focus:border-transparent text-white"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-[#F46A0C] hover:bg-[#D45A0A] text-white font-medium rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
