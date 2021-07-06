import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";

const Hero = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          sanityPage {
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
          />
          <h2 className="content-heading">
            {data.sanityPage.content[0].heading}
          </h2>
          <p>{data.sanityPage.content[0].subheading}</p>
          <Link to="/">{data.sanityPage.content[0].buttonOne}</Link>
          <Link to="/">{data.sanityPage.content[0].buttonTwo}</Link>
        </section>
      )}
    />
  );
};

export default Hero;
