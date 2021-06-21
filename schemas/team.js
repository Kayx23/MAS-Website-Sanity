export default {
  name: 'team',
  title: 'Team',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
    },
    {
      name: 'headshot',
      title: 'Headshot',
      type: 'image',
      options: { hotspot: true, },
    },
    {
      title: 'Bio',
      name: 'bio',
      type: 'text',
    },
    // Ordering: this allows the document to show up in Order Documents
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
