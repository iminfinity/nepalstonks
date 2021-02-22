import Header from "../../components/header/header.component";
import Content from "../../components/content/content.component";

import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Content />
    </div>
  );
}

export default Home;
