import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
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
      name: 'featuredImage',
      title: 'Featured Image',
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
    }),

    defineField({
      name: 'excerpt',
      title: 'Short Description',
      type: 'text',
      rows: 3,
    }),

    defineField({
      name: 'details',
      title: 'Full Event Details',
      type: 'array',
      of: [{type: 'block'}],
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date and Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'endDate',
      title: 'End Date and Time',
      type: 'datetime',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'string',
    }),

    defineField({
      name: 'organizer',
      title: 'Organizer',
      type: 'string',
    }),

    defineField({
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),

    defineField({
      name: 'status',
      title: 'Event Status',
      type: 'string',
      options: {
        list: [
          {title: 'Upcoming', value: 'upcoming'},
          {title: 'Ongoing', value: 'ongoing'},
          {title: 'Completed', value: 'completed'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
        layout: 'radio',
      },
      initialValue: 'upcoming',
      validation: (Rule) => Rule.required(),
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
      media: 'featuredImage',
      date: 'startDate',
    },

    prepare({title, media, date}) {
      return {
        title,
        subtitle: date
          ? new Date(date).toLocaleDateString()
          : 'No date selected',
        media,
      }
    },
  },
})