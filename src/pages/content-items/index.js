import React from 'react'

import Layout from '../../components/Layout'
import ContentRoll from '../../components/ContentRoll'

export default class ContentIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <h1
          className="has-text-weight-bold is-size-1"
          style={{
            boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',
          }}
        >
          Mega Content List
        </h1>

        <section className="section">
          <div className="container">
            <div className="content">
              <ContentRoll />
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}
