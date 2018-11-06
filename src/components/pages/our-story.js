import React, { Component } from 'react';
// LAYOUT
import Layout from '@/components/layouts/default'
// SECTIONS
import Section01 from './our-story/section-01'
import Section02 from './our-story/section-02'
import Section03 from './our-story/section-03'

class Page extends Component {
  render() {
    return (
      <Layout>
        <div className="page page-our-story">

          <Section01 />

          <Section02 />

          <Section03 />

        </div>
      </Layout>
    );
  }
}

export default Page
