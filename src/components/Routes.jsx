// Libraries
import React from "react";
import {observer} from "mobx-react";
import {Route, Switch, withRouter} from "react-router-dom";
import ReactGA from 'react-ga';
import mixpanel from 'mixpanel-browser';

// Components
import Help from "./Help";
import HelpItem from "./HelpItem";
import Home from "./Home";
import NotFound from "./NotFound";
import Terms from "./Terms";
import NewProfile from './NewProfile';
@withRouter
@observer
class Routes extends React.Component {
  componentDidUpdate = prevProps => {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
    console.debug(`[Analytics] Tracked: ${this.props.location.pathname}`);
    ReactGA.pageview(this.props.location.pathname);
    mixpanel.track('Pageview', { product: 'scd-cdp-portal' });
  }

  render() {
    return (
      <Switch>
        <Route exact path="/help" title="Signature Encryption: Help" component={ Help } />
        <Route path="/help/:helpId" title="Signature Encryption: Help" component={ HelpItem } />
        <Route exact path="/" title="Signature Encryption" component={ Home } />
        <Route component={NewProfile} />
        <Route component={ NotFound } />
      </Switch>
    )
  }
}

export default Routes;
