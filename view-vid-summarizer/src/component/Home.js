import Upload from "./Upload";
import YouTube from "./YoutTube";
import './Home.css';
import Summary from "../common/summary.js";

function Home() {
    return (
        <div >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <header className="header-class">Vid-Summarizer</header>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <YouTube />
            </div>
            <hr className="hr-class"></hr>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Upload />
            </div>
            <div>
                <Summary/>
            </div>
        </div>
    );
}
export default Home;