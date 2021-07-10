import React from "react";
import { StaticQuery, graphql } from "gatsby";
import SEO from "../components/seo";
import Layout from "../components/Layout";

const Portfolio = () => {
  return (
    <StaticQuery
      query={graphql`
        query PortfolioQuery {
          sanityPage(slug: { current: { eq: "portfolio" } }) {
            content {
              ... on SanityHero {
                heading
                subheading
              }
            }
            pagetitle
            openGraph {
              title
            }
          }
        }
      `}
      render={(data) => (
        <Layout>
          <section className="hero-section">
            <SEO title={data.sanityPage.openGraph.title} />
            <div className="hero-content">
              <h2 className="content-heading">
                {data.sanityPage.content[0].heading}
              </h2>
              <p>{data.sanityPage.content[0].subheading}</p>
            </div>
          </section>
        </Layout>
      )}
    />
  );
};

export default Portfolio;
