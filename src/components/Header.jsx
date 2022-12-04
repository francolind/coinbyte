
import search from '../assets/search.png';
import Logo from '../assets/headerLogo.png';
import menu from '../assets/menuW.png';
import close from '../assets/closeW.png';
import { useState } from 'react';


export const Header = () => {
    const [click,setClick] = useState(false);
    const handleclick = () =>{
        setClick(!click);
    }
    
    return(
            <header className="header-conteiner">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                    <p className='logo-title'>Coinbyte</p>
                </div>
                <div className={ click ? 'header-menu' : 'menu-desactive'}>
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>swap</li>
                        <li>donate</li>
                        <li className='li-boton'>get started</li>
                    </ul>
                </div>
                <div onClick={handleclick} className='header-boton'>{
                   click ?   <img className='menu' src={close} alt="" /> :
                       <img className='close' src={menu} alt="" />
                }
                </div>
                <div  className='header-search'>
                    <img src={search} alt="search" />
                </div>
            </header> 
    )
};