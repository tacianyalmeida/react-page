import {Link} from 'react-router-dom'
import { Nav} from '../Styled-Components/Header';
import React from 'react';


const Header = ()=>{
    return(
      <Nav className='nav' style={{backgroundColor: '#073540'}}>
        <Link className='linkHome' to='/'>Home</Link>
        <Link className='linkSobre' to='sobre'>Sobre</Link>
        <Link className='linkCont' to='contato'>Contato</Link>
      </Nav>
    )
}
export default  Header;