import React, { Component } from 'react';
// LAYOUT
import Layout from '@/components/layouts/default'
// SECTIONS
import PageHeader from '@/components/blocks/page-header'

class Page extends Component {

  render() {
    return (
      <Layout>
        <div className="page page-about-us">
          <PageHeader title="About Us" />
        </div>
      </Layout>
    )
  }
}

export default Page
