import LineChart from "../line-chart/line-chart.component";
import InfoCenter from "../info-center/info-center.component";

import "./content.styles.scss";

const Content = () => {
  return (
      <main className="content">
        <LineChart />
        <InfoCenter />
      </main>
  );
}

export default Content;
