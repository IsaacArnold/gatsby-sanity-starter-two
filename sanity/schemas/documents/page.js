export default {
  title: "Pages",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Page Label",
      name: "title",
      description:
        "This is only used in the CMS - will not display on the website",
      type: "string",
    },
    {
      title: "Page Title",
      name: "pagetitle",
      description: "This will be the main page and heading title.",
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
