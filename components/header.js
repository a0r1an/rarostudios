import Link from 'next/link'
import Navbar from '../components/Nav'
import styled from 'styled-components'
import Logo from '../components/logo'
const HeaderArea = styled.header`
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  h1 {
    font-size: 0;
    background: white;
    padding: 1rem 0;
    margin: 0;
    width: 150px;
    margin: 0 auto;
  }
  img {
    width: 150px;
  }
`
class Header extends React.Component{
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { navChecked: false };
    this.navDecideState = this.navDecideState.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.checkNavOnScroll.bind(this));
  }
  checkNavOnScroll(event) {
    if(this.state.navChecked){
      this.setState({navChecked: false})
    }
  }
  navDecideState(event){
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      navChecked: value
    });
  }
  render(){
    return (
      <HeaderArea>
        <div className="logo">
          <h1>
            <Link href="/index">
              <a>
                <Logo />
              </a>
            </Link>
          </h1>
        </div>
        <Navbar navChecked={this.state.navChecked} navDecideState={this.navDecideState} />
      </HeaderArea>
    )
  }
}
export default Header