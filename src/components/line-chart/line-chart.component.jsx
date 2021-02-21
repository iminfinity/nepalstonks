import {Line} from "react-chartjs-2";
import data from "./data.json";
import "./line-chart.styles.scss";
const LineChart = () => {
    return(
        <section className="line-chart">
        <Line
            data={{
                labels: data.date,
                datasets: [
                    {
                        label: 'Max price',
                        data: data.maxPrice,
                        borderColor: "red"
                    },
                    {
                        label: 'Min price',
                        data: data.minPrice,
                        borderColor: "green"
                    },
                    {
                        label: 'Closing price',
                        data: data.closingPrice,
                        borderColor: "blue"
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