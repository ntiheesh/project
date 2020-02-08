// Libraries
import React from "react";
import {Link} from "react-router-dom";

// Images
import makerLogoFooter from "images/maker-logo-footer.svg";

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="landing-footer">
          <div className="logo-block">
            <div className="line" />
           
          </div>
          <p>
            The disruptive decentralized network was developed by <a href="https://sauravjaiswalsj.github.io">Saurav Jaiswal</a> and Niteesh M.<br />
            Our dev team used decentralized network to encrypt the image signature.
          </p>
          <ul>
            <li><Link to="/help">FAQ</Link></li>
            <li><a href="https://sauravjaiswalsj.github.io">Github</a></li>
            <li><a href="https://www.linkedin.com/in/sauravjaiswalsj">Linkedin</a></li>
          </ul>
        </div>
      </React.Fragment>
    )
  }
}

export default Footer;
