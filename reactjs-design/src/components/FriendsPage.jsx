import React from 'react'
import NavBar from '../NavBar'
import "./Friends.css"
import { useNavigate } from 'react-router-dom'

function FriendsPage() {
    const navigate = useNavigate()
  return (
    <>
    <NavBar/>
    <div className="container">
    <div className="page_nav">UI/UX &gt; Refer & Earn &gt; Friends Referred</div>
    <p className='back' onClick={()=> navigate("/")}>&lt;- go back</p>

    <div className="part_1">
        <div className="content_1"><p>Your Referral Code</p><p>EJHGB97</p></div>
        <div className="content_2"><p>Wallet Balance</p>
        <p>&#8377; 500</p></div>
    </div>
    <div className="part_2">
        <p className='head'>Friends who enrolled<span>(3)</span></p>

        <div className="card_container">
            <div className="card_box">
                <div className="card_head">
                    <p>Dhiraj Saxena</p>
                    <p>14 Sep,2022</p>
                </div>
                <div className="card_subHead"><p>Courses Enrolled(6)</p></div>
                <div className="card_courses">
                    <span>UI/UX</span>
                    <span>Photoshop</span>
                    <span>Illustrator</span>
                    <span>Python</span>
                    <span>MERN</span>
                    <span>Java</span>
                </div>

                <div className="card_amt"><p>Referral Amount  </p><span> &#8377; 185</span></div>
            </div>
            <div className="card_box">
                <div className="card_head">
                    <p>Shubhash Mishra</p>
                    <p>15 Sep,2022</p>
                </div>
                <div className="card_subHead"><p>Courses Enrolled(23)</p></div>
                <div className="card_courses">
                    <span>UI/UX</span>
                    <span>Photoshop</span>
                    <span>Illustrator</span>
                    <span>C++</span>
                    <span>C#</span>
                    <span>Javascript</span>
                    <span>ReactJS</span>
                    <span>Python</span>
                    <span>MERN</span>
                    <span>Java</span>
                </div>

                <div className="card_amt"><p>Referral Amount  </p><span> &#8377; 485</span></div>
            </div>
            <div className="card_box">
                <div className="card_head">
                    <p>Prafull Kumar</p>
                    <p>14 Sep,2022</p>
                </div>
                <div className="card_subHead"><p>Courses Enrolled(23)</p></div>
                <div className="card_courses">
                    <span>UI/UX</span>
                    <span>Photoshop</span>
                    <span>Illustrator</span>
                    <span>Python</span>
                    <span>MERN</span>
                    <span>Java</span>
                    <span>Javascript</span>
                    <span>ReactJS</span>
                    <span>Python</span>
                    <span>MERN</span>
                    <span>Java</span>
                    <span>NodeJs</span>
                </div>

                <div className="card_amt"><p>Referral Amount  </p><span> &#8377; 555</span></div>
            </div>

           
        </div>
    </div>
    <p className='lastHead'>Terms & Conditions</p>
    </div>

  
    </>
  )
}

export default FriendsPage