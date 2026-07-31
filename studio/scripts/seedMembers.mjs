import fs from 'node:fs'
import path from 'node:path'
import {fileURLToPath} from 'node:url'
import {getCliClient} from 'sanity/cli'

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const asset = (name) => path.resolve(scriptDirectory, '..', '..', 'assets', name)
const client = getCliClient({apiVersion: '2026-07-18'}).withConfig({useCdn: false})

const members = [
  {
    importKey: 'joseph-antwi',
    name: 'Joseph Antwi',
    title: 'Mr',
    role: 'Senior Policy Analyst',
    qualification: 'Research and Policy Analysis',
    employment: 'Government of Alberta, Canada',
    assembly: 'Assin Akropong',
    imagePath: asset('team-joseph-antwi.png'),
  },
  {
    importKey: 'anthony-kobina-odum-arthur',
    name: 'Anthony Kobina Odum Arthur',
    title: 'Elder',
    role: 'Marketing Consultant',
    qualification: 'Chartered Marketer, MCIM',
    assembly: 'Living Spring Assembly, New Mamprobi Area',
    imagePath: asset('team-anthony-arthur.jpg'),
  },
  {
    importKey: 'francis-donkor',
    name: 'Francis Donkor',
    title: 'Mr',
    role: 'Auditor',
    qualification: 'ACCA',
    employment: 'BDO UK, Bridgewater House, Bristol - UK',
    assembly: 'Odorkor Central',
    imagePath: asset('team-francis-donkor.jpeg'),
    bio: [
      'Francis Donkor is an ACCA-qualified accountant and finance professional with experience in audit, financial reporting, and business advisory. He has worked with leading international firms, including BDO UK and EY Ghana, serving clients across a variety of industries.',
      'As a Christian, Francis is passionate about integrating faith with excellence in the workplace. He believes that business is a platform to honour God, serve others with integrity, and create lasting value. He is committed to ethical leadership, continuous learning, and using his professional skills to positively impact organisations and communities.',
      "Outside of work, Francis enjoys mentoring young professionals, supporting personal and professional development, and building meaningful relationships with like-minded believers. Through the Christ Business Network, he looks forward to connecting with fellow Christian professionals and entrepreneurs, growing in faith, sharing knowledge, and encouraging others to pursue excellence while advancing God's Kingdom through business.",
    ],
  },
  {
    importKey: 'aaron-akusem-akutteh',
    name: 'Aaron Akusem Akutteh',
    title: 'Ing.',
    role: 'Regional Engineer, Ashanti Region',
    qualification: 'GHIE PE',
    employment: 'National Communications Authority',
    assembly: 'Santasi, Daaban Area',
    imagePath: asset('team-aaron-akutteh.jpeg'),
  },
  {
    importKey: 'racheal-boateng',
    name: 'Racheal Boateng',
    title: 'Ms',
    role: 'Journalist',
    qualification: 'Journalist',
    assembly: 'Upper Room Assembly, Odorkor Branch',
    imagePath: asset('team-racheal-boateng.jpeg'),
  },
  {
    importKey: 'yeboah-shadrack',
    name: 'Yeboah Shadrack',
    title: 'Rev.',
    role: 'Resident Minister',
    email: 'yeboahsh@gmail.com',
    gender: 'Male',
    dateOfBirth: '1983-08-23',
    phoneNumbers: ['0545729675', '0247853361'],
    educationLevel: "Master's Degree",
    institutions: ['University of Cape Coast', 'Trinity Theological Seminary'],
    profession: 'Reverend Minister',
    employment: 'New Legon',
    assembly: 'FWC Adenta',
    preferredAreas: ['Programmes', 'Welfare'],
    bio: ['Resident Minister of FWC Adenta'],
    photoSourceUrl: 'https://drive.google.com/open?id=1JezstMgQYTM27rs05ykbtr8XHJl8I_Kf',
  },
  {
    importKey: 'albert-owusu-boateng',
    name: 'Albert Owusu-Boateng',
    title: 'Elder',
    role: 'Branch Manager',
    email: 'aowusu_boateng@yahoo.com',
    gender: 'Male',
    dateOfBirth: '1976-06-29',
    phoneNumbers: ['0244984414', '0208935143'],
    educationLevel: "Master's Degree",
    institutions: ["University of Ghana, Bachelor's Degree", "KNUST, Master's Degree"],
    profession: 'Human Resource Professional, CIHRM',
    employment: 'SSNIT Tamale Branch',
    assembly: 'Tamale Central',
    preferredAreas: ['Welfare', 'Other'],
    bio: [
      'I am married with two children. I am passionate about personality and organizational development through training, mentorship, policy development, and advocacy.',
    ],
    photoSourceUrl: 'https://drive.google.com/open?id=1Zd0Ln4YYNouwC7b4oh36P-Z6Ww2BtDCE',
  },
  {
    importKey: 'theresa-arthur',
    name: 'Theresa Arthur',
    title: 'Ms.',
    role: 'Marketing Manager',
    email: 'efearthur37@gmail.com',
    gender: 'Female',
    dateOfBirth: '1994-08-26',
    phoneNumbers: ['0247035009', '0208389091'],
    educationLevel: "Master's Degree",
    institutions: ['University of Ghana'],
    profession: 'Marketing',
    employment: 'SIC Life Insurance',
    assembly: 'Odorkor Central',
    preferredAreas: ['Programmes'],
    bio: [
      "My name is Theresa Arthur, and I am a Marketing Manager in the Corporate Group Business Department at SIC Life Insurance. Before this role, I worked as an Administrative Secretary and Personal Assistant. These experiences strengthened my organizational, communication, and relationship-management skills. I hold a Master's degree in Administrative Management and am passionate about building meaningful relationships, creating value through business, and supporting organizations with corporate insurance solutions. I am excited to join the Christ Business Network and look forward to learning, connecting, and growing with like-minded Christian professionals.",
    ],
    photoSourceUrl: 'https://drive.google.com/open?id=1QKohSA_ph-HFLE83xRzKwBeUKQwL57Gs',
  },
  {
    importKey: 'afua-kumi-takyiwaa',
    name: 'Afua Kumi-Takyiwaa',
    title: 'Ms.',
    role: 'Member',
    email: 'aktakyiwaa@gmail.com',
    gender: 'Female',
    phoneNumbers: ['+1 682-241-0685', '+233 246 902 648'],
    educationLevel: "Master's Degree",
    institutions: ['University of Education, Winneba'],
    profession: 'N/A',
    assembly: 'N/A',
    preferredAreas: ['Communications and IT', 'Programmes'],
  },
]

const toPortableText = (paragraphs = []) =>
  paragraphs.map((paragraph, index) => ({
    _key: `paragraph-${index + 1}`,
    _type: 'block',
    style: 'normal',
    markDefs: [],
    children: [{_key: `span-${index + 1}`, _type: 'span', marks: [], text: paragraph}],
  }))

for (const [index, member] of members.entries()) {
  if (member.imagePath && !fs.existsSync(member.imagePath)) {
    throw new Error(`Missing image: ${member.imagePath}`)
  }

  const existing = await client.fetch(
    '*[_type == "member" && importKey == $importKey][0]{_id, portrait{asset->{_id}}}',
    {importKey: member.importKey},
  )

  let assetId = existing?.portrait?.asset?._id
  if (!assetId && member.imagePath) {
    const matchingLeader = await client.fetch(
      '*[_type == "leader" && name == $name][0]{"assetId": portrait.asset._ref}',
      {name: member.name},
    )
    assetId = matchingLeader?.assetId
  }

  if (!assetId && member.imagePath) {
    const uploaded = await client.assets.upload('image', fs.createReadStream(member.imagePath), {
      filename: path.basename(member.imagePath),
      source: {id: `member-${member.importKey}`, name: 'CBN member profiles'},
    })
    assetId = uploaded._id
  }

  const values = {
    _type: 'member',
    importKey: member.importKey,
    name: member.name,
    title: member.title,
    role: member.role,
    qualification: member.qualification,
    ...(member.employment ? {employment: member.employment} : {}),
    assembly: member.assembly,
    ...(assetId
      ? {
          portrait: {
            _type: 'image',
            alt: `${member.name}, ${member.role}`,
            asset: {_type: 'reference', _ref: assetId},
          },
        }
      : {}),
    ...(member.email ? {email: member.email} : {}),
    ...(member.gender ? {gender: member.gender} : {}),
    ...(member.dateOfBirth ? {dateOfBirth: member.dateOfBirth} : {}),
    ...(member.phoneNumbers ? {phoneNumbers: member.phoneNumbers} : {}),
    ...(member.educationLevel ? {educationLevel: member.educationLevel} : {}),
    ...(member.institutions ? {institutions: member.institutions} : {}),
    ...(member.profession ? {profession: member.profession} : {}),
    ...(member.preferredAreas ? {preferredAreas: member.preferredAreas} : {}),
    ...(member.photoSourceUrl ? {photoSourceUrl: member.photoSourceUrl} : {}),
    ...(member.bio ? {bio: toPortableText(member.bio)} : {}),
    displayOrder: index + 1,
    isPublished: true,
  }

  if (existing?._id) {
    const {_type, ...patchValues} = values
    await client.patch(existing._id).set(patchValues).commit()
    console.log(`Updated ${member.name}`)
  } else {
    await client.create(values)
    console.log(`Created ${member.name}`)
  }
}

console.log(`Seeded ${members.length} editable member profiles.`)
