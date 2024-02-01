export default {
  title: 'Notice',
  name: 'notice',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
    },
    {
      title: 'Thumbnail',
      name: 'thumbnail',
      type: 'image',
    },
  ],
  preview: {
    select: {title: 'title', media: 'thumbnail'},
  },
}
