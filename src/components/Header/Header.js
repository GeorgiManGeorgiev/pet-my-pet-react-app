/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';

const Header = () => (
  <header id="site-header">
    <nav className="navbar">
      <section className="navbar-dashboard">
        <div className="first-bar">
          <Link to="/">Dashboard</Link>
          <Link className="button" to="#">My Pets</Link>
          <Link className="button" to="/pets/create">Add Pet</Link>
        </div>
        <div className="second-bar">
          <ul>
            <li>
              Welcome,
              Pesho
              !
            </li>
            <li>
              <Link to="#">
                <i className="fas fa-sign-out-alt" />
                {' '}
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="navbar-anonymous">
        <ul>
          <li>
            <Link to="#">
              <i className="fas fa-user-plus" />
              {' '}
              Register
            </Link>
          </li>
          <li>
            <Link to="#">
              <i className="fas fa-sign-in-alt" />
              {' '}
              Login
            </Link>
          </li>
        </ul>
      </section>
    </nav>
  </header>
);

export default Header;
