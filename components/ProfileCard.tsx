import { useState } from 'react';
import { MapPin, Phone, Mail, Github, Twitter, Linkedin } from 'lucide-react';

const ProfileCard = () => {
  const [activeSection, setActiveSection] = useState('about');

  const userData = {
    name: "Eoin Traynor",
    jobTitle: "Senior Software Engineer",
    avatar: "/assets/profile.jpg",
    coverImage: "/assets/profile.jpg",
    about: "Passionate software engineer with expertise in full-stack development, cloud architecture, and modern web technologies. I love building scalable applications and solving complex problems with clean, efficient code.",
    location: "Berlin, Germany",
    phone: "0932023 32902",
    email: "eointraynor1@gmail.com",
    experience: [
      {
        year: "2017",
        title: "Application Developer",
        company: "VigiTrust",
        description: "Disrupt stumptown retro everyday carry unicorn."
      },
      {
        year: "2019",
        title: "Frontend Engineer",
        company: "VSware",
        description: "Developed new conversion funnels and disrupt."
      },
      {
        year: "2024",
        title: "Senior Software Engineer",
        company: "HubSpot",
        description: "Onboarding illustrations for App."
      },
      {
        year: "2025",
        title: "Senior Software Engineer",
        company: "CrowdStrike",
        description: "Responsible for the encompassing brand experience."
      }
    ],
    socialLinks: {
      github: "https://github.com/EoinTraynor",
      twitter: "https://x.com/EoinTraynor1",
      linkedin: "https://www.linkedin.com/in/eointraynor/"
    }
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'about':
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                ABOUT
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {userData.about}
              </p>
            </div>
            <div className="flex space-x-4 pt-4">
              <a
                href={userData.socialLinks.github}
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={16} />
              </a>
              <a
                href={userData.socialLinks.twitter}
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={16} />
              </a>
              <a
                href={userData.socialLinks.linkedin}
                className="p-2 bg-gray-100 dark:bg-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              WORK EXPERIENCE
            </h3>
            <div className="space-y-6">
              {userData.experience.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-600 last:border-l-0">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full border-2 border-white dark:border-gray-800"></div>
                  <div className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full inline-block mb-2 font-medium">
                    {exp.year}
                  </div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                    {exp.title} at <span className="text-blue-500">{exp.company}</span>
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );

      case 'contact':
        return (
          <div className="space-y-6">
            <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
              CONTACT
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                <MapPin className="text-blue-500 flex-shrink-0" size={18} />
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  Berlin, Germany
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                <Phone className="text-blue-500 flex-shrink-0" size={18} />
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {userData.phone}
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200">
                <Mail className="text-blue-500 flex-shrink-0" size={18} />
                <span className="text-gray-700 dark:text-gray-300 text-sm">
                  {userData.email}
                </span>
              </div>
              <button className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                WORK TOGETHER
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Header Section */}
      <div className="relative">
        {/* Cover Image */}
        <div
          className="h-32 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
          style={{
            backgroundImage: `url(${userData.coverImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/70 to-purple-600/70"></div>
        </div>

        {/* Avatar */}
        <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
          <div className="w-24 h-24 rounded-full border-4 border-white dark:border-gray-800 overflow-hidden shadow-xl">
            <img
              src={userData.avatar}
              alt="avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Profile Info */}
      <div className="pt-16 px-6 pb-4 text-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
          {userData.name}
        </h1>
        <h2 className="text-blue-500 font-medium text-sm uppercase tracking-wide mb-2">
          {userData.jobTitle}
        </h2>
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
          <MapPin size={14} />
          <span className="text-sm">{userData.location}</span>
        </div>
      </div>

      {/* Content Section */}
      <div className="px-6 pb-6">
        <div className="min-h-64">
          {renderContent()}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex border-t border-gray-200 dark:border-gray-700">
        {[
          { id: 'about', label: 'ABOUT' },
          { id: 'experience', label: 'EXPERIENCE' },
          { id: 'contact', label: 'CONTACT' }
        ].map((section) => (
          <button
            key={section.id}
            onClick={() => handleSectionChange(section.id)}
            className={`flex-1 py-4 px-2 text-xs font-semibold uppercase tracking-wide transition-all duration-200 ${
              activeSection === section.id
                ? 'bg-blue-500 text-white'
                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-800 dark:hover:text-gray-200'
            }`}
          >
            {section.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileCard;
