import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'galleryAlbum',
  title: 'Gallery Album',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Album Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'coverImage',
      title: 'Album Cover Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'albumDate',
      title: 'Album Date',
      type: 'date',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'images',
      title: 'Album Images',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'galleryImage',
          title: 'Gallery Image',
          type: 'object',

          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
              validation: (Rule) => Rule.required(),
            }),

            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),

            defineField({
              name: 'alt',
              title: 'Alternative Text',
              type: 'string',
            }),

            defineField({
              name: 'displayOrder',
              title: 'Display Order',
              type: 'number',
              initialValue: 0,
            }),
          ],

          preview: {
            select: {
              title: 'caption',
              media: 'image',
            },

            prepare({title, media}) {
              return {
                title: title || 'Gallery image',
                media,
              }
            },
          },
        }),
      ],
    }),

    defineField({
      name: 'displayOrder',
      title: 'Album Display Order',
      type: 'number',
      initialValue: 0,
    }),

    defineField({
      name: 'isPublished',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
      date: 'albumDate',
    },

    prepare({title, media, date}) {
      return {
        title,
        subtitle: date || 'No date selected',
        media,
      }
    },
  },
})