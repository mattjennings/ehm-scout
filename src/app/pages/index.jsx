import React from 'react'
import { css } from 'emotion'
import { Button } from '@material-ui/core'
import axios from '../util/axios'
import Layout from '../components/Layout'
import ImageSelector from '../components/ImageSelector'
import { map } from 'lodash'

const classes = {
  root: css`
    .details {
      display: grid;
      grid-template-columns: auto 400px;
      justify-items: center;
      justify-content: center;
      grid-gap: 10px;
    }
  `
}
export default class IndexPage extends React.Component {
  state = {
    file: null,
    scout: null,
    injuryConcerns: null,
    careerRole: null,
    projection: null,
    attributes: null
  }
  onImageDrop = async file => {
    this.setState({ file })
  }

  upload = async file => {
    const formData = new FormData()
    formData.append('file', file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    const res = await axios.post('/api/v1/translate-scout', formData, config)

    console.log(res.data.attributes)
    this.setState({
      scout: res.data.scout,
      injuryConcerns: res.data.injuryConcerns,
      careerRole: res.data.careerRole,
      projection: res.data.projection,
      attributes: res.data.attributes
    })
  }

  renderAttributes = () => {
    if (this.state.attributes) {
      const items = map(this.state.attributes, (value, key) => (
        <li key={key}>
          {key}: {value.min ? `< ${value.min}` : `>= ${value.max}`}
        </li>
      ))
      return <ul>{items}</ul>
    }

    return null
  }

  render() {
    return (
      <Layout className={classes.root}>
        <div className="details">
          <ImageSelector onImageDrop={this.onImageDrop} />
          <div>
            <div>
              <strong>Scout</strong>: {this.state.scout}
            </div>
            <div>
              <strong>Career Role</strong>: {this.state.careerRole}
            </div>
            <div>
              <strong>Projection</strong>: {this.state.projection}
            </div>
            <div>
              <p>Attributes</p>
              {this.renderAttributes()}
            </div>
          </div>
          <Button
            className="upload-button"
            onClick={() => this.upload(this.state.file)}
          >
            Upload
          </Button>
        </div>
      </Layout>
    )
  }
}
