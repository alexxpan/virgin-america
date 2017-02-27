import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div className="home">

        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <a className="navbar-left" href=""><img className="logo navbar__item" src="images/logo.png" alt="logo" /></a>
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li><a href="" className="navbar-default__item">BOOK</a></li>
                <li><a href="" className="navbar-default__item">CHECK IN</a></li>
                <li><a href="" className="navbar-default__item navbar-default__last">MANAGE</a></li>
              </ul>
              <ul className="nav navbar-nav">
                <li><a href="" className="navbar-default__item2">Deals</a></li>
                <li><a href="" className="navbar-default__item2">Flying With Us</a></li>
                <li><a href="" className="navbar-default__item2">Where We Fly</a></li>
                <li><a href="" className="navbar-default__item2">Fees</a></li>
                <li><a href="" className="navbar-default__item2">Flight Status</a></li>
                <li><a href="" className="navbar-default__item2">Flight Alerts</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li><a href="" className="navbar-default__item2 navbar-default__first">Sign In</a></li>
                <li><a href="" className="navbar-default__item2">Sign Up</a></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="notifs">
          Travel Advisories: San Francisco Weather, Merger Close with Alaska Airlines <a href="">More</a>
        </div>

        <div className="search">
          <div className="search__type radio">
            <label htmlFor="flight_type" className="radio-inline"><input type="radio" name="optradio" />Round Trip</label>
            <label htmlFor="flight_type" className="radio-inline"><input type="radio" name="optradio" />One Way</label>
            <label htmlFor="flight_type" className="radio-inline"><input type="radio" name="optradio" />Multi City</label>
          </div>
          <div className="search__where">
            <p>Where would you like to go?</p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-sm-4 text-left">
                <div className="form-group">
                  <label htmlFor="guest" className="search__label">Guest</label>
                  <input type="text" className="form-control" value="1 Adult" />
                </div>
              </div>
              <div className="col-sm-4 text-left">
                <div className="form-group">
                  <label htmlFor="from" className="search__label">From</label>
                  <input type="text" className="form-control" value="San Francisco" />
                </div>
              </div>
              <div className="col-sm-4 text-left">
                <div className="form-group">
                  <label htmlFor="to" className="search__label">To</label>
                  <input type="text" className="form-control" value="City" />
                </div>
              </div>
            </div>
          </div>
          <button type="button" className="btn btn-default btn-lg search__button">Search Flights</button>
        </div>

        <div className="deals">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 text-center">
                <img src="images/deals1.png" alt="deals1" className="deals__image" />
                <h1 className="deals__header">Time To Fly</h1>
                <p className="deals__description">Leave the nest for a hot spot with sweet low fares from $49 one way.</p>
                <button type="button" className="btn btn-default deals__button">GRAB A SEAT</button>
              </div>
              <div className="col-sm-4 text-center">
                <img src="images/deals2.png" alt="deals2" className="deals__image" />
                <h1 className="deals__header">Friends With Benefits</h1>
                <p className="deals__description">More flights, more rewards, and more to love with Alaska Airlines.</p>
                <button type="button" className="btn btn-default deals__button">LEARN MORE</button>
              </div>
              <div className="col-sm-4 text-center">
                <img src="images/deals3.png" alt="deals3" className="deals__image" />
                <h1 className="deals__header">Take Off Faster</h1>
                <p className="deals__description">Earn 10K points and let the perks fly with a Virgin America Visa Signature Card.</p>
                <button type="button" className="btn btn-default deals__button">LEARN MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="information">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 text-center information__border">
                <h1 className="information__header">TEST DRIVE EVERY SEAT.</h1>
                <img src="images/info1.png" alt="info1" className="information__image" />
                <p className="information__description">Want to see what its like to travel in style? Cruise though our mood-lit cabin with Google Street View. You can poke around first class or check out the view from your seat.</p>
                <button type="button" className="btn btn-default information__button">TAKE TOUR</button>
              </div>
              <div className="col-sm-2 text-center information__border">
                <h1 className="information__header">FIRST ONE ON, FIRST ONE OFF.</h1>
                <img src="images/info2.png" alt="info2" className="information__image" />
                <p className="information__description">In a hurry? Make a “B” line for the car with a preferred main cabin seat towards the front of the plane, or treat yourself to priority security and boarding for a small fee.</p>
                <button type="button" className="btn btn-default information__button">LEARN MORE</button>
              </div>
              <div className="col-sm-2 text-center information__border">
                <h1 className="information__header">FEEL THE UPRGADE.</h1>
                <img src="images/info3.png" alt="info3" className="information__image" />
                <p className="information__description">Travel in style with an upgrade to Main Cabin Select. Enjoy extra legroom, priority boarding and security, a checked bag, plus free movies, food and drinks. Live it up, way up.</p>
                <button type="button" className="btn btn-default information__button">EXPERIENCE IT</button>
              </div>
              <div className="col-sm-2 text-center information__border">
                <h1 className="information__header">GET YOUR APP OVER HERE.</h1>
                <img src="images/info4.png" alt="info4" className="information__image" />
                <p className="information__description">We just made “day of travel” a breeze with the new Virgin America App. Now you can book a flight, check-in, download your boarding pass, check flight status and more–on the fly.</p>
                <button type="button" className="btn btn-default information__button">DOWNLOAD APP</button>
              </div>
              <div className="col-sm-2 text-center information__border">
                <h1 className="information__header">MAKE BUSINESS A PLEASURE.</h1>
                <img src="images/info5.png" alt="info5" className="information__image" />
                <p className="information__description">Book flights for yourself, your company and your clients with our Corporate travel programs, including travel rewards through Elevate Inc. and sweet options to customize any trip.</p>
                <button type="button" className="btn btn-default information__button">LEARN MORE</button>
              </div>
              <div className="col-sm-2 text-center">
                <h1 className="information__header">PACK YOUR POINTS.</h1>
                <img src="images/info6.png" alt="info6" className="information__image" />
                <p className="information__description">Live large at 35,000 feet. Join Elevate and start racking up points, perks, and reward flights with no blackout dates. Available for a limited time only, hurry up and join today!</p>
                <button type="button" className="btn btn-default information__button">JOIN ELEVATE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="news">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 text-left news__border">
                <h1 className="news__header">Get Deals, Offers, and More.</h1>
                <p className="news__description">Sign up to receive special fares, promotional offers, and news.</p>
                <a className="news__description" href="">Virgin Americas Privacy Policy</a>
                <br /><br /><button type="button" className="btn btn-default news__button">Sign Up Now</button>
              </div>
              <div className="col-sm-6 text-left">
                <h1 className="news__header">News And Updates.</h1>
                <a className="news__description" href="">Alaska Airlines and Virgin America grow San Francisco hub with flights to popular destinations</a>
                <br /><a className="news__description" href="">Alaska Air Group Closes Acquisition Of Virgin America</a>
                <br /><a className="news__description" href="">Virgin America Celebrates Nine Years Of Making Flying Fun</a>
                <br /><a className="news__description" href="">Virgin America Expands Service To New York Area</a>
                <br /><br /><a href="" className="news__more">More News</a>
              </div>
            </div>
          </div>
        </div>

        <div className="links">
          <div className="container">
            <div className="row">
              <div className="col-sm-2 text-left">
                <a href="" className="links__link">Sitemap</a>
                <br /><a href="" className="links__link">Contact Us/FAQ</a>
                <br /><a href="" className="links__link">Contract of Carriage</a>
                <br /><a href="" className="links__link">Intl Contract of Carriage</a>
              </div>
              <div className="col-sm-2 text-left">
                <a href="" className="links__link">Blog</a>
                <br /><a href="" className="links__link">About Us</a>
                <br /><a href="" className="links__link">Press & Awards</a>
                <br /><a href="" className="links__link">All News & Updates</a>
              </div>
              <div className="col-sm-2 text-left">
                <a href="" className="links__link">Guest Services Commitment</a>
                <br /><a href="" className="links__link">Accessibility Services</a>
                <br /><a href="" className="links__link">Accessibility Services Form</a>
                <br /><a href="" className="links__link">Mobile App</a>
              </div>
              <div className="col-sm-2 text-left">
                <a href="" className="links__link">Corporate & Group Travel</a>
                <br /><a href="" className="links__link">Travel Agency</a>
                <br /><a href="" className="links__link">Travel Insurance</a>
                <br /><a href="" className="links__link">Careers</a>
              </div>
              <div className="col-sm-2 text-left">
                <a href="" className="links__link">What is Elevate?</a>
                <br /><a href="" className="links__link">Virgin America Credit Card</a>
                <br /><a href="" className="links__link">Advertise Onboard</a>
                <br /><a href="" className="links__link">Email Unsubscribe</a>
              </div>
              <div className="col-sm-2 text-left">
                <a href="" className="links__link">Tarmac Delay Contingency Plan</a>
                <br /><a href="" className="links__link">Investor Relations</a>
                <br /><a href="" className="links__link">Corporate Responsibility</a>
                <br /><a href="" className="links__link">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>

        <div className="purple">
          <br />
        </div>

      </div>
    );
  }
}

export default Home;
