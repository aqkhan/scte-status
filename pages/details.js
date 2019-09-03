import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
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
                <Circular per={86} text={'User Stories Block'} />
            </div>
            <div className="item">
                <Circular per={0} text={'User Stories Testing'}/>
            </div>
            <div className="item">
                <Circular per={100} text={'Functional Featuers'}/>
            </div>
            <div className="item">
                <Circular per={100} text={'Functional Testing'}/>
            </div>
        </div>
    </>
)
}