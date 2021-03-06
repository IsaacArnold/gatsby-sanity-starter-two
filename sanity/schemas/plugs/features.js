export default {
  title: "Features",
  name: "features",
  type: "object",
  fields: [
    {
      title: "Label",
      name: "label",
      description: "Used to label the module in the cms",
      type: "string",
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Subheading",
      name: "subheading",
      type: "string",
    },
    {
      title: "Feature List",
      name: "featureList",
      type: "array",
      of: [
        {
          type: "feature",
        },
      ],
    },
  ],
};
