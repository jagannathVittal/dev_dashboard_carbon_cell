import React, { useState, useEffect } from "react";
import Graph from "../components/graph";
import { getGraphData, getCryptoCurrencyData } from "../api/helper";
import Spinner from "../components/spinner";
import BitCoinCard from "../components/bitCoinCard";
const Home = () => {
    const [data, setData] = useState([])
    const [spinner, setSpinner] = useState([])
    const [bitData, setBitData] = useState([])
    useEffect(() => {
        callGraphInfo()
        callCryptoCurrencyInfo()
    }, [])
    const callGraphInfo = async () => {
        setSpinner(true)
        const res = await getGraphData()
        setData(res?.data)
        setSpinner(false)
    }

    const callCryptoCurrencyInfo = async () => {
        setSpinner(true)
        const res = await getCryptoCurrencyData()
        setBitData(res?.bpi)
        setSpinner(false)
    }

    return (
        <div className="container-fluid">
            <Spinner show={spinner}>
                <Graph data={data} />
                <hr />
                <BitCoinCard data={bitData} />
            </Spinner>
        </div>
    )
}

export default Home

