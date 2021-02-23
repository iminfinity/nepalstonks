import Header from "../../components/header/header.component";
import Menu from "../../components/menu/menu.component";
import MainContent from "../../components/main-content/main-content.component";

import "./profile.styles.scss";

const Profile = () => {
    return(
        <>
            <Header />
            <main className="profile">
                <Menu />
                <MainContent />
            </main>
        </>
    )
}

export default Profile;