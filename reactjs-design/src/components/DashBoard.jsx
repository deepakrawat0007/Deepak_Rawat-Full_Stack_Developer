import React from 'react'
import NavBar from '../NavBar'
import { useNavigate } from 'react-router-dom'
import "../page.css"

function DashBoard() {
    const navigate = useNavigate()
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="page_nav">UI/UX &gt; Refer & Earn</div>
                <div className="inner_container">
                    <div className="earnings">
                        <div className='parts'><p>Referral Earning</p><p>&#8377; 2,500</p></div>
                        <div className="parts"><p>Total Referral</p><p>7</p></div>
                        <div className="parts"><p>Wallet Balance</p><p>&#8377; 500</p></div>
                        <div className="parts"><button className='btn'>Withdraw Balance</button></div>
                    </div>
                    <div className="refer">
                        <p>Your Referral Code</p>
                        <div className='code'><p>E D C H 5 4</p></div>
                    </div>
                </div>
                <div className='inner_container_2'>
                    <p>How does it work ?</p>
                    <div className="works">
                        <div className="cards"><span><i class="fa-solid fa-users" id="my-icon"></i></span><div className="text"><p>Invite your friends</p>

                            <p>Share the link tutedude.com with<br></br>your friends.</p></div></div>

                        <div className="cards"><span><i class="fa-solid fa-tag" id='my-icon'></i></span><div className="text"><p>Friend purchases any course</p>

                            <p>Using your REFERRAL CODE in the<br></br>payments page.</p></div></div>
                        <div className="cards"><span><i class="fa-sharp fa-solid fa-indian-rupee-sign" id='my-icon'></i></span><div className="text"><p>You get &#8377; 200 as referral money</p>

                            <p>On total purchase the friend<br></br>makes, into your wallet.</p></div></div>
                        <div className="cards"><span id='my-icon'>%</span><div className="text"><p>Your Friend gets &#8377; 200 off</p>

                            <p>On his overall fees on successfull<br></br>purchase using your referral code.</p></div></div>
                        <div className="cards"><span><i class="fa-solid fa-wallet" id='my-icon'></i></span><div className="text"><p>Transfer Money from wallet</p>

                            <p>When the wallet balance reaches<br></br>&#8377; 200 or more, you can withdraw it.</p></div></div>
                    </div>
                    <p className='lastHead' onClick={()=>navigate("/friends")}>Friends Who Enrolled</p>
                    <p className='lastHead'>Terms & Conditions</p>
                </div>
            </div>
        </>
    )
}

export default DashBoard