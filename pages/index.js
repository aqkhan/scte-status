import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import Head from 'next/head';
import '../assets/style.css';

export default () => {
    let date = new Date(Date.now());
    date = date.toDateString();
    return (
        <>
        <Head>
            <title>Executive Summary - SCTE ISBE Website Progress</title>
        </Head>
        <div className="center-me">
            <div className="item">
            <h2 style={{ textAlign: "center" }}>SCTE ISBE</h2>
            <h4>Website Progress as of { date } </h4>
            <Progress percent={75} />
            <h6 style={{ textAlign: "right" }}><a href="/details">DETAILS ></a></h6>
            </div>
        </div>
        </>
    )
}