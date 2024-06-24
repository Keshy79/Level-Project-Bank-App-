import React from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
// import Desktop from "../assets/Desktop.png";
import Top from "../assets/Top.png";
import woman from "../assets/woman.png";
import yellow from "../assets/yellow.png";
import purple from "../assets/purple.png";
import blue from "../assets/blue.png";
import man from "../assets/man.png";
import star from "../assets/star.png";
import ceo from "../assets/ceo.jpg";
// import Signup from "./Signup";

const Landing = () => {
  const navigate = useNavigate();

  const Signup = () => {
    navigate("/Signup");
  };

  // const Welcome = () => {
  //   navigate("/Welcome");
  // };
  return (
    <div>
      <div>
        <nav
          style={{ zIndex: "100000" }}
          class="navbar navbar-expand-lg bg-body-tertiary"
        >
          <div class="container-fluid p-3">
            <img src="" alt="" />
            <a class="navbar-brand" href="#">
              KASH
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse navword px-5"
              id="navbarText"
              // style={{ width: "50%", marginLeft: "25%" }}
            >
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">
                    Account
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Save Haven
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    About Us
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Help
                  </a>
                </li>

                <ul className="list-unstyled" id="navbtn">
                  <li class="nav-item">
                    <a
                      class="nav-link active "
                      href="#"
                      onClick={() => {
                        navigate("/Login");
                      }}
                    >
                      Login
                    </a>
                  </li>
                  <li class="nav-item">
                    {/* <a class="nav-link" href="#">Help</a> */}
                    <button
                      className="btn"
                      onClick={Signup}
                      style={{ backgroundColor: "#2bdc2b" }}
                    >
                      Open a Free Bank Account
                    </button>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>

        <div
          style={{ backgroundImage: `url(${Top})` }}
          className="topBox justify-content-center"
        >
          <div className="">
            <h1 className="text-light fw-semibold ">
              Make, Save and <br /> Track Payment <br /> with Ease{" "}
            </h1>
            <p className="text-light fw-semibold ">
              Banking making easy with naira93
            </p>
            <button
              className="blkBtn my-lg-0 my-3"
              onClick={() => {
                navigate("/Signup");
              }}
            >
              Open a Free Bank Account
            </button>
            <button className="downloadBtn mx-lg-3 mx-0 my-3 ">
              Download App
            </button>
          </div>
          <div>
            <img className="top" src={woman} alt="" />
          </div>
        </div>

        <div className="cards justify-content-center align-items-center ">
          <div>
            <h1 className=" fw-bold px-lg-5 ">
              Elevate your bill payments with our amazing card options.
            </h1>
            <p className="px-lg-5">Discover convenience and empowerment like never before.</p>
            <p className="px-lg-5">Get yours now!</p>
          </div>
          <div className=" mt-3">
            <img className="yellow img-fluid" src={yellow} alt="" />
            <img className="purple img-fluid " src={purple} alt="" />
            <img className="blue img-fluid " src={blue} alt="" />
          </div>
        </div>

        <div id="cardMan" className="cardMan align-items-center justify-content-center  ">
          <div>
            <h1 className=" fw-bold">
              Why wait when you can pursue that dream now!{" "}
            </h1>
            <p className="py-4 py-lg-0">
              Take the first step towards achieving your goals and start living
              the life you've always envisioned.{" "}
            </p>
            <button className="loanBtn">Get Loan Now!</button>
          </div>
          <div>
            <img src={man} alt="" />
          </div>
        </div>

              <div className="cardsContainer">
                <h1>See what our customers are saying</h1>
              <div className="cards">
                      
                      <div id="card">
                        <div className="leftCard">
                          <img style={{ height: "130px" }} src={ceo} alt="" />
                          <h6>Patrick Ajamilopa</h6>
                          <p>CEO @ Ajamilopa</p>
                        </div>
                        <div className="rightCard">
                        <div>
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                        </div>
                        <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam, asperiores neque eaque cum velit. Vero neque molestias harum impedit.</div>
                        </div>
                      </div>
                              
                      <div id="card">
                        <div className="leftCard">
                          <img style={{ height: "130px" }} src={ceo} alt="" />
                          <h6>Keshfat Ibarapa</h6>
                          <p>CEO @ Ibarapa</p>
                        </div>
                        <div className="rightCard">
                        <div>
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                        </div>
                        <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam, asperiores neque eaque cum velit. Vero neque molestias harum impedit.</div>
                        </div>
                      </div>
                              
                      <div id="card">
                        <div className="leftCard">
                          <img style={{ height: "130px" }} src={ceo} alt="" />
                          <h6>Shola Ajanlekoko</h6>
                          <p>CEO @ Ajanlekoko</p>
                        </div>
                        <div className="rightCard">
                        <div>
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                          <img
                            className="me-1"
                            style={{ height: "10px" }}
                            src={star}
                            alt=""
                          />
                        </div>
                        <div className="lorem">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quisquam, asperiores neque eaque cum velit. Vero neque molestias harum impedit.</div>
                        </div>
                      </div>
                    </div>
              </div>




        <div className="container-fluid">
          <div id="footer" className="foot">
            <div className="">
              <h2 className="py-2">Kash</h2>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut aliqua.
              </p>
            </div>
            <div className="">
              <a href="#">
                <p>Menu</p>
              </a>
              <a href="#">
                <p>Account</p>
              </a>
              <a href="#">
                <p>Save Haven</p>
              </a>
              <a href="#">
                <p>About Us</p>
              </a>
              <a href="#">
                <p>Blog</p>
              </a>
            </div>
            <div className="">
              <a href="#">
                <p>Company</p>
              </a>
              <a href="#">
                <p>Management</p>
              </a>
              <a href="#">
                <p>Our Story</p>
              </a>
              <a href="#">
                <p>Career</p>
              </a>
              <a href="#">
                <p>Partnership</p>
              </a>
              <a href="#">
                <p>Privacy Policy</p>
              </a>
              <p>
                <a href="#">Cookie policy</a>
              </p>
            </div>
            <div className="">
              <p>
                <a href="#">Help</a>
              </p>
              <p>
                <a href="#">FAQs</a>
              </p>
              <p>
                <a href="#">Support Center</a>
              </p>
              <p>
                {" "}
                <a href="#">Contact Us </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div id="copy" className="copy">
        <p>Copyright 2023 Sulybee Holdings limited All-rights Reserved.</p>
      </div>
    </div>
  );
};

export default Landing;
