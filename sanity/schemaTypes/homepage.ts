import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'TIAMAT Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'headerTitle',
      title: 'Header Title',
      type: 'string',
      initialValue: 'TIAMAT',
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      initialValue: 'سفرهایی میان آسمان و بدن',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Description',
      type: 'text',
      initialValue:
        'تیامات تجربه‌هایی برای دیدن آسمان، فهمیدن ریتم طبیعت، و بازگشت به سکوت درون می‌سازد؛ با نجوم مقدماتی، رصد آسمان شب، یوگا، تنفس و سفرهای آگاهانه.',
    }),
    defineField({
      name: 'experiencesTitle',
      title: 'Experiences Title',
      type: 'string',
      initialValue: 'برنامه‌های پیش رو',
    }),
    defineField({
      name: 'experiencesDescription',
      title: 'Experiences Description',
      type: 'text',
      initialValue:
        'تجربه‌ای را انتخاب کن که با ریتم این روزهایت هماهنگ است؛ از رصد آرام تا کارگاه‌های نجوم.',
    }),
    defineField({
      name: 'experiences',
      title: 'Experiences',
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
            }),
            defineField({
              name: 'duration',
              title: 'Duration',
              type: 'string',
            }),
            defineField({
              name: 'capacity',
              title: 'Capacity',
              type: 'string',
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
            }),
            defineField({
              name: 'level',
              title: 'Level',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'guidesTitle',
      title: 'Guides Title',
      type: 'string',
      initialValue: 'راهنماها و همراهان',
    }),
    defineField({
      name: 'guidesDescription',
      title: 'Guides Description',
      type: 'text',
      initialValue:
        'کسانی که آسمان، بدن و طبیعت را می‌شناسند و سفر را آرام و امن همراهی می‌کنند.',
    }),
    defineField({
      name: 'guides',
      title: 'Guides',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'bio',
              title: 'Bio',
              type: 'text',
            }),
            defineField({
              name: 'tags',
              title: 'Tags',
              type: 'array',
              of: [{type: 'string'}],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'galleryTitle',
      title: 'Gallery Title',
      type: 'string',
      initialValue: 'لحظه‌هایی از سفر',
    }),
    defineField({
      name: 'galleryDescription',
      title: 'Gallery Description',
      type: 'text',
      initialValue: 'تکه‌هایی از شب‌های پرستاره، سکوت طبیعت و حضورِ آرام در کنار هم.',
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'caption',
              title: 'Caption',
              type: 'string',
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'testimonialsTitle',
      title: 'Testimonials Title',
      type: 'string',
      initialValue: 'تجربه همراهان',
    }),
    defineField({
      name: 'testimonialsDescription',
      title: 'Testimonials Description',
      type: 'text',
      initialValue: 'چند روایت کوتاه از کسانی که شبی را با تیامات زیر آسمان گذرانده‌اند.',
    }),
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Name',
              type: 'string',
            }),
            defineField({
              name: 'role',
              title: 'Role',
              type: 'string',
            }),
            defineField({
              name: 'text',
              title: 'Text',
              type: 'text',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'footerTitle',
      title: 'Footer Title',
      type: 'string',
      initialValue: 'TIAMAT',
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Description',
      type: 'text',
      initialValue:
        'میان آسمان و بدن؛ سفرهایی برای دیدن ستاره‌ها، شنیدن سکوت و بازگشت به ریتم طبیعت.',
    }),
    defineField({
      name: 'telegramUrl',
      title: 'Telegram URL',
      type: 'string',
      initialValue: 'https://t.me/tiamatjourneys',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'string',
      initialValue: 'https://instagram.com/tiamatjourneys',
    }),
  ],
})
