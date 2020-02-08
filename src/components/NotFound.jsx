// Libraries
import React from "react";

// Images
import image404 from "images/404.svg";

class NotFound extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="not-found">
          <div className="not-found-text-container-1">
            <div className="not-found-text-container-2">
             
              <h1>Page not found – Error 404</h1>
              <h2>You spotted a black hole.</h2>
              <p>Don’t go too close – it sucks up<br />pages and contents.</p>
            </div>
            <img src={ image404 } draggable="false" alt="You spotted a black hole" />
          </div>
        </div>
        <div className="not-found-2">
          <div className="not-found-text-container-1">
            <p>We are confident you will find what you were<br />looking for on the main page.</p>
            <button className="text-btn" onClick={ () => { window.location = '/'; }}>GO TO MAIN PAGE</button>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default NotFound;
