import React, { useState, useEffect } from "react";
import Graph from "../components/graph";
import { getGraphData } from "../api/helper";
import Spinner from "../components/spinner";
const Asset = () => {
    const [data, setData] = useState([])
    const [spinner, setSpinner] = useState([])
    useEffect(() => {
        callGraphInfo()
    }, [])
    const callGraphInfo = async () => {
        setSpinner(true)
        const res = await getGraphData()
        setData(res?.data)
        setSpinner(false)
    }

    return (
        <div className="container-fluid">
            <Spinner show={spinner}>
                <Graph data={data} />
            </Spinner>
        </div>
    )
}

export default Asset

