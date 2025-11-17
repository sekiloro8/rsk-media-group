import { useState, useEffect } from "react";
import brandConsultation from "@/assets/brand-consultation.jpg";

const AnimatedCityBackground = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const billboardAds = [
    "YOUR BRAND HERE",
    "MEDIA EXCELLENCE",
    "CREATIVE SOLUTIONS",
    "DIGITAL MARKETING",
    "R-SK MEDIA GROUP"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % billboardAds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img 
        src={brandConsultation} 
        alt="City background" 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/60"></div>
      
      {/* Moving Cars */}
      <div className="absolute bottom-[20%] left-0 w-full h-4 opacity-70">
        <div className="car car-1"></div>
        <div className="car car-2"></div>
        <div className="car car-3"></div>
      </div>
      
      {/* Billboard 1 - Top Left */}
      <div className="absolute top-[15%] left-[10%] w-32 h-20 bg-primary/90 backdrop-blur-sm rounded flex items-center justify-center animate-pulse shadow-glow">
        <span className="text-primary-foreground font-bold text-xs text-center px-2 transition-all duration-500">
          {billboardAds[currentAd]}
        </span>
      </div>
      
      {/* Billboard 2 - Top Right */}
      <div className="absolute top-[25%] right-[15%] w-28 h-16 bg-accent/90 backdrop-blur-sm rounded flex items-center justify-center animate-pulse shadow-glow">
        <span className="text-accent-foreground font-bold text-xs text-center px-2 transition-all duration-500">
          {billboardAds[(currentAd + 2) % billboardAds.length]}
        </span>
      </div>
      
      {/* Billboard 3 - Middle */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-36 h-24 bg-secondary/90 backdrop-blur-sm rounded flex items-center justify-center animate-pulse shadow-glow">
        <span className="text-secondary-foreground font-bold text-sm text-center px-3 transition-all duration-500">
          {billboardAds[(currentAd + 4) % billboardAds.length]}
        </span>
      </div>
      
      {/* Animated Lights */}
      <div className="absolute inset-0">
        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-[50%] right-[25%] w-2 h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-[35%] left-[60%] w-2 h-2 bg-red-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <style>{`
        @keyframes car-move {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(calc(100vw + 100%));
          }
        }

        .car {
          position: absolute;
          width: 40px;
          height: 16px;
          background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
          border-radius: 4px;
          animation: car-move linear infinite;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.5);
        }

        .car::before {
          content: '';
          position: absolute;
          top: -6px;
          left: 8px;
          width: 20px;
          height: 10px;
          background: linear-gradient(90deg, #fee2e2 0%, #fecaca 100%);
          border-radius: 4px 4px 0 0;
        }

        .car-1 {
          bottom: 0;
          animation-duration: 8s;
        }

        .car-2 {
          bottom: 20px;
          animation-duration: 12s;
          animation-delay: 3s;
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          box-shadow: 0 2px 8px rgba(59, 130, 246, 0.5);
        }

        .car-2::before {
          background: linear-gradient(90deg, #dbeafe 0%, #bfdbfe 100%);
        }

        .car-3 {
          bottom: 40px;
          animation-duration: 15s;
          animation-delay: 6s;
          background: linear-gradient(90deg, #10b981 0%, #059669 100%);
          box-shadow: 0 2px 8px rgba(16, 185, 129, 0.5);
        }

        .car-3::before {
          background: linear-gradient(90deg, #d1fae5 0%, #a7f3d0 100%);
        }
      `}</style>
    </div>
  );
};

export default AnimatedCityBackground;
