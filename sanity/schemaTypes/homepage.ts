import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'TIAMAT Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroEyebrow',
      title: 'Hero Eyebrow',
      type: 'string',
      initialValue: 'تیامات / TIAMAT',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'primaryCtaHref',
      title: 'Primary CTA Link',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaHref',
      title: 'Secondary CTA Link',
      type: 'string',
    }),

    defineField({
      name: 'aboutTitle',
      title: 'About Section Title',
      type: 'string',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Section Text',
      type: 'text',
    }),

    defineField({
      name: 'offerings',
      title: 'Offerings',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'experiences',
      title: 'Journeys / Workshops / Experiences',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  {title: 'Journey', value: 'journey'},
                  {title: 'Workshop', value: 'workshop'},
                  {title: 'Retreat', value: 'retreat'},
                  {title: 'Event', value: 'event'},
                ],
              },
            }),
            defineField({
              name: 'location',
              title: 'Location',
              type: 'string',
            }),
            defineField({
              name: 'dateText',
              title: 'Date Text',
              type: 'string',
              description: 'Example: Summer 2026, Coming soon, or 12–14 July 2026',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'faq',
      title: 'FAQ',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
            }),
          ],
        },
      ],
    }),

    defineField({
      name: 'telegramUrl',
      title: 'Telegram URL',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'string',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),

    defineField({
      name: 'seoTitle',
      title: 'SEO Title',
      type: 'string',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
    }),
  ],
})
