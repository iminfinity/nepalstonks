import "./header.styles.scss";
import {ReactComponent as Logo} from "../../assets/nepalstonks-logo.svg";

const Header = () => {
    return(
        <header className="page-header">
            <Logo />
            <h4>In development</h4>
            <div className="premium">
                <span> Get Premium</span>
            </div>
        </header>
    )
}

export default Header;