import * as React from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/feature">Feature</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Header;
