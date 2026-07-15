import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const asset = (name) => path.resolve(scriptDirectory, '..', '..', 'assets', name)
const client = getCliClient({apiVersion: '2026-07-12'}).withConfig({useCdn: false})

const leaders = [
  {
    name: 'Joseph Antwi',
    title: 'Mr',
    role: 'Senior Policy Analyst',
    qualification: 'Research and Policy Analysis',
    employment: 'Government of Alberta, Canada',
    assembly: 'Assin Akropong',
    imagePath: asset('team-joseph-antwi.png'),
  },
  {
    name: 'Anthony Kobina Odum Arthur',
    title: 'Elder',
    role: 'Marketing Consultant',
    qualification: 'Chartered Marketer, MCIM',
    assembly: 'Living Spring Assembly, New Mamprobi Area',
    imagePath: asset('team-anthony-arthur.jpg'),
  },
  {
    name: 'Francis Donkor',
    title: 'Mr',
    role: 'Auditor',
    qualification: 'ACCA',
    employment: 'BDO UK, Bridgewater House, Bristol - UK',
    assembly: 'Odorkor Central',
    imagePath: asset('team-francis-donkor.jpeg'),
    bio: [
      'Francis Donkor is an ACCA-qualified accountant and finance professional with experience in audit, financial reporting, and business advisory. He has worked with leading international firms, including BDO UK and EY Ghana, serving clients across a variety of industries.',
      "As a Christian, Francis is passionate about integrating faith with excellence in the workplace. He believes that business is a platform to honour God, serve others with integrity, and create lasting value. He is committed to ethical leadership, continuous learning, and using his professional skills to positively impact organisations and communities.",
      "Outside of work, Francis enjoys mentoring young professionals, supporting personal and professional development, and building meaningful relationships with like-minded believers. Through the Christ Business Network, he looks forward to connecting with fellow Christian professionals and entrepreneurs, growing in faith, sharing knowledge, and encouraging others to pursue excellence while advancing God's Kingdom through business.",
    ],
  },
  {
    name: 'Aaron Akusem Akutteh',
    title: 'Ing.',
    role: 'Regional Engineer, Ashanti Region',
    qualification: 'GHIE PE',
    employment: 'National Communications Authority',
    assembly: 'Santasi, Daaban Area',
    imagePath: asset('team-aaron-akutteh.jpeg'),
  },
  {
    name: 'Racheal Boateng',
    title: 'Ms',
    role: 'Journalist',
    qualification: 'Journalist',
    assembly: 'Upper Room Assembly, Odorkor Branch',
    imagePath: asset('team-racheal-boateng.jpeg'),
  },
]

const toPortableText = (paragraphs = []) => paragraphs.map((paragraph, index) => ({
  _key: `paragraph-${index + 1}`,
  _type: 'block',
  style: 'normal',
  markDefs: [],
  children: [{_key: `span-${index + 1}`, _type: 'span', marks: [], text: paragraph}],
}))

for (const [index, leader] of leaders.entries()) {
  if (!fs.existsSync(leader.imagePath)) throw new Error(`Missing image: ${leader.imagePath}`)

  const existing = await client.fetch(
    '*[_type == "leader" && name == $name][0]{_id, portrait{asset->{_id}}}',
    {name: leader.name},
  )

  let assetId = existing?.portrait?.asset?._id
  if (!assetId) {
    const uploaded = await client.assets.upload('image', fs.createReadStream(leader.imagePath), {
      filename: path.basename(leader.imagePath),
      source: {id: `leader-${path.basename(leader.imagePath)}`, name: 'CBN leader profiles'},
    })
    assetId = uploaded._id
  }

  const values = {
    _type: 'leader',
    name: leader.name,
    title: leader.title,
    role: leader.role,
    qualification: leader.qualification,
    ...(leader.employment ? {employment: leader.employment} : {}),
    assembly: leader.assembly,
    portrait: {
      _type: 'image',
      alt: `${leader.name}, ${leader.role}`,
      asset: {_type: 'reference', _ref: assetId},
    },
    ...(leader.bio ? {bio: toPortableText(leader.bio)} : {}),
    displayOrder: index + 1,
    isPublished: true,
  }

  if (existing?._id) {
    const {_type, ...patchValues} = values
    await client.patch(existing._id).set(patchValues).commit()
    console.log(`Updated ${leader.name}`)
  } else {
    await client.create(values)
    console.log(`Created ${leader.name}`)
  }
}

console.log(`Seeded ${leaders.length} editable leader profiles.`)
