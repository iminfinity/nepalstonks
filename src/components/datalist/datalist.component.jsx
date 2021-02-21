import {useStock} from "../../data/stockContext";

import "./datalist.styles.scss";

const DataList = () => {
    const {stockList, currentStock, updateCurrentStock}  = useStock()
    return (
        <div className="data-list">
            <input 
                list="stock-symbols" 
                name="stock-symbol" 
                id="stock-symbol"
                placeholder="Stock"
                value={currentStock}
                onChange={(event)=>updateCurrentStock(event.target.value)}
                />
            <datalist id="stock-symbols">
                {
                    stockList.length > 0 ? (
                        stockList.map(stock=> (
                            <option value={stock} key={stock}/>
                        ))
                        )
                        :
                        null
                }
            </datalist>
        </div>
    )
}

export default DataList;