import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { ButtonContainer } from './Button';
class Navbar extends Component {
  state = {};
  render() {
    return (
      <Navwrapper className='navbar navbar-expand-sm bg-primary navbar-dark px-sm-5'>
        {/* 
https://www.iconfinder.com/icons/1243689/call_phone_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/Makoto_msk */}

        <Link to='/'>
          <img src={logo} alt='store' className='navbar-brand' />
        </Link>
        <ul className='navbar-nav align-items-center'>
          <li className='nav-item ml-5'>
            <Link to='/' className='nav-link'>
              Products
            </Link>
          </li>
        </ul>

        <Link to='/cart' className='ml-auto'>
          <ButtonContainer>
            <span className='mr-2'>
              <i className='fas fa-cart-plus'></i>
            </span>
            Cart
          </ButtonContainer>
        </Link>
      </Navwrapper>
    );
  }
}
const Navwrapper = styled.nav`
  background: var(--mainBlue) !important;
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize !important;
  }
`;
/*
 &:hover {
    background: ${(props) =>
      props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }


   border-color: ${(props) =>
    props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)'};
  color: ${(props) => (props.cart ? 'var(--mainYellow)' : 'var(--lightBlue)')};
 
*/

export default Navbar;
