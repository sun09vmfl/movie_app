import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/sign.png';

export default function Header() {
  return (
    <div className="header-container">
      <div className="header-wrap">
        <div className="header-left-wrap">
          <Link to="/">
            <img
              style={{
                width: '250px',
                height: '90px',
                backgroundColor: 'transparent',
              }}
              src={logo}
              alt="로고"
            />
          </Link>
          <ul>
            <li>
              <Link to="/movie" className="header-nav-item">
                영화
              </Link>
            </li>
            <li>
              <Link to="/tv" className="header-nav-item">
                랭킹
              </Link>
            </li>
            <li>
              <Link to="/person" className="header-nav-item">
                상영/예정작
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
