import React from 'react'
import { Link } from 'gatsby'
import { navItems } from './Navbar'

export default () => (
  <footer className="footer">
    <div className="flex" style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
      <Link to="/" className="navbar-item" title="Logo">
        <img
          src={'/img/logo.png'}
          alt="Blandhole Dot Com"
          style={{ maxWidth: '100%', maxHeight: 120, margin: '0 20px' }}
        />
      </Link>

      <section className="menu">
        <ul className="menu-list flex">
          {navItems.map(({ to, label }) => (
            <li key={label}>
              <Link to={to} className="navbar-item navbar-item-text">{label}</Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </footer>
)
