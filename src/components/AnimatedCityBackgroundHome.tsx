import { useState, useEffect } from "react";

const AnimatedCityBackgroundHome = () => {
  const [currentAd, setCurrentAd] = useState(0);
  
  const billboardAds = [
    "R-SK MEDIA",
    "BEST AGENCY",
    "YOUR SUCCESS",
    "DIGITAL FUTURE",
    "CREATIVE MINDS"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAd((prev) => (prev + 1) % billboardAds.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden opacity-30">
      {/* City silhouette effect */}
      <div className="absolute bottom-0 left-0 right-0 h-3/4 bg-gradient-to-t from-black/60 to-transparent"></div>
      
      {/* Moving Cars - Multiple Lanes */}
      <div className="absolute bottom-[15%] left-0 w-full">
        <div className="car car-1"></div>
        <div className="car car-2"></div>
        <div className="car car-3"></div>
        <div className="car car-4"></div>
        <div className="car car-5"></div>
      </div>
      
      {/* Animated Billboards */}
      <div className="absolute top-[20%] left-[15%] w-40 h-24 bg-primary/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-glow animate-pulse border-2 border-primary/50">
        <span className="text-primary-foreground font-black text-base text-center px-3 transition-all duration-500">
          {billboardAds[currentAd]}
        </span>
      </div>
      
      <div className="absolute top-[35%] right-[10%] w-36 h-20 bg-accent/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-glow animate-pulse border-2 border-accent/50">
        <span className="text-accent-foreground font-black text-sm text-center px-3 transition-all duration-500">
          {billboardAds[(currentAd + 2) % billboardAds.length]}
        </span>
      </div>
      
      <div className="absolute bottom-[35%] left-[8%] w-32 h-20 bg-secondary/80 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-glow animate-pulse border-2 border-secondary/50">
        <span className="text-secondary-foreground font-black text-xs text-center px-2 transition-all duration-500">
          {billboardAds[(currentAd + 4) % billboardAds.length]}
        </span>
      </div>
      
      <div className="absolute top-[50%] left-[45%] w-44 h-28 bg-primary/70 backdrop-blur-sm rounded-lg flex items-center justify-center shadow-glow animate-pulse border-2 border-primary/40">
        <span className="text-primary-foreground font-black text-lg text-center px-4 transition-all duration-500">
          {billboardAds[(currentAd + 1) % billboardAds.length]}
        </span>
      </div>
      
      {/* Building Windows with Lights */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-4 bg-yellow-300/60 rounded-sm animate-pulse"
            style={{
              top: `${15 + Math.random() * 50}%`,
              left: `${5 + Math.random() * 90}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Traffic Lights */}
      <div className="absolute bottom-[20%] left-[25%] flex flex-col gap-1">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="absolute bottom-[20%] right-[30%] flex flex-col gap-1">
        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="w-2 h-2 bg-green-500 rounded-full animate-ping" style={{ animationDelay: '2.5s' }}></div>
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

        @keyframes car-move-reverse {
          0% {
            transform: translateX(calc(100vw + 100%));
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .car {
          position: absolute;
          width: 50px;
          height: 20px;
          border-radius: 6px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
        }

        .car::before {
          content: '';
          position: absolute;
          top: -8px;
          width: 24px;
          height: 12px;
          border-radius: 6px 6px 0 0;
        }

        .car::after {
          content: '';
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          top: 50%;
          transform: translateY(-50%);
        }

        .car-1 {
          bottom: 0;
          background: linear-gradient(90deg, #ef4444 0%, #dc2626 100%);
          animation: car-move 10s linear infinite;
          box-shadow: 0 4px 16px rgba(239, 68, 68, 0.6);
        }

        .car-1::before {
          left: 10px;
          background: linear-gradient(90deg, #fee2e2 0%, #fecaca 100%);
        }

        .car-1::after {
          left: 2px;
        }

        .car-2 {
          bottom: 25px;
          background: linear-gradient(90deg, #3b82f6 0%, #2563eb 100%);
          animation: car-move 14s linear infinite;
          animation-delay: 3s;
          box-shadow: 0 4px 16px rgba(59, 130, 246, 0.6);
        }

        .car-2::before {
          left: 12px;
          background: linear-gradient(90deg, #dbeafe 0%, #bfdbfe 100%);
        }

        .car-2::after {
          left: 3px;
        }

        .car-3 {
          bottom: 50px;
          background: linear-gradient(90deg, #10b981 0%, #059669 100%);
          animation: car-move-reverse 12s linear infinite;
          animation-delay: 1s;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.6);
        }

        .car-3::before {
          right: 10px;
          background: linear-gradient(90deg, #d1fae5 0%, #a7f3d0 100%);
        }

        .car-3::after {
          right: 2px;
        }

        .car-4 {
          bottom: 10px;
          background: linear-gradient(90deg, #f59e0b 0%, #d97706 100%);
          animation: car-move 16s linear infinite;
          animation-delay: 7s;
          box-shadow: 0 4px 16px rgba(245, 158, 11, 0.6);
        }

        .car-4::before {
          left: 14px;
          background: linear-gradient(90deg, #fef3c7 0%, #fde68a 100%);
        }

        .car-4::after {
          left: 4px;
        }

        .car-5 {
          bottom: 35px;
          background: linear-gradient(90deg, #8b5cf6 0%, #7c3aed 100%);
          animation: car-move-reverse 18s linear infinite;
          animation-delay: 5s;
          box-shadow: 0 4px 16px rgba(139, 92, 246, 0.6);
        }

        .car-5::before {
          right: 12px;
          background: linear-gradient(90deg, #ede9fe 0%, #ddd6fe 100%);
        }

        .car-5::after {
          right: 3px;
        }
      `}</style>
    </div>
  );
};

export default AnimatedCityBackgroundHome;
