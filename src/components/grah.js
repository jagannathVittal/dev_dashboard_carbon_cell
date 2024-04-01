import React from "react";
import LineChart from "./lineChart";
import PieChart from "./pieChart";

const Graph = ({ data }) => {
    return (
        <>
            <div class="row">
                <div class="col-12 col-xl-8">
                    <LineChart data={data} />
                </div>
                <div class="col-12 col-xl-4">
                    <PieChart data={data} />
                </div>
            </div>
        </>
    )
}

export default Graph