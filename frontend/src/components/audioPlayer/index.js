// import "../../assets/styles/detail.css";
import "../../assets/styles/audioPlayer.css";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import recordImg from "../../assets/images/2-2record.png";

const Player = (pageAudio, title, showImg=true) => (
  <div id="audio">
    <div className="row text-center">
      {showImg && (
        <img
          src={recordImg}
          alt="空襲底下的人民生活"
          width={"75%"}
          id="recordImg"
        />
      )}
    </div>
    <div className="row text-center">
      <p>{title}</p>
    </div>
    <div className="row">
      <AudioPlayer
        autoPlay
        defaultCurrentTime=""
        defaultDuration=""
        customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
        customProgressBarSection={[RHAP_UI.PROGRESS_BAR]}
        //   customVolumeControls={[]}
        src={pageAudio}
        onPlay={() => {
          // set the rotation degree to current degree
          // try to get the current degree
          try {
            var st = window.getComputedStyle(
              document.getElementById("recordImg"),
              null
            );
          } catch (e) {
            console.log(e);
            return;
          }
          var tr =
            st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform") ||
            "FAIL";
          console.log(tr);
          if (tr === "none") {
            angle = 0;
          } else {
            var values = tr.split("(")[1].split(")")[0].split(",");
            var a = values[0];
            var b = values[1];
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
          }
          document.getElementById("recordImg").animate(
            {
              transform: ["rotate(" + angle + "deg)", "rotate(360deg)"],
            },
            {
              duration: 5000,
              iterations: Infinity,
            }
          );
          document.getElementById("recordImg").animate(
            {
              transform: ["rotate(" + angle + "deg)", "rotate(360deg)"],
            },
            {
              duration: 5000,
              iterations: Infinity,
            }
          );
        }}
        onPause={() => {
          // get the rotation degree and set it as the initial degree
          try {
            var st = window.getComputedStyle(
              document.getElementById("recordImg"),
              null
            );
          } catch (e) {
            return;
          }

          var tr =
            st.getPropertyValue("-webkit-transform") ||
            st.getPropertyValue("-moz-transform") ||
            st.getPropertyValue("-ms-transform") ||
            st.getPropertyValue("-o-transform") ||
            st.getPropertyValue("transform") ||
            "FAIL";
          var values = tr.split("(")[1].split(")")[0].split(",");
          var a = values[0];
          var b = values[1];
          var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
          document.getElementById("recordImg").animate(
            {
              transform: [
                "rotate(" + angle + "deg)",
                "rotate(" + angle + "deg)",
              ],
            },
            {
              duration: Infinity,
              iterations: Infinity,
            }
          );
        }}
      />
    </div>
    </div>
);

export default Player;
