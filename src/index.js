import React from 'react'
import Dropzone from 'react-dropzone'
import s3Upload from './s3upload'

class DragNDropToS3 extends React.PureComponent {
  constructor() {
    super()
    this.handleDrop = this.handleDrop.bind(this)
  }

  handleDrop(files) {
    new s3Upload({ ...this.props.s3UploaderProps, files })
  }

  render() {
    return (
      <Dropzone {...this.props.dropzoneProps} onDrop={this.handleDrop}>
        {dropzoneState => this.props.children(dropzoneState)}
      </Dropzone>
    )
  }
}

export default DragNDropToS3
