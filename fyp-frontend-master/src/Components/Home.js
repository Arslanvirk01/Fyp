import React, { Component } from 'react';
import Header from './Header';
import Reason from './Reason';
import { Route, BrowserRouter, Link, Switch } from "react-router-dom";

// <Link to="/about">ABOUT</Link>

function Home(){


    return(
        <div className="div-bg-color">
        <Header/>
            <div id="homeCarousel" className="carousel slide carousel-home" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#homeCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#homeCarousel" data-slide-to="1"></li>
                    <li data-target="#homeCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="item active">
                    <img src="assets/images/slider/home-slider-1.jpg" alt=""/>
                    <div className="container">
                        <div className="carousel-caption">
                        <h2 className="carousel-title bounceInDown animated slow">Because they need your help</h2>
                        <h4 className="carousel-subtitle bounceInUp animated slow ">Do not let them down</h4>
                        <Link to="/loginDoner">
                        
                        <button className="btn btn-lg btn-secondary hidden-xs bounceInUp
                             animated slow" data-toggle="modal" data-target="#donateModal">
                                DONATE NOW
                        </button>
                        </Link>
                        {/* <Link to="/donate">
                        <button className="btn btn-lg btn-secondary hidden-xs bounceInUp
                             animated slow" data-toggle="modal" data-target="#donateModal">
                                DONATE NOW
                        </button>
                        </Link> */}
                        <br></br>
                        <Link to="/loginRequester">
                        <button className="btn btn-lg btn-secondary hidden-xs
                         bounceInUp animated slow" data-toggle="modal" data-target="#donateModal">
                               REQUEST NOW
                        </button>
                        </Link>
                        </div> 
                    </div>
                    </div>
                    <div className="item ">
                    <img src="assets/images/slider/home-slider-2.jpg" alt=""/>
                    <div className="container">
                        <div className="carousel-caption">
                        <h2 className="carousel-title bounceInDown animated slow">Together we can improve their lives</h2>
                        <h4 className="carousel-subtitle bounceInUp animated slow"> So let's do it !</h4>
                        <Link to="/loginDoner"><button className="btn btn-lg btn-secondary hidden-xs bounceInUp
                             animated slow" data-toggle="modal" data-target="#donateModal">
                                DONATE NOW
                             </button>
                             </Link>
                        <br></br>
                        <Link to="/loginRequester"> <button className="btn btn-lg btn-secondary hidden-xs
                         bounceInUp animated slow" data-toggle="modal" data-target="#donateModal">
                               REQUEST NOW
                        </button>
                        </Link>
                        </div> 
                    </div>
                    </div>
                    <div className="item ">
                    <img src="assets/images/slider/home-slider-3.jpg" alt=""/>
                    <div className="container">
                        <div className="carousel-caption">
                        <h2 className="carousel-title bounceInDown animated slow" >A penny is a lot of money, if you have not got a penny.</h2>
                        <h4 className="carousel-subtitle bounceInUp animated slow">You can make the diffrence !</h4>
                        <Link to="/loginDoner"><button className="btn btn-lg btn-secondary hidden-xs bounceInUp
                             animated slow" data-toggle="modal" data-target="#donateModal">
                               DONATE NOW
                             </button></Link>
                        <br></br>
                        <Link to="/loginRequester"><button className="btn btn-lg btn-secondary hidden-xs
                         bounceInUp animated slow" data-toggle="modal" data-target="#donateModal">
                                REQUEST NOW
                        </button></Link>
                        </div>
                    </div>
                    </div>
                </div>
                <a className="left carousel-control" href="#homeCarousel" role="button" data-slide="prev">
                    <span className="fa fa-angle-left" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#homeCarousel" role="button" data-slide="next">
                    <span className="fa fa-angle-right" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>


            <Reason/>


            <div className="section-home home-reasons">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="reasons-col fadeIn">
                                <img className="height100" src="assets/images/weCareAboutOthers.jpg" alt=""/>
                                <div className="reasons-titles">
                                    <h3 className="reasons-title">We fight together</h3>
                                    <h5 className="reason-subtitle">We are humans</h5>
                                </div>
                                <div className="on-hover hidden-xs">
                                        <p> Life as such is challenging and the humans have made it more complicated because life has fallen into className and categories where the rich are getting richer and the poor are dying for food. It is heart-wrenching to see this situation because people are suffering from hunger, lack of education and also some are homeless.</p>
                                        <p> We can fight in such a way that :</p>
                                        <p> One can join the fund raiser community or engage himself or herself with some organization who are involved in raising funds for the poor and needy people. They can join various activities and plan various strategies for fund raising like help in creating awareness in the society through various modes, conduct various shows like road shows, etc. They can organize activities and become an active member of an organization’s board or membership. Fund raising can involve donating items for free and holding auctions for those items. This would help raise funds.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="reasons-col fadeIn">
                                <img className="height100" src="assets/images/WeCareAboutOthers.jfif" alt=""/>
                                <div className="reasons-titles">
                                    <h3 className="reasons-title">WE care about others</h3>
                                    <h5 className="reason-subtitle">We are humans</h5>
                                </div>
                                <div className="on-hover hidden-xs">
                                        <p> The aging, homeless, and some sick people are some of those who are in need of help from those around them. The family is usually the primary source of this help because it is the closest. The church and the community also play a role in ensuring the wellbeing of the needy people. All the three units have some specific parts that they are expected to play with the aim of helping the needy. The family may facilitate the course by first helping those closest to them like the elderly. An adult child can take the initiative to assist his or her old parents. Some situations, however, may lead to family members seeking help from elsewhere. This point is where the church and the community come in. The church may help by providing some essential services like feeding and a place to sleep. The community, on the other hand, may generate the resources necessary for this work. Therefore, everyone has a part to play in helping the needy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
}

export default Home;