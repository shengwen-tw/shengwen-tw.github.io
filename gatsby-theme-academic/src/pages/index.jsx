import React from 'react';

import AboutMe from '../components/PageFragments/HomePage/AboutMe';
import Awards from '../components/PageFragments/HomePage/Awards';
import Experience from '../components/PageFragments/HomePage/Experience';
import SelectedResearch from '../components/PageFragments/HomePage/SelectedResearch';
import SEO from '../components/Seo';
import { useSiteMetadata } from '../utils/hooks';

export default () => {
  const siteMetadata = useSiteMetadata();

  return (
    <>
      <SEO
        title="About"
        description={siteMetadata.description}
        path=""
        keywords={[
          siteMetadata.author,
          siteMetadata.authorAlternative,
          'robotics',
          'embedded systems',
          'system software',
        ]}
      />
      <AboutMe />
      <Experience />
      <Awards />
      <SelectedResearch />
    </>
  );
};
