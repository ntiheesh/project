// Libraries
import React from "react";
import {inject, observer} from "mobx-react";
import NewProfile from './NewProfile';
// Utils
import {getWebClientProviderName} from "../utils/blockchain";
import walletIcons from "./WalletIcons";
import {Link} from "react-router-dom";
@inject("network")
@observer
class WalletClientSelector extends React.Component {
  render() {
    const providerName = getWebClientProviderName();
    return (
      <div className="frame no-account">
        <div className="heading">
          <h2>Signature Encryption</h2>
        </div>
        <section className="content">
          <div className="helper-text no-wrap">Menu</div>
          <a href="#action" onClick={ e => { e.preventDefault(); this.props.network.setWeb3WebClient() } } className="web-wallet">
          {
            providerName ?
              <React.Fragment>
                <div className="provider-icon">{ walletIcons.hasOwnProperty(providerName) ? walletIcons[providerName] : walletIcons["web"] }</div>
                { this.props.formatClientName(providerName) }
              </React.Fragment>
            :
              <React.Fragment>
                <div className="provider-icon">{ walletIcons["web"] }</div>
                {this.props.network.isMobile ? "Mobile" : "Web"} Portal
              </React.Fragment>
          }
          </a>
          {
          navigator.userAgent.toLowerCase().indexOf("firefox") === -1 &&
          <a href="#action" onClick={ e => { e.preventDefault(); this.props.network.showHW("ledger") } }>
            <div className="provider-icon">{ walletIcons["ledger"] }</div>
            Verify a Digital Signature
          </a>
          }
          <a href="#action" onClick={()=>{
              const name=window.prompt("Enter UserName");
              const password=window.prompt(`Hello ${name} !Enter Password`);
          }}>
          <div className="provider-icon">{ walletIcons["trezor"] }</div>
            Open Profile
          </a>
        
          <a href="#action" onClick={ e => { e.preventDefault(); this.props.network.showHW("open-account") } }>
            <div className="provider-icon">{ walletIcons["trezor"] }</div>
           <span>Create a new Profile  </span> 
          </a>
          <a href="#action" onClick={ e => { e.preventDefault(); this.props.network.startWalletLink() } }>
            <div className="provider-icon">{ walletIcons["walletlink"] }</div>
            Admin
          </a>
        </section>
      </div>
    )
  }
}

export default WalletClientSelector;
