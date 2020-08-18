import createSchema from "part:@sanity/base/schema-creator";
import schemaTypes from "all:part:@sanity/base/schema-type";

export default createSchema({
  name: "Masks for Humanity",
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
          options: {
            storeOriginalFilename: false,
            hotspot: true,
          },
        },
        {
          title: "Title",
          name: "title",
          type: "string",
          required: true,
        },
      ],
    },
    {
      name: "sponsor",
      type: "document",
      title: "Sponsor",
      fields: [
        {
          name: "name",
          type: "string",
          required: true,
        },
        {
          name: "logo",
          type: "image",
          required: true,
        },
      ],
    },
  ]),
});
