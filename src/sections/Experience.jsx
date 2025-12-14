import { useState } from "react";

// Mock data - replace with your experiences import
const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "GNCIPL",
    icon: "https://api.dicebear.com/7.x/shapes/svg?seed=startup",
    iconBg: "#8b5cf6",
    date: "Aug 2025 - Oct 2025",
    points: [
      "Developed and maintained web applications using React, Node.js, and MongoDB",
      "Designed and implemented RESTful APIs and microservices architecture",
      "Integrated third-party services and payment gateways",
      "Improved application performance by 40% through optimization techniques",
    ],
  },
  // {
  //   title: "Frontend Developer",
  //   company_name: "Digital Agency",
  //   icon: "https://api.dicebear.com/7.x/shapes/svg?seed=agency",
  //   iconBg: "#ec4899",
  //   date: "Jun 2020 - Dec 2021",
  //   points: [
  //     "Built responsive websites and landing pages for various clients",
  //     "Worked with design team to implement pixel-perfect interfaces",
  //     "Optimized website performance and SEO rankings",
  //     "Managed version control using Git and collaborated via GitHub",
  //   ],
  // },
];

const ExperienceCard = ({ experience, index, isActive, setActive }) => {
  const isLeft = index % 2 === 0;

  return (
    <div
      className={`flex ${
        isLeft ? "justify-start" : "justify-end md:justify-end"
      } mb-6 md:mb-8 w-full`}
    >
      <div
        className={`flex items-center w-full ${
          isLeft ? "flex-row" : "flex-row-reverse md:flex-row-reverse"
        }`}
      >
        {/* Card */}
        <div
          onClick={() => setActive(isActive === index ? null : index)}
          className={`group relative w-full md:w-5/12 bg-gradient-to-br from-gray-900 via-gray-900 to-black border-2 ${
            isActive === index ? "border-blue-500" : "border-gray-800"
          } rounded-xl md:rounded-2xl p-4 md:p-6 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20`}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Glow effect */}
          <div
            className={`absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-xl md:rounded-2xl opacity-0 ${
              isActive === index ? "opacity-20" : "group-hover:opacity-10"
            } blur-xl transition-opacity duration-500`}
          ></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Header */}
            <div className="flex items-start justify-between mb-3 md:mb-4">
              <div className="flex-1">
                <h3 className="text-white text-lg md:text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {experience.title}
                </h3>
                <p className="text-gray-400 text-sm md:text-base font-semibold flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
                  {experience.company_name}
                </p>
              </div>

              {/* Icon on mobile */}
              <div className="md:hidden ml-3">
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-gray-800 shadow-xl overflow-hidden flex-shrink-0"
                  style={{ background: experience.iconBg }}
                >
                  <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="w-7 h-7 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Date */}
            <div className="flex items-center gap-2 mb-3 md:mb-4 text-xs md:text-sm">
              <svg
                className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-purple-400 font-medium">
                {experience.date}
              </span>
            </div>

            {/* Points */}
            <div
              className={`space-y-2 md:space-y-3 overflow-hidden transition-all duration-500 ${
                isActive === index
                  ? "max-h-96 opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {experience.points.map((point, i) => (
                <div
                  key={i}
                  className="flex items-start gap-2 md:gap-3 text-gray-300 text-xs md:text-sm"
                  style={{
                    transitionDelay: `${i * 50}ms`,
                  }}
                >
                  <span className="inline-block w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 md:mt-2 flex-shrink-0"></span>
                  <span>{point}</span>
                </div>
              ))}
            </div>

            {/* Expand indicator */}
            <div className="mt-3 md:mt-4 flex items-center gap-2 text-xs text-gray-500 group-hover:text-blue-400 transition-colors">
              <span>
                {isActive === index ? "Click to collapse" : "Click to expand"}
              </span>
              <svg
                className={`w-3.5 h-3.5 md:w-4 md:h-4 transform transition-transform duration-300 ${
                  isActive === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Corner decoration */}
          <div className="absolute top-0 right-0 w-16 h-16 md:w-20 md:h-20 bg-gradient-to-bl from-blue-500/20 to-transparent rounded-xl md:rounded-2xl pointer-events-none"></div>
        </div>

        {/* Timeline center icon - desktop only */}
        <div className="hidden md:flex relative items-center justify-center mx-6 lg:mx-8 z-10">
          <div className="relative">
            {/* Pulsing ring */}
            <div
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: experience.iconBg,
                animationDuration: "2s",
              }}
            ></div>

            {/* Icon container */}
            <div
              className="relative w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center border-4 border-gray-900 shadow-xl overflow-hidden transition-transform hover:scale-110 hover:rotate-12"
              style={{ background: experience.iconBg }}
            >
              <img
                src={experience.icon}
                alt={experience.company_name}
                className="w-8 h-8 lg:w-10 lg:h-10 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Empty space for alternating layout - desktop only */}
        <div className="hidden md:block w-5/12"></div>
      </div>
    </div>
  );
};

const Experience = () => {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative bg-black py-12 md:py-20 px-4 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 md:w-96 md:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 md:w-96 md:h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12 md:mb-20">
          <p className="text-gray-400 text-sm md:text-lg mb-2 uppercase tracking-wider">
            My Journey
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-3 md:mb-4 px-4">
            Work Experience
          </h2>
          <div className="w-20 h-1 md:w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Timeline line - desktop only */}
        <div className="hidden md:block absolute left-1/2 top-48 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 transform -translate-x-1/2"></div>

        {/* Timeline line - mobile (left side) */}
        <div className="md:hidden absolute left-6 top-32 bottom-16 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30"></div>

        {/* Experience cards */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={index}
              experience={experience}
              index={index}
              isActive={activeCard}
              setActive={setActiveCard}
            />
          ))}
        </div>

        {/* Bottom decoration */}
        <div className="mt-8 md:mt-12 flex justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center shadow-2xl shadow-blue-500/50">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
