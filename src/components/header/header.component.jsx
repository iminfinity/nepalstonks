import "./header.styles.scss";
import {ReactComponent as Logo} from "../../assets/nepalstonks-logo.svg";

const Header = () => {
    return(
        <header className="page-header">
            <Logo />
            <div className="premium">
                <span> Get Premium</span>
            </div>
        </header>
    )
}

export default Header;