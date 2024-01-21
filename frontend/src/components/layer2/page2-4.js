import "../../assets/styles/detail.css";
import classImg from "../../assets/images/2-4校園授權版.jpeg";
import { Fade } from "@mui/material";
import SocialBar from "../socialBar";
import { Link } from "react-router-dom";
import Player  from "../audioPlayer";
import pageAudio from "../../assets/audio/1938 誉れの軍夫(榮譽的軍夫)1934[雨夜花]重新填詞之日軍宣傳歌曲.mp3";

const fadeInOptions = {
    timeout: { enter: 1000, exit: 0 },
};

// create a background and a container-fluid centered in the background
const Page24 = () => {
    return (
        <div className="background">
            <Fade in={true} timeout={fadeInOptions.timeout}>
                <div className="layer2bg">
                    {Player(pageAudio, "<誉れの軍夫音樂>")}
                    <Link state={{ section: 3 }} to="/">
                        <div className="homelink">
                            <i className="fa-solid fa-arrow-left-long" /> Back to List
                        </div>
                    </Link>
                    <SocialBar />   
                    <div className="container h-100 mb">
                        {/* <div className=" h-25"></div> */}
                        <div className=" h-50">
                            <div className="col-8 mx-auto">
                                <div className="d-flex flex-column text-black content lh-lg" style={{ fontFamily: 'nstc' }} id="text">
                                    <h1>黃旺成與疎開</h1>
                                    <p className="fs-5">
                                        「疎開」是日語 そかい（sokai） 的漢字，指的是為了避免傷亡而進行的疏散避難。
                                        1944年，隨著戰況逐漸不利，臺灣人在政府的宣導下開始疏散至鄉間。
                                        回看這段歷史，一位新竹人映入我們的視野。
                                        黃旺成（1888–1979），號菊仙，新竹竹塹人
                                        作為出生在1888年的新竹人，黃旺成的一生經歷了兩次政權更迭，正是臺灣社會劇烈變動的時代。
                                    </p>
                                    <p className="fs-5">
                                        不同文化的洗鍊，形塑了他獨特的認同。
                                    </p>

                                    <p className="fs-5">
                                        1920年，他因經商與林獻堂結識。
                                        之後，黃旺成又成為臺灣新民報的記者，這成為他投身社會運動的契子。
                                        當時，臺灣的社運正風起雲湧，黃旺成也加入了為民喉舌的事業中。
                                        他與林獻堂、蔣渭水等人共同成為臺灣民眾黨的初期成員，曾當選過新竹市議員。
                                    </p>
                                    <div className="d-flex justify-content-center">
                                        <img
                                            src={classImg}
                                            alt="黃旺成與疎開"
                                            width={"75%"}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <caption>
                                            〈臺灣民報與臺灣新民報同仁合影〉黃旺成（中排右二）。圖片來源：中央研究院臺史所檔案館
                                        </caption>
                                    </div>

                                    <p className="fs-5">
                                        然而，九一八事變爆發後，日本對臺灣輿論步步限縮，黃旺成甚至因此被逮捕入獄。
                                        戰後，黃旺成投入修史的工作，最終於1978年過世，享年97歲。
                                        除了一生的經歷外，黃旺成最為人所知的是他詳實的日記。他書寫日記數十年，幾乎從未間斷。
                                        1945年，隨著日軍的潰敗，臺灣也成為了戰場。為了躲避轟炸，黃旺成決定開始「疎開」。
                                        而這段經歷，被完整記錄在日記中。
                                    </p>
                                    {/* insert image here with caption below */}

                                </div>
                            </div>
                            <div className="h-25"></div>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Page24;
