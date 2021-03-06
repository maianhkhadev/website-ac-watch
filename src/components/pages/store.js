import React, { Component } from 'react';
// LAYOUT
import Layout from '@/components/layouts/default'
// SECTIONS
import PageHeader from '@/components/blocks/page-header'
import Section01 from './store/section-01'
import Section02 from './store/section-02'
import Section03 from './store/section-03'

class Page extends Component {

  render() {
    return (
      <Layout>
        <div className="page page-store">

          <PageHeader title="Store" />

          <Section01 />

          <Section02 />

          <Section03 />

        </div>
      </Layout>
    )
  }
}

export default Page
