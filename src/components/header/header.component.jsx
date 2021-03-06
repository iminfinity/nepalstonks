import "./header.styles.scss";
import {ReactComponent as Logo} from "../../assets/nepalstonks-logo.svg";
import {ReactComponent as InDev} from "../../assets/development.svg";

const Header = () => {
    return(
        <header className="page-header">
            <Logo />
            {/* <InDev title="In development" className="in-dev" /> */}
            {/* <div className="premium">
                <span> Get Premium</span>
            </div> */}
        </header>
    )
}

export default Header;