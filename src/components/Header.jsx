import logoApp from '/img/logo.svg';
import '../assets/styles/header.css'
function Header(){
    return(
        <header>
            <div className="containerLogo">
                <div className="logo">
                    <img src={logoApp} alt="" />
                </div>
            </div>
        </header>
    )
}export default Header;