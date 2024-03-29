import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import React from 'react';

import styles from './index.module.css';

/*
  This is the page at '/'.
  - to change the user image, upload a new on my github profile.
*/
function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.banner}>
      <div>
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.tagline}</p>
      </div>
      <img
        className={styles.banner__avatar}
        src="https://avatars.githubusercontent.com/u/36555768?v=4"
        alt="me"
      />
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description="Software Engineer, Full Stack Developer, and Open Source Enthusiast.">
      <HomepageHeader />
      <main></main>
    </Layout>
  );
}
