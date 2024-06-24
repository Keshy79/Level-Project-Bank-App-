import React, { useEffect } from "react";
import Footer from "../Conponement/Footer";
import { HiOutlinePencilSquare } from "react-icons/hi2";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account() {
  const navigate = useNavigate();
  useEffect(() => {
    let url = "http://localhost:5000/client/dashboard";
    let token = localStorage.getItem("token");
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === true) {
          console.log("success");
          setemail(res.data.user.emailLink.email)
          setimage(res.data.user.profile_url)
        }
      })
      .catch((err) => {
        console.log(err);
        if(err){
          localStorage.removeItem("token");
          navigate("/login");
        }
          
      });
  }, []);
 
  const [file, setfile] = useState("");
  const [image, setimage] = useState("");
  const [email, setemail] = useState("");

  let endpoint = "http://localhost:5000/client/upload";

  const upload = (e) => {
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      setfile(reader.result);
      setimage(reader.result);
    };
  };

  const uploadPicture = () => {
    axios
      .post(endpoint, { email, file })
      .then((res) => {
        console.log(res);
        setimage(res.data.result.url);
      })
      .catch((err) => {
        console.log(err);
        console.log("file not uploaded");
      });
  };

  const performClick = (e) => {
    e.preventDefault();
    document.getElementById("file").click();
  };

  return (
    <>
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-lg-12 col-md-12">
              <h1>Welcome to the account section</h1>
              <p>
                Here you can upload and change your profile picture, reset your
                password and also get to view your account details
              </p>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-12 col-md-12">
                <h3>Upload your profile picture</h3>
                <div className="picture">
                  {image ? (
                    <img src={image} className="image" alt="" />
                  ) : (
                    <div className="image-placeholder">No image selected</div>
                  )}
                  <div>
                    <input
                      type="file"
                      id="file"
                      className="pix"
                      onChange={upload}
                      style={{ display: "none" }}
                    />
                    <label
                      htmlFor="file"
                      onClick={performClick}
                      className="iconNw"
                      style={{ cursor: "pointer" }}
                    >
                      <HiOutlinePencilSquare />
                    </label>
                    <button
                      onClick={uploadPicture}
                      className=" upload button"
                      style={{ marginTop: "10px" }}
                    >
                      Upload
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Account;
