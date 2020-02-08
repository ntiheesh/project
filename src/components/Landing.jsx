// Libraries
import React from "react";
import Slider from "react-slick";
import {inject} from "mobx-react";

// Components
import WalletConnectMobile from "./WalletMobileConnect";

// Images
import welcomeHero from 'images/welcome-hero.svg';
// import metamaskLogo from 'images/metamask-logo.svg';
// import parityLogo from 'images/parity-logo.png';
// import ledgerNanoLogo from 'images/ledger-nano-logo.png';
// import trezorLogo from 'images/trezor-logo.png';
import { getStabilityFee } from "../utils/blockchain";

@inject("network")
class Landing extends React.Component {
  state = {
    stabilityFee: null,
    carouselSwipeStartOrig: null,
    carouselSwipeEndOrig: null
  }
  constructor(props) {
    super(props);
    this.sliderRef = React.createRef();
  }
  componentDidMount() {
    this.setState({
      carouselSwipeStartOrig: this.sliderRef.current.innerSlider.swipeStart,
      carouselSwipeEndOrig: this.sliderRef.current.innerSlider.swipeEnd
    });
    this.sliderRef.current.innerSlider.swipeStart = (e, swipe, draggable) => {
      document.querySelector('.slick-arrow.slick-prev').style.opacity = 0;
      document.querySelector('.slick-arrow.slick-next').style.opacity = 0;
      this.state.carouselSwipeStartOrig(e, swipe, draggable);
    }
    this.sliderRef.current.innerSlider.swipeEnd = (e, spec) => {
      document.querySelector('.slick-arrow.slick-prev').style.opacity = 0.9;
      document.querySelector('.slick-arrow.slick-next').style.opacity = 0.9;
      this.state.carouselSwipeEndOrig(e, spec);
    }
    getStabilityFee().then(feeInHexa => {
      this.setState({ stabilityFee: feeInHexa.toFixed(2) });
    })
  }
  render() {
    function PrevButton(props) {
      const { className, style, onClick } = props;
      return (
        <svg className={className} style={{ ...style }} onClick={onClick} enableBackground="new 0 0 240.823 240.823" viewBox="0 0 240.823 240.823" xmlns="http://www.w3.org/2000/svg">
          <path d="m57.633 129.007 108.297 108.261c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0l-108.297 108.26c-4.679 4.691-4.679 12.511.012 17.191z" />
        </svg>
      );
    }
    function NextButton(props) {
      const { className, style, onClick } = props;
      return (
        <svg className={className} style={{ ...style }} onClick={onClick} enableBackground="new 0 0 240.823 240.823" viewBox="0 0 240.823 240.823" xmlns="http://www.w3.org/2000/svg">
          <path d="m183.189 111.816-108.297-108.261c-4.752-4.74-12.451-4.74-17.215 0-4.752 4.74-4.752 12.439 0 17.179l99.707 99.671-99.695 99.671c-4.752 4.74-4.752 12.439 0 17.191 4.752 4.74 12.463 4.74 17.215 0l108.297-108.261c4.68-4.691 4.68-12.511-.012-17.19z" />
        </svg>
      );
    }
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      prevArrow: <PrevButton />,
      nextArrow: <NextButton />
    };

    return (
      <div className="landing">

        <div className="landing-body">
          <h1>Welcome to the<br />Decentralized Banking Network</h1>
          {
            this.props.network.isMobileWeb3Wallet && <WalletConnectMobile />
          }
          <Slider ref={this.sliderRef} {...settings} className="landing-slider">
            <div className="first-slide">
              <div style={{ textAlign: "center" }}>
                <p className="align-center">
                  This is the place to generate <br />
                  and encrypt your data and <br />
                  encrypting the signature over the network.
                </p>
                <img className="preview" src={welcomeHero} alt="CDP Portal" />
              </div>
            </div>
            <div>
              <div className="info-slide">
                <h1>01.<span className="line"></span>THE CONCEPT</h1>
                <h2 className="sm">What is a Decentralized Banking network?</h2>
                <p>The network allows you encrpt your important data and along with vulnerable signature.
                 We have developed a netwrok where you can save all your valuable information without thinking of getting it hacked. </p>
              </div>
            </div>
            <div>
              <div className="info-slide">
                <h1>02.<span className="line"></span>THE Network</h1>
                <h2>What we proposed?</h2>
                <p>We used the latest blockchain technique to encrpt the vulnerable signature's and store it over the ipfs network over the decentralized network</p>
              </div>
            </div>
            <div>
              <div className="info-slide">
                <h1>05.<span className="line"></span>THE Hack</h1>
                <h2>What we did?</h2>
                <p> We used the disruptive blockchain technology to encrypt the data using SHA 256 Algorithms and stored the information using IPFS protocol over the netwok.</p>
              </div>
            </div>
          </Slider>

          <div className="getting-started">
            <h1>What do I need to get started?</h1>
            <p>Connect your bank account over the network and upload the signature over disruptive distribuded decentralized network and wait till it verify the uploaded image with stored data over IPFS.</p>
            <span>
            <p className="align-center">See FAQs for additional information on wallets</p>
            <ul>
              
            </ul>
            </span>
          </div>
        </div>

      </div>
    );
  }
}

export default Landing;
