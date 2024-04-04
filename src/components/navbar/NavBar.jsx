import './navbar.scss';

export default function Navbar() {
  return (
    <header>
      <img className='logo' src="assets/shared/logo.svg" alt="logo" />
      <button><img src="assets/shared/icon-hamburger.svg" alt="icon-hamburger" /></button>
    </header>
  );
}
