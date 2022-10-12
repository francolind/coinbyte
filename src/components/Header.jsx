
import search from '../assets/search.png';
import Logo from '../assets/Logo.png'

export const Header = () => {
    return(
            <header className="header-conteiner">
                <div className="header-logo">
                    <img src={Logo} alt="Logo" />
                    <p className='logo-title'>Coinbyte</p>
                </div>
                <div className="header-menu">
                    <ul>
                        <li>home</li>
                        <li>about</li>
                        <li>swap</li>
                        <li>donate</li>
                        <li className='li-boton'>get started</li>
                    </ul>
                </div>
                <div className='header-search'>
                    <img src={search} alt="search" />
                </div>
            </header> 
    )
};