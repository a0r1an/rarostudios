import Link from 'next/link'
import NavMenu from '../components/NavMenu'

export default () => (
  <header>
    <div className="logo">
      <h1>{process.env.SITE_TITLE}</h1>
    </div>
    <nav className="nav">
      <span className="nav__icon"></span>
      <NavMenu />
    </nav>
  </header>
)