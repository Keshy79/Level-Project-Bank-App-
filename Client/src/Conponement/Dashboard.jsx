import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import bag from "../assets/bag.png";
import add from "../assets/Vector.png";
import wdraw from "../assets/wdraw.png";
import savew from "../assets/savew.png";
import investme from "../assets/investme.png";
import invite from "../assets/invite.png";
import { BsBank2 } from "react-icons/bs";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaHouseUser } from "react-icons/fa";
import { BiMoneyWithdraw } from "react-icons/bi"
import { MdNotifications } from "react-icons/md";
import Footer from './Footer';
import { FaUser } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import { TbMoneybag } from "react-icons/tb";


const Dashboard = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState("");
  let url = "https://level-project-bank-app.onrender.com/client/dashboard";
  let token = localStorage.getItem("token");

  const fundAcct = () => {
    navigate("/dashboard/fund-acct");
  }

  const [image, setimage] = useState("");
  const [email, setemail] = useState("");

  useEffect(() => {
    axios.get(url, {
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === true) {
          console.log("success");
          setUserData(res.data.user);
          setemail(res.data.user.emailLink.email)
          setimage(res.data.user.profile_url)
        }
      })
      .catch((err) => {
        console.log(err);
        localStorage.removeItem("token");
        navigate("/login");
      });;
  }, []);

  function test () {
    console.log(userData);
  }

  return (
    <>

      <div className='p-4 '>
        <div>
          <div className=''>
            <div className='d-flex gap-4' style={{alignItems: 'center'}}>
            {image ? (
                <img src={image} className="image" alt="" />
              ) : (
                <div onClick={test} className="image-placeholder">No image selected</div>
              )}
              <div className='d-flex justify-content-between '>
              <div>
                {userData ? (
                  <div>
                    <p>Welcome, {userData.firstName}</p>
                  </div>
                ) : (
                  <div>Loading...</div>
                )}
              </div>
              <div className='iconDraw'>
                <MdNotifications />
              </div>
              </div>
            </div>
            </div>


            <div className='d-flex pt-4  '>
              <p>Good morning, remember to save today</p>
              {/* <img src={bag} alt="" /> */}
              <TbMoneybag className='align-item-center my-2 ' />
            </div>


            <div className='text-center rounded-3 p-5 d-flex justify-content-between align-items-center text-light ' style={{ backgroundColor: "green" }}>
              <div class="flip-card d-lg-block d-none ">
                <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <p class="heading_8264">MASTERCARD</p>
                    <svg class="logo" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                      <path fill="#ff9800" d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path><path fill="#d50000" d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path><path fill="#ff3d00" d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                    </svg>
                    <svg version="1.1" class="chip" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 50 50" xml:space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAB6VBMVEUAAACNcTiVeUKVeUOY
              fEaafEeUeUSYfEWZfEaykleyklaXe0SWekSZZjOYfEWYe0WXfUWXe0WcgEicfkiXe0SVekSXekSW
              ekKYe0a9nF67m12ZfUWUeEaXfESVekOdgEmVeUWWekSniU+VeUKVeUOrjFKYfEWliE6WeESZe0GS
              e0WYfES7ml2Xe0WXeESUeEOWfEWcf0eWfESXe0SXfEWYekSVeUKXfEWxklawkVaZfEWWekOUekOW
              ekSYfESZe0eXekWYfEWZe0WZe0eVeUSWeETAnmDCoWLJpmbxy4P1zoXwyoLIpWbjvXjivnjgu3bf
              u3beunWvkFWxkle/nmDivXiWekTnwXvkwHrCoWOuj1SXe0TEo2TDo2PlwHratnKZfEbQrWvPrWua
              fUfbt3PJp2agg0v0zYX0zYSfgkvKp2frxX7mwHrlv3rsxn/yzIPgvHfduXWXe0XuyIDzzISsjVO1
              lVm0lFitjVPzzIPqxX7duna0lVncuHTLqGjvyIHeuXXxyYGZfUayk1iyk1e2lln1zYTEomO2llrb
              tnOafkjFpGSbfkfZtXLhvHfkv3nqxH3mwXujhU3KqWizlFilh06khk2fgkqsjlPHpWXJp2erjVOh
              g0yWe0SliE+XekShhEvAn2D///+gx8TWAAAARnRSTlMACVCTtsRl7Pv7+vxkBab7pZv5+ZlL/UnU
              /f3SJCVe+Fx39naA9/75XSMh0/3SSkia+pil/KRj7Pr662JPkrbP7OLQ0JFOijI1MwAAAAFiS0dE
              orDd34wAAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IDx2lsiuJAAACLElEQVRIx2Ng
              GAXkAUYmZhZWPICFmYkRVQcbOwenmzse4MbFzc6DpIGXj8PD04sA8PbhF+CFaxEU8iWkAQT8hEVg
              OkTF/InR4eUVICYO1SIhCRMLDAoKDvFDVhUaEhwUFAjjSUlDdMiEhcOEItzdI6OiYxA6YqODIt3d
              I2DcuDBZsBY5eVTr4xMSYcyk5BRUOXkFsBZFJTQnp6alQxgZmVloUkrKYC0qqmji2WE5EEZuWB6a
              lKoKdi35YQUQRkFYPpFaCouKIYzi6EDitJSUlsGY5RWVRGjJLyxNy4ZxqtIqqvOxaVELQwZFZdkI
              JVU1RSiSalAt6rUwUBdWG1CP6pT6gNqwOrgCdQyHNYR5YQFhDXj8MiK1IAeyN6aORiyBjByVTc0F
              qBoKWpqwRCVSgilOaY2OaUPw29qjOzqLvTAchpos47u6EZyYnngUSRwpuTe6D+6qaFQdOPNLRzOM
              1dzhRZyW+CZouHk3dWLXglFcFIflQhj9YWjJGlZcaKAVSvjyPrRQ0oQVKDAQHlYFYUwIm4gqExGm
              BSkutaVQJeomwViTJqPK6OhCy2Q9sQBk8cY0DxjTJw0lAQWK6cOKfgNhpKK7ZMpUeF3jPa28BCET
              amiEqJKM+X1gxvWXpoUjVIVPnwErw71nmpgiqiQGBjNzbgs3j1nus+fMndc+Cwm0T52/oNR9lsdC
              S24ra7Tq1cbWjpXV3sHRCb1idXZ0sGdltXNxRateRwHRAACYHutzk/2I5QAAACV0RVh0ZGF0ZTpj
              cmVhdGUAMjAyMy0wMi0xM1QwODoxNToyOSswMDowMEUnN7UAAAAldEVYdGRhdGU6bW9kaWZ5ADIw
              MjMtMDItMTNUMDg6MTU6MjkrMDA6MDA0eo8JAAAAKHRFWHRkYXRlOnRpbWVzdGFtcAAyMDIzLTAy
              LTEzVDA4OjE1OjI5KzAwOjAwY2+u1gAAAABJRU5ErkJggg=="></image>
                    </svg>
                    <svg version="1.1" class="contactless" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 50 50" xml:space="preserve">  <image id="image0" width="50" height="50" x="0" y="0" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAQAAAC0NkA6AAAABGdBTUEAALGPC/xhBQAAACBjSFJN
              AAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZ
              cwAACxMAAAsTAQCanBgAAAAHdElNRQfnAg0IEzgIwaKTAAADDklEQVRYw+1XS0iUURQ+f5qPyjQf
              lGRFEEFK76koKGxRbWyVVLSOgsCgwjZBJJYuKogSIoOonUK4q3U0WVBWFPZYiIE6kuArG3VGzK/F
              fPeMM/MLt99/NuHdfPd888/57jn3nvsQWWj/VcMlvMMd5KRTogqx9iCdIjUUmcGR9ImUYowyP3xN
              GQJoRLVaZ2DaZf8kyjEJALhI28ELioyiwC+Rc3QZwRYyO/DH51hQgWm6DMIh10KmD4u9O16K49it
              VoPOAmcGAWWOepXIRScAoJZ2Frro8oN+EyTT6lWkkg6msZfMSR35QTJmjU0g15tIGSJ08ZZMJkJk
              HpNZgSkyXosS13TkJpZ62mPIJvOSzC1bp8vRhhCakEk7G9/o4gmZdbpsTcKu0m63FbnBP9Qrc15z
              bkbemfgNDtEOI8NO5L5O9VYyRYgmJayZ9nPaxZrSjW4+F6Uw9yQqIiIZwhp2huQTf6OIvCZyGM6g
              DJBZbyXifJXr7FZjGXsdxADxI7HUJFB6iWvsIhFpkoiIiGTJfjJfiCuJg2ZEspq9EHGVpYgzKqwJ
              qSAOEwuJQ/pxPvE3cYltJCLdxBLiSKKIE5HxJKcTRNeadxfhDiuYw44zVs1dxKwRk/uCxIiQkxKB
              sSctRVAge9g1E15EHE6yRUaJecRxcWlukdRIbGFOSZCMWQA/iWauIP3slREHXPyliqBcrrD71Amz
              Z+rD1Mt2Yr8TZc/UR4/YtFnbijnHi3UrN9vKQ9rPaJf867ZiaqDB+czeKYmd3pNa6fuI75MiC0uX
              XSR5aEMf7s7a6r/PudVXkjFb/SsrCRfROk0Fx6+H1i9kkTGn/E1vEmt1m089fh+RKdQ5O+xNJPUi
              cUIjO0Dm7HwvErEr0YxeibL1StSh37STafE4I7zcBdRq1DiOkdmlTJVnkQTBTS7X1FYyvfO4piaI
              nKbDCDaT2anLudYXCRFsQBgAcIF2/Okwgvz5+Z4tsw118dzruvIvjhTB+HOuWy8UvovEH6beitBK
              xDyxm9MmISKCWrzB7bSlaqGlsf0FC0gMjzTg6GgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjMtMDIt
              MTNUMDg6MTk6NTYrMDA6MDCjlq7LAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIzLTAyLTEzVDA4OjE5
              OjU2KzAwOjAw0ssWdwAAACh0RVh0ZGF0ZTp0aW1lc3RhbXAAMjAyMy0wMi0xM1QwODoxOTo1Nisw
              MDowMIXeN6gAAAAASUVORK5CYII="></image>
                    </svg>
                    {userData ? (
                      <div>
                        <p class="number">{userData.accountNumber}</p>
                        <p class="valid_thru">VALID THRU</p>
                        <p class="date_8264">1 2 / 2 4</p>
                      </div>
                    ) : (
                      <p>Loading...</p>
                    )}
                    <p class="name">
                      {userData ? (
                        <div>
                          <p>{userData.firstName} {userData.lastName}</p>
                        </div>
                      ) : (
                        <div>Loading...</div>
                      )}  </p>
                  </div>
                  <div class="flip-card-back">
                    <div class="strip"></div>
                    <div class="mstrip"></div>
                    <div class="sstrip">
                      <p class="code">***</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className=' total'>
                <p className=''>Avaliable Balance</p>
                <h2>$50,000</h2>
                <h5>Saving Account</h5>
              </div>
            </div>

            <div className=" Addmoney justify-content-between mt-4 text-center">
              <div>
                <div>
                  <GiTakeMyMoney className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Deposit</p>
              </div>

              <div>
                <div>
                  <FaHouseUser className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Kash Bank</p>
              </div>

              <div>
                <div onClick={fundAcct} style={{ cursor: "pointer" }}>
                  <BsBank2 className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>To Bank</p>
              </div>

              <div>
                <div>
                  <BiMoneyWithdraw className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder '>Withdraw</p>
              </div>

              <div>
                <NavLink to={"/History"} style={{ color: "black", textDecoration: "none" }}>
                  <div>
                    <FaHistory className='react-icons' />
                  </div>
                  <p className='ms-3 mt-2 fw-bolder '>History</p>
                </NavLink>
              </div>

            </div>

            <div className=" Addmoney mt-4 text-center">

              <div>
                <div>
                  <GiTakeMyMoney className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Airtime</p>
              </div>

              <div>
                <div>
                  <FaHouseUser className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Buy Data</p>
              </div>

              <div>
                <div>
                  <BsBank2 className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Betting</p>
              </div>

              <div>
                <div>
                  <BiMoneyWithdraw className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder '>Electricity</p>
              </div>



              <div>
                <div>
                  <GiTakeMyMoney className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Airtime</p>
              </div>

              <div>
                <div>
                  <FaHouseUser className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Buy Data</p>
              </div>

              <div>
                <div>
                  <BsBank2 className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Betting</p>
              </div>

              <div>
                <div>
                  <BiMoneyWithdraw className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder '>Electricity</p>
              </div>



              <div>
                <div>
                  <GiTakeMyMoney className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Airtime</p>
              </div>

              <div>
                <div>
                  <FaHouseUser className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Buy Data</p>
              </div>

              <div>
                <div>
                  <BsBank2 className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder'>Betting</p>
              </div>

              <div>
                <div>
                  <BiMoneyWithdraw className='react-icons' />
                </div>
                <p className='ms-3 mt-2 fw-bolder '>Electricity</p>
              </div>


            </div>




            <div><p className='pt-5'>Get your money working for you</p></div>

            <div className=' pt-3'>
              <div className='d-flex mt-4 align-items-center rounded-2 w-100 p-2 pt-3' style={{ border: "1px solid black" }}>
                <img className='px-3' src={savew} alt="" />
                <p className='ms-4'>Save for an emergency</p>
              </div>

              <div className='d-flex mt-4 align-items-center rounded-2 w-100 p-2 pt-3' style={{ border: "1px solid black" }}>
                <img className='px-3' src={investme} alt="" />
                <p className='ms-4'>Invest your money</p>
              </div>

              <p className='pt-3'>Ways to earn more money</p>
              <div className='margin d-flex mt-4 align-items-center rounded-2 w-100 p-2 pt-3' style={{ border: "1px solid black" }}>
                <img className='px-2' src={invite} alt="" />
                <p className=''>Invite your friends and get a bonus</p>
              </div>

            </div>

          </div>
          <Footer />
        </div>
    </>
  )
}

export default Dashboard