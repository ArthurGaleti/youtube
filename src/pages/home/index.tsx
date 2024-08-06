import FilterComp from "../../components/ShortsComponents";
import VideoComponent from "../../components/videoComponent";
import Filtro from "../../components/Filtro";
import ShortsL from "../../assets/shortsLogo.png"
import { Shorts, Video, Sl } from "./style";

function Home(){
    return(
        <div>
            <Filtro/>

                <br/>
                
            <Video>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
                <VideoComponent/>
            </Video>

            <br/><br/><br/>

            <Sl src={ShortsL}/>

            <Shorts>
                <FilterComp/>
                <FilterComp/>
                <FilterComp/>
                <FilterComp/>
                <FilterComp/>
                <FilterComp/>
            </Shorts>

        </div>
    )
}

export default Home;