import {Line} from "react-chartjs-2";
import {useStock} from "../../data/stockContext";

import "./line-chart.styles.scss";
const LineChart = () => {
    const {currentStockData} = useStock()
    return(
        <section className="line-chart">
        <Line
            data={{
                labels: currentStockData.date,
                datasets: [
                    {
                        label: 'Max price',
                        data: currentStockData.maxPrice,
                        borderColor: "red",
                        backgroundColor: "rgba(240,0,0,.1)"
                    },
                    {
                        label: 'Min price',
                        data: currentStockData.minPrice,
                        borderColor: "green",
                        backgroundColor: "rgba(0,240,0,.1)"
                    },
                    {
                        label: 'Closing price',
                        data: currentStockData.closingPrice,
                        borderColor: "blue",
                        backgroundColor: "rgba(0,1,240,.1)"
                    },
                ] 
            }}
            height={400}
            width={600}
            options={{
                maintainAspectRatio: false,
            }}
        />
        </section>
    )
}

export default LineChart;