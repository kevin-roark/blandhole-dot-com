import React from 'react'
import { Link } from 'gatsby'
import { navItems } from './Navbar'

export default () => (
  <footer className="footer has-background-black has-text-white-ter">
    <div className="content has-text-centered has-background-black has-text-white-ter">
      <div className="container has-background-black has-text-white-ter">
        <div style={{ maxWidth: '100vw' }} className="columns">
          <div className="column is-8">
            <img
              src={'/img/logo.png'}
              alt="Blandhole Dot Com"
              style={{ maxWidth: '100%' }}
            />
          </div>
          <div className="column is-4">
            <section className="menu">
              <ul className="menu-list">
                {navItems.map(({ to, label }) => (
                  <li key={label}>
                    <Link to={to} className="navbar-item">{label}</Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  </footer>
)
