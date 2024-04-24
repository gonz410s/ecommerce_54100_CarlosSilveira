
import logo from '../../assets/images/logo.png';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
}

export default Header;