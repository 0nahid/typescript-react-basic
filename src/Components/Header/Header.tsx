import * as React from "react";
import { Link } from "react-router-dom";

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <div className="w-25 mx-auto">
      <Link to="/" style={{marginRight:'10px'}}>Home</Link>
      <Link to="/about" style={{marginRight:'10px'}}>About</Link>
      <Link to="/feature" style={{marginRight:'10px'}}>Feature</Link>
      <Link to="/contact" style={{marginRight:'10px'}}>Contact</Link>
    </div>
  );
};

export default Header;
