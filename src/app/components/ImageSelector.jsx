import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

export default class ImageSelector extends Component {
  state = {}
  onImageDrop = files => {
    this.setState({
      uploadedFile: files[0]
    })

    if (this.props.onImageDrop) {
      this.props.onImageDrop(files[0])
    }
  }

  render() {
    return (
      <div style={{ maxWidth: 900 }}>
        {this.state.uploadedFile ? (
          <img
            style={{ maxWidth: 900 }}
            src={this.state.uploadedFile.preview}
          />
        ) : (
          <Dropzone multiple={false} accept="image/*" onDrop={this.onImageDrop}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        )}
      </div>
    )
  }
}
