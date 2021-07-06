export default {
  title: "Pages",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Page Title",
      description:
        "This is only used in the CMS - will not display on the website",
      name: "pageTitle",
      type: "string",
    },
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .slice(0, 200),
      },
    },
    {
      title: "Page Contents",
      name: "content",
      type: "array",
      of: [
        {
          type: "hero",
        },
        {
          type: "features",
        },
        {
          type: "socialCallout",
        },
        {
          type: "buttons",
        },
      ],
    },
    {
      title: "SEO Settings",
      name: "openGraph",
      type: "openGraph",
    },
  ],
};
