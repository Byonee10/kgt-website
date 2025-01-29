import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import "./header.css";
import logo from '../assets/logo_linear.jpg';
import Navtabs from './navtabs';
import odtulogo from "../assets/odtulogo.jpg"
const Header = () => {
  return (
    <>
      <Helmet>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <meta charSet="UTF-8" />
        <meta name="description" content="ODTÜ Klasik Gitar Topluluğu Web Sayfası" />
        <meta name="author" content="KGT" />
        <title>ODTÜ Klasik Gitar Topluluğu</title>
      </Helmet>
      <nav className="flex sticky " style={{ backgroundColor: '#FFFFFF' }}>
        <Link to="/" className="navbar-brand">
          <img src={logo} height="78" alt="ODTÜ Klasik Gitar Topluluğu" />
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <Navtabs></Navtabs>
        <Link to="https://www.metu.edu.tr" className="navbar-brand">
          <img src={odtulogo} height="78" alt="ODTÜ " />
        </Link>
      </nav>
    </>
  );
};

export default Header;
