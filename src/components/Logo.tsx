import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2 logo-glow">
      <div className="text-2xl md:text-3xl font-script text-primary font-bold">
        Eternal Vows
      </div>
    </Link>
  );
};

export default Logo;