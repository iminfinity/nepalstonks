import {useState} from "react";

import LineChart from "../line-chart/line-chart.component";
import InfoCenter from "../info-center/info-center.component";

import "./content.styles.scss";

const Content = () => {
    const [currentStock, setCurrentStock] = useState("") 
    const [currentStockData, setCurrentStockData] = useState({}) 

    const updateStock = (stock) => {
      setCurrentStock(stock)
    }
    const updateStockData = (stockData) => {
      setCurrentStockData(stockData)
    }
  return (
      <main className="content">
        <LineChart data={currentStockData} stock={currentStock}/>
        <InfoCenter updateStock={updateStock} updateStockData={updateStockData}/>
      </main>
  );
}

export default Content;
