import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "Masks for Solidarity",
  types: schemaTypes.concat([
    {
      name: "gallery",
      type: "document",
      title: "Gallery",
      fields: [
        {
          name: "photo",
          type: "image",
          required: true,
        },
        {
          title: "Title",
          name: "title",
          type: "string",
          required: false,
        },
      ],
    },
  ]),
});
