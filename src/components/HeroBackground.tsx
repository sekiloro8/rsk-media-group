import heroImage from "@/assets/hero-bg.jpg";

const HeroBackground = () => {
  return (
    <div className="absolute inset-0 w-full h-full z-0">
      <img
        src={heroImage}
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default HeroBackground;
