  
import React from 'react';
import { Mail, Linkedin, Phone } from 'lucide-react';

const ContactInfo = () => {
  return (
    <section id="contact-info" className="bg-gradient-to-b from-white to-black text-white relative py-[15px] md:py-[25px]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 px-3 py-1 bg-white text-black rounded-full text-sm font-medium">
            Get In Touch
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">
            Contact Us Today
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Have questions about our AI-powered sensor solutions? Reach out to our team and let's discuss how we can help bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto p-6">
  
 
  <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700 transform hover:scale-105 transition duration-300">
    <div className="flex flex-col items-center text-center">
      <img 
        src="public/lovable-uploads/222222222222222.jpg"
        alt="Atharva Chaudhari"
        className="w-40 h-40 rounded-full mb-4 object-cover"
      />
      <h3 className="text-2xl font-bold text-gray-900">Vedant Raut</h3>
      <p className="text-gray-600 mb-4">Founder and CEO</p>
      <div className="flex flex-col space-y-3">
        <a href="mailto:felix@wrlds.com" className="flex items-center text-gray-700 hover:text-blue-600">
          <Mail className="w-6 h-6 mr-2" />
          vedant@gmail.com
        </a>
        <a 
          href="https://www.linkedin.com/in/felixvonheland/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <Linkedin className="w-6 h-6 mr-2" />
          LinkedIn Profile
        </a>
      </div>
    </div>
  </div>

  {/* Ojas */}
  <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700 transform hover:scale-105 transition duration-300">
    <div className="flex flex-col items-center text-center">
      <img 
        src="public/lovable-uploads/09876.jpg"
        alt="Ojas Satdeve"
        className="w-40 h-40 rounded-full mb-4 object-cover"
      />http://localhost:8080/
      <h3 className="text-2xl font-bold text-gray-900">Ojas Satdeve</h3>
      <p className="text-gray-600 mb-4">Co-Founder</p>
      <div className="flex flex-col space-y-3">
        <a href="mailto:love@wrlds.com" className="flex items-center text-gray-700 hover:text-blue-600">
          <Mail className="w-6 h-6 mr-2" />
          ojassatdeve@gmail.com
        </a>
        <a 
          href="https://www.linkedin.com/in/love-anderberg-67549a174/" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <Linkedin className="w-6 h-6 mr-2" />
          LinkedIn Profile
        </a>
        <a href="tel:+46760149508" className="flex items-center text-gray-700 hover:text-blue-600">
          
        </a>
      </div>
    </div>
  </div>

  {/* Third Person Placeholder */}
  <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-700 transform hover:scale-105 transition duration-300">
    <div className="flex flex-col items-center text-center">
      <img 
        src="/public/lovable-uploads/atharva.jpeg.jpg"
        alt="Third Member"
        className="w-40 h-40 rounded-full mb-4 object-cover"
      />
      <h3 className="text-2xl font-bold text-gray-900">Atharva Chaudhari</h3>
      <p className="text-gray-600 mb-4">Developer</p>
      <div className="flex flex-col space-y-3">
        <a href="mailto:email@example.com" className="flex items-center text-gray-700 hover:text-blue-600">
          <Mail className="w-6 h-6 mr-2" />
        atharva@gmail.com
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-gray-700 hover:text-blue-600"
        >
          <Linkedin className="w-6 h-6 mr-2" />
          LinkedIn Profile
        </a>
      </div>
    </div>
  </div>

</div>
      </div>
    </section>
  );
};

export default ContactInfo;
