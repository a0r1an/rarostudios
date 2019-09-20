import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  -webkit-user-select: none;
  user-select: none;

  input {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    top: 23px;
    right: 20px;
    cursor: pointer;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;
  }
  .hamburger {
    display: block;
    width: 40px;
    height: 40px;
    margin: 23px 20px 0;
  }
  .hamburger span {
    display: block;
    width: 40px;
    height: 6px;
    margin-bottom: 5px;
    position: relative;
    background: #000;
    border-radius: 3px;
    z-index: 1;
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
    opacity 0.55s ease;
  }
  .hamburger span:first-child {
    transform-origin: 0% 0%;
  }
  .hamburger span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }
  input:checked ~ .nav_menu {
    transform: none;
  }
  input:checked ~ div span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: #232323;
  }
  input:checked ~ div span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ div span:nth-last-child(1) {
    transform: rotate(-45deg) translate(-5px, -4px);
  }
  .nav_menu {
    font-size: 1rem;
    font-family: 'Roboto Slab', serif;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    margin: 0;
    padding: 5em 0 0;
    background: #ededed;
    list-style-type: none;
    -webkit-font-smoothing: antialiased;
    /* to stop flickering of text in safari */
    transform-origin: 0% 0%;
    transform: translate(100%, 0);
    transition: transform 0.25s cubic-bezier(0.77,0.2,0.05,1.0);
  }
  .nav_menu li {
    margin: 0 0 1em;
    font-size: 1.4em;
  }
  a {
    text-decoration: none;
    color: #000;
    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
  @media (min-width: 600px) {
    .nav_menu {
      width: 300px;
    }
    input {
      right: 40px;
      top: 55px;
    }
    .hamburger {
      margin-right: 40px;
      margin-top: 55px;
    }
  }
`

class Navbar extends React.Component{
  render() {
    return (
      <Nav>
        <input type="checkbox" className="navInit" checked={this.props.navChecked} onChange={this.props.navDecideState} />
        <div className="hamburger" >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className="nav_menu">
          {/* <li>
            <Link href="/stories">
              <a>STORIES</a>
            </Link>
          </li> */}
          <li><a href={`https://www.spreaker.com/user/${process.env.PODCAST_CHANNEL}`} target="_blank">PODCAST</a></li>
          <li><a href={`https://www.youtube.com/channel/${process.env.YOUTUBE_CHANNEL_ID}`} target="_blank">VIDEOS</a></li>
          <li>
            <Link href="/about">
              <a>ABOUT</a>
            </Link>
          </li>
        </ul>
      </Nav>
    )
  }
}
export default Navbar