import { useState, useEffect, useRef } from "react";
import { clientReviews } from "../constants";

const TestimonialCard = ({ item }) => (
  <div className="flex-shrink-0 w-[340px] sm:w-[380px] md:w-[420px] mx-3 sm:mx-4 perspective-1000">
    <div
      className="group relative bg-gradient-to-br from-gray-900 via-gray-900 to-black border border-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all duration-500 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 h-full overflow-hidden"
      style={{
        transformStyle: "preserve-3d",
        transition:
          "transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.5s ease, border 0.5s ease",
      }}
      onMouseEnter={(e) => {
        if (window.innerWidth >= 768) {
          e.currentTarget.style.transform =
            "translateY(-12px) rotateX(8deg) rotateY(8deg) scale(1.02)";
        }
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform =
          "translateY(0) rotateX(0) rotateY(0) scale(1)";
      }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10"></div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Quote icon */}
        <div className="mb-3 sm:mb-4 opacity-30">
          <svg
            className="w-8 h-8 sm:w-10 sm:h-10 text-blue-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Review Text */}
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8 min-h-[100px] sm:min-h-[120px] font-light">
          {item.review}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-4 sm:mb-6"></div>

        {/* Footer with User Info and Stars */}
        <div className="flex items-end justify-between flex-wrap gap-3">
          {/* User Info */}
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <img
                src={item.img}
                alt={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gray-700 group-hover:border-blue-500 transition-all duration-300"
              />
              {/* Online indicator */}
              <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-500 rounded-full border-2 border-gray-900"></div>
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <p className="text-white font-semibold text-base sm:text-lg">
                  {item.name}
                </p>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm font-medium">
                {item.position}
              </p>
            </div>
          </div>

          {/* Star Rating */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 drop-shadow-lg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-bl from-blue-500/10 to-transparent rounded-2xl sm:rounded-3xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-2xl sm:rounded-3xl"></div>
    </div>
  </div>
);

const Clients = () => {
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);
  const animationRef = useRef(null);

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [
    ...clientReviews,
    ...clientReviews,
    ...clientReviews,
  ];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 0.8; // pixels per frame

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;

        // Reset position for seamless loop
        const maxScroll = scrollContainer.scrollWidth / 3;
        if (scrollPosition >= maxScroll) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused]);

  return (
    <section
      className="c-space my-12 sm:my-20 bg-black py-16 sm:py-24"
      id="clients"
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-4">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent px-4">
            Hear from My Clients
          </h3>
          <p className="text-gray-400 text-base sm:text-lg px-4">
            Real stories from real people
          </p>
        </div>

        {/* Scrolling Container */}
        <div
          className="relative overflow-hidden py-6 sm:py-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden"
            style={{ scrollBehavior: "auto" }}
          >
            {duplicatedReviews.map((item, index) => (
              <TestimonialCard key={`${item.id}-${index}`} item={item} />
            ))}
          </div>

          {/* Enhanced fade overlays - hidden on mobile */}
          <div className="hidden sm:block absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-black via-black/80 to-transparent pointer-events-none z-10" />
          <div className="hidden sm:block absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-black via-black/80 to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
