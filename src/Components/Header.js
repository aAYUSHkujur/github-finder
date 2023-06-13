import { Link } from "react-router-dom";
import { FaGithubSquare } from "react-icons/fa";

const Header = () => {
  return (
    <nav className="navbar mb-12 shadow-lg bg-neutral text-neutral-content">
      <div className="container mx-auto">
        <div className="flex-none px-2 mx-2">
          <FaGithubSquare className="inline pr-2 text-3xl" />
          <Link to="/" className="text-lg font-bold align-middle">
            Github Finder
          </Link>
        </div>
      
      </div>
    </nav>
  );
};

export default Header;
