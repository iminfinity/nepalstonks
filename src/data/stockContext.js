import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const StockDataContext = createContext();

export const useStock = () => {
  return useContext(StockDataContext);
};

const StockDataProvider = ({ children }) => {
  const [currentStock, setCurrentStock] = useState("");
  const [stockList, setStockList] = useState([]);
  const [currentStockData, setCurrentStockData] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}stock-list`)
      .then((response) => setStockList(response.data))
      .catch(() => console.log("Loading"));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}stock-data/${currentStock}`)
      .then((response) => setCurrentStockData(response.data.stockData))
      .catch(() => console.log("Loading"));
  }, [currentStock]);

  const updateCurrentStock = (stock) => {
    setCurrentStock(stock);
  };
  const value = {
    updateCurrentStock,
    stockList,
    currentStock,
    currentStockData,
  };
  return (
    <StockDataContext.Provider value={value}>
      {children}
    </StockDataContext.Provider>
  );
};

export default StockDataProvider;
