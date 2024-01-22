import "../../assets/styles/index.css";
// import "../../assets/styles/detail.css";
import "../../assets/styles/audioPlayer.css";
import "../../assets/scss/audioPlayer.scss";

import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import recordImg from "../../assets/images/2-2record.png";

const Player = (pageAudio, title) => (
  <div className="container-fluid" id="audio">
    <div className="row my-1">
      <div className="col-9"></div>
      <div className="col-3 mx-auto text-center">
        <img
          src={recordImg}
          alt="空襲底下的人民生活"
          width={"75%"}
          id="recordImg"
        />
      </div>
    </div>
    <div className="row my-2">
      <div className="col-9"></div>
      <div className="col-3 mx-auto text-center my-2">
        <h3>{title}</h3>
      </div>
    </div>
    <div className="row my-1">
      <div className="col-9"></div>
      <div className="col-3">
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
            // console.log("Matrix: " + tr);
            // With rotate(30deg)...
            // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
            // console.log('Matrix: ' + tr);
            // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
            console.log(tr);
            if (tr === "none") {
              angle = 0;
            } else {
              var values = tr.split("(")[1].split(")")[0].split(",");
              var a = values[0];
              var b = values[1];
              // arc sin, convert from radians to degrees, round
              // next line works for 30deg but not 130deg (returns 50);
              // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
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
            // With rotate(30deg)...
            // matrix(0.866025, 0.5, -0.5, 0.866025, 0px, 0px)
            // console.log('Matrix: ' + tr);
            // rotation matrix - http://en.wikipedia.org/wiki/Rotation_matrix
            var values = tr.split("(")[1].split(")")[0].split(",");
            var a = values[0];
            var b = values[1];
            // arc sin, convert from radians to degrees, round
            // next line works for 30deg but not 130deg (returns 50);
            // var angle = Math.round(Math.asin(sin) * (180/Math.PI));
            var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
            // console.log('Rotate: ' + angle + 'deg');
            // make record image stop spinning when audio is paused
            // document.getElementById("recordImg").animate({transform: []},{duration: 0});
            // disble animate
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
            // document.getElementById("recordImg").style.transform =
            //   "rotate(" + angle + "deg)";
          }}
          // make record image start to spin when audio is playing
          // other props here
        />
      </div>
    </div>
  </div>
);

export default Player;
