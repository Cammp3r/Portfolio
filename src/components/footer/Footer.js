import "./style.css"
import discord from "./../../img/icons/discord.svg"
import github from "./../../img/icons/gitHub.svg"


const Footer = () => {
    return (
    <footer className="footer">
        <div className="container">
            <div className="footer__wrapper">
                <ul className="social">  
                    <li className="social__item"><a href="https://discord.com/users/438712885854863360/"><img src={discord} alt="Link"/></a></li>
                    <li className="social__item"><a href="https://github.com/Cammp3r"><img src={github} alt="Link"/></a></li>
                      </ul>
                <div className="copyright">
                    <p>© 2024 </p>
                </div>
            </div>
        </div>
    </footer>
    );
}

export default Footer;