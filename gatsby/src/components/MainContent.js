import React from "react";
import { StaticQuery, graphql } from "gatsby";

const MainContent = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          sanityPage {
            title
            content {
              ... on SanityHero {
                heading
                label
                subheading
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          <section>
            <h2 className="content-heading">{data.sanityPage.title}</h2>
            <p>{data.sanityPage.content.subheading}</p>
          </section>
        </div>
      )}
    />
  );
};

export default MainContent;
