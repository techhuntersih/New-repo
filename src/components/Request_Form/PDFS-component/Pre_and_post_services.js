import React, { Component } from 'react';
import Pdf from "./pre_and_post_services.pdf"

class Download extends Component {

  render() {

    return (
        <div className = "App">
          <a href = {Pdf} target = "_blank">Download Pdf</a>
        </div>
    );

  }
}

export default Download;