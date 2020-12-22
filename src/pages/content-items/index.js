import React from 'react'
import Layout from '../../components/Layout'
import PageTitle from '../../components/PageTitle'
import ContentRoll from '../../components/ContentRoll'

export default class ContentIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <PageTitle title="Mega (Recent) Content List" />

        <section className="section">
          <div className="container content">
            <ContentRoll />
          </div>
        </section>
      </Layout>
    )
  }
}
