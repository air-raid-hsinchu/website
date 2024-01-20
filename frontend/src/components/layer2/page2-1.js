import "../../assets/styles/detail.css";
import { Fade } from "@mui/material";
import SocialBar from "../socialBar";
import { Link } from "react-router-dom";

const fadeInOptions = {
    timeout: { enter: 1000, exit: 0 },
};

// create a background and a container-fluid centered in the background
const Page21 = () => {
    return (
        <Fade in={true} timeout={fadeInOptions.timeout}>
            <div className="background">
                <div className="layer2bg">
                    <Link state={{ section: 2 }} to="/" timeout={1000}>
                        <div className="homelink">
                            <i className="fa-solid fa-arrow-left-long" /> Back to List
                        </div>
                    </Link>
                    <div>{SocialBar}</div>
                    <div className="container h-100">
                        <div className=" h-25"></div>
                        <div className=" h-75">
                            <div className="col-8 mx-auto">
                                <div className="d-flex flex-column text-black fs-5" style={{ fontFamily: 'nstc' }} id="text">
                                    <p>
                                        濃濃的黑煙及戰火掠過上空，打亂了原本有序的生活，彼時，新竹州的天空，是不平靜的。太平洋戰爭期間，臺灣身為日本殖民地，肩負著「南進政策基地」的任務，而新竹州因為具有數個軍事據點，也成為了當時美軍空襲的主要目標之一。
                                    </p>
                                    <p>
                                        然而，砲火從來都是無情的。
                                    </p>
                                    <p>
                                        在大規模的空襲下，居住在這片土地上的人民，別無選擇地被迫參與這場戰爭。
                                    </p>
                                    {/* insert image here with caption below */}

                                    <p>
                                        「時光流逝，二戰歷史的見證者終將在歲月中凋零，這些發生在新竹的土地故事，卻被漸漸遺忘，對於這場戰爭的討論，也大多停留在統治者的行動。因此，本展將透過日記史料及口述記憶的沉浸式展演，喚醒這段屬於新竹的戰爭空襲記憶，並且傳達那些被埋沒於書面檔案的、或是不在書面檔案上的—那段屬於新竹真實的一頁。
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default Page21;
