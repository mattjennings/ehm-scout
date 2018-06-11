import React from 'react'
import axios from '../util/axios'

import Layout from '../components/Layout'

export default class IndexPage extends React.Component {
  static async getInitialProps(context) {
    return {}
  }
  render() {
    return (
      <Layout>
        <div>hello world</div>
      </Layout>
    )
  }
}
