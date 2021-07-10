import React from "react";

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import SEO from "../components/seo";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title={data.sanityPage.openGraph.title} />
      <Hero />
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query HomeQuery {
    sanityPage(slug: { current: { eq: "besnik" } }) {
      openGraph {
        title
      }
    }
  }
`;
