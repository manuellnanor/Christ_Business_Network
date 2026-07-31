import UserIcon from '@sanity/icons/User'
import {defineArrayMember, defineField, defineType} from 'sanity'

export default defineType({
  name: 'member',
  title: 'Member',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'For example: Mr, Mrs, Elder, Ing.',
    }),
    defineField({
      name: 'role',
      title: 'Professional Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'portrait',
      title: 'Profile Photo',
      type: 'image',
      options: {hotspot: true},
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
          validation: (rule) => rule.required(),
        }),
      ],
    }),
    defineField({name: 'qualification', title: 'Professional Qualification', type: 'string'}),
    defineField({name: 'employment', title: 'Current Employment', type: 'string'}),
    defineField({name: 'assembly', title: 'Local Assembly', type: 'string'}),
    defineField({name: 'email', title: 'Email', type: 'email', group: 'private'}),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'string',
      group: 'private',
      options: {list: ['Female', 'Male']},
    }),
    defineField({name: 'dateOfBirth', title: 'Date of Birth', type: 'date', group: 'private'}),
    defineField({
      name: 'phoneNumbers',
      title: 'Phone Numbers',
      type: 'array',
      group: 'private',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'educationLevel', title: 'Education Level', type: 'string'}),
    defineField({
      name: 'institutions',
      title: 'Educational Institutions',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
    }),
    defineField({name: 'profession', title: 'Profession', type: 'string'}),
    defineField({
      name: 'preferredAreas',
      title: 'Preferred Areas of Service',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {layout: 'tags'},
    }),
    defineField({
      name: 'photoSourceUrl',
      title: 'Original Photo Link',
      type: 'url',
      description: 'Source link retained when the profile photo cannot be imported automatically.',
    }),
    defineField({
      name: 'bio',
      title: 'Profile / Biography',
      type: 'array',
      of: [defineArrayMember({type: 'block'})],
    }),
    defineField({
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 100,
      validation: (rule) => rule.integer().min(0),
    }),
    defineField({
      name: 'isPublished',
      title: 'Show on Website',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'importKey',
      title: 'Import Key',
      type: 'string',
      readOnly: true,
      hidden: true,
    }),
  ],
  groups: [{name: 'private', title: 'Private contact details'}],
  orderings: [
    {
      title: 'Display order',
      name: 'displayOrderAsc',
      by: [{field: 'displayOrder', direction: 'asc'}],
    },
  ],
  preview: {
    select: {title: 'name', subtitle: 'role', media: 'portrait'},
  },
})
