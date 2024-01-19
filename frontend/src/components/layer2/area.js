import bgImg from "../../assets/images/2-5bg.png";
import { Fade } from "@mui/material";
import SocialBar from "../socialBar";
import { Link } from "react-router-dom";

const fadeInOptions = {
    timeout: { enter: 1000, exit: 0 }
};

const content = {
    A: {
        title: "展間Ａ 空襲時代",
        description: "步入時光迴廊，回到1945年 — 新竹州的天空。",
    },
    B: {
        title: "展間Ｂ  新竹陳的日記本",
        description: `太平洋戰爭後期，隨著戰爭逐漸失利，臺灣從後方變成了前線。\n來自美軍轟炸機的威脅，徹底改變了人們的生活。\n從黃旺成的日記中，我們可以窺見那個時代的一隅。1945年五月中旬，為了躲避轟炸，黃旺成開始尋找「疏開」的去處。\n在這段期間，面對日復一日的空襲，他被迫舉家搬遷。那段操勞無奈，且性命時時遭受威脅的日子，正是當時臺灣人生活的縮影。\n透過黃旺成的筆，我們可以再次回到那個時代。`,
    },
    C: {
        title: "展間C  空襲體驗區",
        description: `1945年，死亡灑在我們的島嶼上。\n小女孩的腳步慌亂，呼吸之間，生死一線。\n歲月與瓦礫埋葬了記憶，但她沒有遺忘。\n只要閉上眼睛，在黑暗之中，那個時代的轟鳴仍在耳邊回響。`,
    },
    D: {
        title: "展間D  Re-thinking",
        description: "死亡不是終點，遺忘才是。",
    },
}

const Area = ({ where }) => {

    return (
        <>
            <Fade in={true} timeout={fadeInOptions.timeout}>
                <div style={{
                    backgroundImage: `url(${bgImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    height: "100vh",
                    width: "100vw",
                }}>
                    <Link state={{ section: 4 }} to="/" >
                        <div className="homelink">
                            <i className="fa-solid fa-arrow-left-long" /> Back to List
                        </div>
                    </Link>
                    <div>{SocialBar}</div>
                    <div className="container h-100">
                        <div className="h-25"></div>
                        <div className="h-50 d-flex flex-column justify-content-center text-black">
                            <h1 style={{ fontFamily: 'nstc-bold' }}>{content[where].title}</h1>
                            <pre className="overflow-hidden pre-wrap lh-lg fs-5" style={{ fontFamily: 'nstc' }}>{content[where].description}</pre>
                        </div>

                    </div>
                </div>
            </Fade>
        </>
    );
}

export default Area;