import heroImage from "@/assets/hero-bg.jpg";

const HeroBackground = () => {
  return (
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat z-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    />
  );
};

export default HeroBackground;
