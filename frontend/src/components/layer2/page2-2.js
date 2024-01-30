import "../../assets/styles/detail.css";
import classImg from "../../assets/images/2-2class.png";
import playerBg from "../../assets/images/layer2Mobilebg.png";
import Img1 from "../../assets/images/2-2 圖一.png";
import { Fade } from "@mui/material";
import SocialBar from "../socialBar";
import { Link } from "react-router-dom";
import Player from "../audioPlayer";
import pageAudio from "../../assets/audio/奉公防空群の歌＋お知らせ.mp3";
import { useState, useEffect } from "react";

const fadeInOptions = {
  timeout: { enter: 1000, exit: 0 },
};

// create a background and a container-fluid centered in the background
const Page22 = () => {
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
                <div className="h-25"></div>
                <div className="h-75">
                  <div className="col-9 mx-auto">
                    <div
                      className="d-flex flex-column text-black"
                      style={{ fontFamily: "nstc" }}
                      // id="text"
                    >
                      <h1>空襲底下的人民生活</h1>
                      <div className="d-flex justify-content-center">
                        <img
                          src={Img1}
                          alt="空襲底下的人民生活"
                          width={"100%"}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                        謝招治《躲空襲》<br/>（國立臺灣歷史博物館，館藏號：2015.044.0126）
                        </caption>
                      </div>
                      <h2>- 走空襲：防空洞是第二個家</h2>
                      <p className="fs-10">
                        1944年空襲日漸頻繁的局勢下，總督府命令每戶人家都應自行挖掘防空洞，當空襲警報響起時，應立即前往防空洞避難。後期轟炸頻繁人民幾乎天天進入防空壕躲避空襲，空洞內陰暗潮濕的環境，容易滋生蚊蟲，環境極差。
                      </p>
                      <p className="fs-10">
                        戰爭末期的空襲使臺灣人每天都處於躲避的精神壓力和恐懼下，和生死離別的悲慘命運中。
                      </p>
                      <div className="d-flex justify-content-center">
                        <img
                          src={classImg}
                          alt="空襲底下的人民生活"
                          width={"100%"}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                          〈防空頭巾をかぶっての授業〉<br />圖片來源：麹町国民学校=千代田区教育委員会所蔵
                        </caption>
                      </div>

                      <h2>- 「疏開」（そかい）：前往疏開地的生活</h2>
                      <p className="fs-10">
                        從1944年至終戰的期間轟炸日漸頻繁，當時城市內的日式房屋多為木造，為了避免轟炸延燒造成重大傷亡，總督府開始宣導民眾疏散至鄉間，當時稱之「疏開」（そかい）。
                      </p>
                      {/* insert image here with caption below */}

                      <p className="fs-10">
                        「疏開」是日語（そかい
                        sokai）的漢字寫法，在中文裡「疏」和「疎」音譯相同，疏開指戰爭時期避免傷亡的疏散避難行動，如戰時的「學童疏開」指學校內學生往郊區躲避，「工廠疏開」指將工廠搬移至安全的地方，「建築疏開」指為了避免空襲延燒而開闢防空空地。
                      </p>
                    </div>
                  </div>
                  <div className="h-25">
                    {Player(pageAudio, "<奉公防空群の歌>", false)}
                  </div>
                </div>
              </div>
              <img src={playerBg} alt="空襲底下的人民生活" width={"100%"} id="layer2bg" />
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
                      className="d-flex flex-column text-black content"
                      style={{ fontFamily: "nstc" }}
                      id="text"
                    >
                      <h1>空襲底下的人民生活</h1>
                      <div className="d-flex justify-content-center">
                        <img
                          src={Img1}
                          alt="空襲底下的人民生活"
                          width={"100%"}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                        謝招治《躲空襲》<br/>（國立臺灣歷史博物館，館藏號：2015.044.0126）
                        </caption>
                      </div>
                      <h2>- 走空襲：防空洞是第二個家</h2>
                      <p className="fs-5">
                        1944年空襲日漸頻繁的局勢下，總督府命令每戶人家都應自行挖掘防空洞，當空襲警報響起時，應立即前往防空洞避難。後期轟炸頻繁人民幾乎天天進入防空壕躲避空襲，空洞內陰暗潮濕的環境，容易滋生蚊蟲，環境極差。
                      </p>
                      <p className="fs-5">
                        戰爭末期的空襲使臺灣人每天都處於躲避的精神壓力和恐懼下，和生死離別的悲慘命運中。
                      </p>
                      <div className="d-flex justify-content-center">
                        <img
                          src={classImg}
                          alt="空襲底下的人民生活"
                          width={"100%"}
                        />
                      </div>
                      <div className="d-flex justify-content-center">
                        <caption>
                          〈防空頭巾をかぶっての授業〉<br/>圖片來源：麹町国民学校=千代田区教育委員会所蔵
                        </caption>
                      </div>

                      <h2>- 「疏開」（そかい）：前往疏開地的生活</h2>
                      <p className="fs-5">
                        從1944年至終戰的期間轟炸日漸頻繁，當時城市內的日式房屋多為木造，為了避免轟炸延燒造成重大傷亡，總督府開始宣導民眾疏散至鄉間，當時稱之「疏開」（そかい）。
                      </p>

                      <p className="fs-5">
                        「疏開」是日語（そかい
                        sokai）的漢字寫法，在中文裡「疏」和「疎」音譯相同，疏開指戰爭時期避免傷亡的疏散避難行動，如戰時的「學童疏開」指學校內學生往郊區躲避，「工廠疏開」指將工廠搬移至安全的地方，「建築疏開」指為了避免空襲延燒而開闢防空空地。
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

export default Page22;
