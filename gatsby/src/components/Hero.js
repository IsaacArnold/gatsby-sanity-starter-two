import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          sanityPage(slug: { current: { eq: "besnik" } }) {
            content {
              ... on SanityHero {
                label
                subheading
                heading
                buttonOne
                buttonTwo
                heroImage {
                  asset {
                    gatsbyImageData(layout: CONSTRAINED)
                  }
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <section className="hero-section">
          <GatsbyImage
            image={data.sanityPage.content[0].heroImage.asset.gatsbyImageData}
            alt="Image"
            className="hero-img"
          />
          <div className="hero-content">
            <h2 className="content-heading">
              {data.sanityPage.content[0].heading}
            </h2>
            <p>{data.sanityPage.content[0].subheading}</p>
            <div className="hero-btns">
              <Link to="/" className="btn-one">
                {data.sanityPage.content[0].buttonOne}
              </Link>
              <Link to="/" className="btn-two">
                {data.sanityPage.content[0].buttonTwo}
              </Link>
            </div>
          </div>
        </section>
      )}
    />
  );
};

export default Hero;
