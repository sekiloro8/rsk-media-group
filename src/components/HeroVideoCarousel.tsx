import { useState, useEffect, useRef } from "react";
import heroVideo from "@/assets/hero-video.webm";
import africanCityscape from "@/assets/african-cityscape.mp4";
import heroImage from "@/assets/hero-bg.jpg";

const videos = [
  { src: heroVideo, type: "video/webm" },
  { src: africanCityscape, type: "video/mp4" },
];

const HeroVideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % videos.length);
        setIsTransitioning(false);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <>
      {videos.map((video, index) => (
        <video
          key={index}
          ref={(el) => (videoRefs.current[index] = el)}
          autoPlay={index === 0}
          muted
          loop
          playsInline
          preload="auto"
          poster={heroImage}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ${
            index === currentIndex && !isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={video.src} type={video.type} />
        </video>
      ))}
      
      {/* Video indicators - only show if more than one video */}
      {videos.length > 1 && (
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setIsTransitioning(true);
                setTimeout(() => {
                  setCurrentIndex(index);
                  setIsTransitioning(false);
                }, 300);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-white w-6"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to video ${index + 1}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default HeroVideoCarousel;
