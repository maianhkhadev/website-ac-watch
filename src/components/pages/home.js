import React, { Component } from 'react';
// LAYOUT
import Layout from '@/components/layouts/default'
// SECTIONS
import SectionHero from './home/section-hero'
import SectionOurStory from './home/section-our-story'
import SectionOurServices from './home/section-our-services'
import SectionStore from './home/section-store'
import SectionAboutUs from './home/section-about-us'
import SectionContactUs from './home/section-contact-us'

class Page extends Component {

  render() {
    return (
      <Layout>
        <div className="page page-home">

          <SectionHero />

          <SectionOurStory />

          <SectionOurServices />

          <SectionStore />

          <SectionAboutUs />

          <SectionContactUs />

        </div>
      </Layout>
    )
  }
}

export default Page
