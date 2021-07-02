export default {
  name: "mainContent",
  type: "document",
  title: "Main Content",
  fields: [
    {
      name: "sections",
      type: "string",
      title: "Title",
    },
    {
      name: "text",
      type: "array",
      of: [{ type: "block" }],
      title: "Content",
    },
    {
      name: "textTwo",
      type: "array",
      of: [{ type: "block" }],
      title: "Content Two",
    },
  ],
};
