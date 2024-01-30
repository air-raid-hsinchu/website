import { useState, useEffect } from "react";
import "../../assets/styles/detail.css";
import classImg from "../../assets/images/2-4校園授權版.jpeg";
import playerBg from "../../assets/images/layer2Mobilebg.png";
import { Fade } from "@mui/material";
import SocialBar from "../socialBar";
import { Link } from "react-router-dom";
import Player from "../audioPlayer";
import pageAudio from "../../assets/audio/1938 誉れの軍夫(榮譽的軍夫)1934[雨夜花]重新填詞之日軍宣傳歌曲.mp3";
import Img1 from "../../assets/images/2-4 圖一.png";
import Img2 from "../../assets/images/2-4 圖二.jpeg";
const fadeInOptions = {
  timeout: { enter: 1000, exit: 0 },
};

// create a background and a container-fluid centered in the background
const Page24 = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(window.innerHeight > window.innerWidth);
    window.addEventListener("resize", () => {
      setIsMobile(window.innerHeight > window.innerWidth);
    });
  }, []);

  return (
    <>
      {isMobile ? (
        <div className="background">
          <Fade in={true} timeout={fadeInOptions.timeout}>
            <div className="layer2">
              <Link state={{ section: 3 }} to="/">
                <div className="homelink">
                  <i className="fa-solid fa-arrow-left-long" /> Back to List
                </div>
              </Link>
              <SocialBar />
              <div
                className="container h-100"
                style={{ fontFamily: "nstc" }}
              >
                <div className=" h-25"></div>
                <div className="h-75">
                  <div className="col-8 mx-auto">
                    <div
                      className="d-flex flex-column text-black content lh-lg"
                      style={{ fontFamily: "nstc" }}
                    //   id="text"
                    >
                      <h1>黃旺成與疎開</h1>
                      <div className="d-flex justify-content-center">
                        <img src={Img1} alt="黃旺成與疎開" width={"100%"} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                          謝招治《疏開到鄉下避難》
                          <br />
                          （國立臺灣歷史博物館，館藏號：2015.044.0126）
                        </caption>
                      </div>
                      <h2>- 疏開，疎開，踈開，そかい</h2>
                      <p className="fs-10">
                        「疎開」為日語
                        そかい[sokai]的漢字，指為了避免傷亡，進行疏散避難。
                      </p>
                      <p className="fs-10">
                        1944年，隨著戰況逐漸不利，
                        臺灣人在政府的宣導下開始疏散至郊區。
                      </p>

                      <p className="fs-10">
                        回看這段歷史，一位新竹人映入我們的視野。
                      </p>
                      <div className="d-flex justify-content-center">
                        <img src={Img2} alt="黃旺成與疎開" width={"100%"} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                          〈黃旺成與友人合照〉黃旺成（左）
                          <br />
                          圖片來源：中央研究院臺史所檔案。
                        </caption>
                      </div>
                      <h2>- 新竹陳的日記本：黃旺先生日記</h2>
                      <p className="fs-10">
                        黃旺成（1888–1979），號菊仙，新竹竹塹人。
                      </p>
                      <p className="fs-10">
                        作為出生在1888年的新竹人，黃旺成的一生經歷了兩次政權更迭，而這正是臺灣社會劇烈變動的時代。
                      </p>
                      <p className="fs-10">
                        不同文化的洗鍊，形塑了他獨特的認同。
                      </p>
                      <p className="fs-10">
                        1920年，他因經商與林獻堂結識。之後，黃旺成投身臺灣新民報記者，這成為他投身社會運動的契子。
                      </p>
                      <p className="fs-10">
                        當時，臺灣的社運正風起雲湧，黃旺成也加入了為民喉舌的事業中。
                      </p>
                      <div className="d-flex justify-content-center">
                        <img src={classImg} alt="黃旺成與疎開" width={"100%"} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                          〈臺灣民報與臺灣新民報同仁合影〉黃旺成（中排右二）。圖片來源：中央研究院臺史所檔案館
                        </caption>
                      </div>
                      <p className="fs-10">
                        他與林獻堂、蔣渭水等人共同成為臺灣民眾黨的初期成員，曾當選過新竹市議員。
                      </p>
                      <p className="fs-10">
                        然而，九一八事變爆發後，日本對臺灣輿論步步限縮，黃旺成甚至因此被逮捕入獄。
                      </p>
                      <p className="fs-10">
                        戰後，黃旺成投入修史的工作，最終於1978年過世，享年97歲。
                      </p>
                      <p className="fs-10">
                        除了一生的經歷外，黃旺成最為人所知的是他詳實的日記，他書寫日記數十年，幾乎從未間斷。
                      </p>
                      <p className="fs-10">
                        1945年，隨著日軍的潰敗，臺灣也成為了戰場。為了躲避轟炸，黃旺成決定開始「疏開」。
                      </p>
                      <p className="fs-10">而這段經歷，被完整記錄在日記中。</p>
                      <p className="fs-10">
                        在日記中，「疎開」被其書寫為「踈開」。
                      </p>
                      <p className="fs-10">
                        透過黃旺成的筆，我們可以再次回到那個時代。
                      </p>
                    </div>
                  </div>
                  <div className="h-25">
                    {Player(pageAudio, "<誉れの軍夫音樂>", false)}
                  </div>
                </div>
              </div>
              <img
                src={playerBg}
                alt="空襲底下的人民生活"
                width={"100%"}
                id="layer2bg"
              />
            </div>
          </Fade>
        </div>
      ) : (
        <div className="background">
          <Fade in={true} timeout={fadeInOptions.timeout}>
            <div className="layer2bg">
              <Link state={{ section: 3 }} to="/">
                <div className="homelink">
                  <i className="fa-solid fa-arrow-left-long" /> Back to List
                </div>
              </Link>
              <SocialBar />
              <div className="container h-100 mb">
                {/* <div className=" h-25"></div> */}
                <div className="row">
                  <div className="col-9"></div>
                  <div className="col-3">
                    {Player(pageAudio, "<奉公防空群の歌>")}
                  </div>
                </div>
                <div className=" h-50">
                  <div className="col-8 mx-auto">
                    <div
                      className="d-flex flex-column text-black content lh-lg"
                      style={{ fontFamily: "nstc" }}
                      id="text"
                    >
                      <h1>黃旺成與疎開</h1>
                      <div className="d-flex justify-content-center">
                        <img src={Img1} alt="黃旺成與疎開" width={"100%"} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                          謝招治《疏開到鄉下避難》
                          <br />
                          （國立臺灣歷史博物館，館藏號：2015.044.0126）
                        </caption>
                      </div>
                      <h2>- 疏開，疎開，踈開，そかい</h2>
                      <p className="fs-5">
                        「疎開」為日語
                        そかい[sokai]的漢字，指為了避免傷亡，進行疏散避難。
                      </p>
                      <p className="fs-5">
                        1944年，隨著戰況逐漸不利，
                        臺灣人在政府的宣導下開始疏散至郊區。
                      </p>

                      <p className="fs-5">
                        回看這段歷史，一位新竹人映入我們的視野。
                      </p>
                      <div className="d-flex justify-content-center">
                        <img src={Img2} alt="黃旺成與疎開" width={"100%"} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                          〈黃旺成與友人合照〉黃旺成（左）
                          <br />
                          圖片來源：中央研究院臺史所檔案。
                        </caption>
                      </div>
                      <h2>- 新竹陳的日記本：黃旺先生日記</h2>
                      <p className="fs-5">
                        黃旺成（1888–1979），號菊仙，新竹竹塹人。
                      </p>
                      <p className="fs-5">
                        作為出生在1888年的新竹人，黃旺成的一生經歷了兩次政權更迭，而這正是臺灣社會劇烈變動的時代。
                      </p>
                      <p className="fs-5">
                        不同文化的洗鍊，形塑了他獨特的認同。
                      </p>
                      <p className="fs-5">
                        1920年，他因經商與林獻堂結識。之後，黃旺成投身臺灣新民報記者，這成為他投身社會運動的契子。
                      </p>
                      <p className="fs-5">
                        當時，臺灣的社運正風起雲湧，黃旺成也加入了為民喉舌的事業中。
                      </p>
                      <div className="d-flex justify-content-center">
                        <img src={classImg} alt="黃旺成與疎開" width={"100%"} />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                          〈臺灣民報與臺灣新民報同仁合影〉黃旺成（中排右二）。圖片來源：中央研究院臺史所檔案館
                        </caption>
                      </div>
                      <p className="fs-5">
                        他與林獻堂、蔣渭水等人共同成為臺灣民眾黨的初期成員，曾當選過新竹市議員。
                      </p>
                      <p className="fs-5">
                        然而，九一八事變爆發後，日本對臺灣輿論步步限縮，黃旺成甚至因此被逮捕入獄。
                      </p>
                      <p className="fs-5">
                        戰後，黃旺成投入修史的工作，最終於1978年過世，享年97歲。
                      </p>
                      <p className="fs-5">
                        除了一生的經歷外，黃旺成最為人所知的是他詳實的日記，他書寫日記數十年，幾乎從未間斷。
                      </p>
                      <p className="fs-5">
                        1945年，隨著日軍的潰敗，臺灣也成為了戰場。為了躲避轟炸，黃旺成決定開始「疏開」。
                      </p>
                      <p className="fs-5">而這段經歷，被完整記錄在日記中。</p>
                      <p className="fs-5">
                        在日記中，「疎開」被其書寫為「踈開」。
                      </p>
                      <p className="fs-5">
                        透過黃旺成的筆，我們可以再次回到那個時代。
                      </p>
                    </div>
                  </div>
                  <div className="h-25"></div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      )}
    </>
  );
};

export default Page24;
