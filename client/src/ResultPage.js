import React, { Component } from 'react'
import $ from 'jquery'
export default class ResultPage extends Component {
  render() {
    return (
     
      <div>
          {/* <iframe className="embedSite" src={this.props.location.state.source_url}></iframe> */}

          <embed className="embedSite" src={this.props.location.state.source_url}></embed>
      </div>
    )
  }
}
