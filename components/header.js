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
    width: 100px;
  }
`
class Header extends React.Component{
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { navChecked: false };
    this.navDecide = this.navDecide.bind(this);
  }
  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll.bind(this));
   
  }
  handleScroll(event) {
    if(this.state.navChecked){
      this.setState({navChecked: false})
    }
  }
  navDecide(event){
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
          <h1><Logo /></h1>
        </div>
        <Navbar navChecked={this.state.navChecked} navDecide={this.navDecide} />
      </HeaderArea>
    )
  }
}
export default Header