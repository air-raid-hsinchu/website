import { Component } from "react";
import { MDBRow, MDBCol, MDBRipple } from "mdb-react-ui-kit";

class Layer2 extends Component {
  render() {
    return (
      <>
        <div class="container">
          <div class="row">
            <div class="col-sm-4">
              <div class="bg-image shadow-0-strong rounded">
                <img src="./left.png" class="img-fluid" />
                <a href="#!">
                  <div class="hover-overlay">
                    <div
                      class="mask d-flex justify-content-center align-items-center h-100"
                      style={{ backgroundColor: "rgba(200, 200, 200, 0.5)" }}
                    >
                      <p class="text-black mb-0">左邊</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="row">
                <div class="bg-image shadow-1-strong rounded">
                  <img src="./top_right.png" class="img-fluid" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div
                        class="mask d-flex justify-content-center align-items-center h-100"
                        style={{ backgroundColor: "rgba(200, 200, 200, 0.5)" }}
                      >
                        <p class="text-black mb-0">右上</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div class="row">
                <div class="bg-image shadow-1-strong rounded">
                  <img src="./bottom_right.png" class="img-fluid" />
                  <a href="#!">
                    <div class="hover-overlay">
                      <div
                        class="mask d-flex justify-content-center align-items-center h-100"
                        style={{ backgroundColor: "rgba(200, 200, 200, 0.5)" }}
                      >
                        <p class="text-black mb-0">右下</p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Layer2;
