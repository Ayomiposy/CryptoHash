import { Link } from "react-router";
export const Header = () => {
  return (
    <div className="top-nav">
      <Link to="/">Homepage</Link>
      <Link to={`/about`}>About Us</Link>
    </div>
  );
};
