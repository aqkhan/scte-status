import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Head from 'next/head';
import '../assets/style.css';
import Circular from '../components/Circular';
export default () => {
    return (
    <>
        <Head>
            <title>High Level Details - SCTE ISBE Website Progress</title>
        </Head>
        <div className="center">
            <div className="item">
                <h6><a href="/">{ `< Back` }</a></h6>
            </div>
            <div className="item">
                <CircularProgressbarWithChildren value={86} >
                    <h2>User Stories Block</h2>
                    <span>86%</span>
                </CircularProgressbarWithChildren>
            </div>
            <div className="item">
                <CircularProgressbarWithChildren value={0} >
                    <h2>User Stories Testing</h2>
                    <span>0%</span>
                </CircularProgressbarWithChildren>
            </div>
            <div className="item">
                <CircularProgressbarWithChildren value={100} >
                    <h2>Functional Featuers</h2>
                    <span>100%</span>
                </CircularProgressbarWithChildren>
            </div>
            <div className="item">
                <CircularProgressbarWithChildren value={100} >
                    <h2>Functional Testing</h2>
                    <span>100%</span>
                </CircularProgressbarWithChildren>
            </div>
        </div>
    </>
)
}