// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Document schemas
import author from "./documents/author";
import category from "./documents/category";
import post from "./documents/post";
import siteSettings from "./documents/siteSettings";
import mainContent from "./documents/mainContent";
import tag from "./documents/tag";
import social from "./documents/social";

// Object types
import bodyPortableText from "./objects/bodyPortableText";
import bioPortableText from "./objects/bioPortableText";
import excerptPortableText from "./objects/excerptPortableText";
import mainImage from "./objects/mainImage";
import authorReference from "./objects/authorReference";
import feature from "./objects/feature";

// Plugs types
import hero from "./plugs/hero";
import socialCallout from "./plugs/socialCallout";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "bing",
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    hero,
    tag,
    feature,
    social,
    socialCallout,
    mainContent,
    siteSettings,
    post,
    category,
    author,
    mainImage,
    authorReference,
    bodyPortableText,
    bioPortableText,
    excerptPortableText,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ]),
});
