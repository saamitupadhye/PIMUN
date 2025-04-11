export interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  bio: string;
  category: 'secretariat' | 'executive-board' | 'oc';
  committee?: string;
}

// Update these URLs with your own images
const TEAM_PHOTOS = {
  secretaryGeneral: '/images/team/Secgen.jpg',
  unscChair: '/images/team/unsc-chair.jpg',
  unscRapporteur: '/images/team/unsc-rapporteur.jpg',
  unfcccChair: '/images/team/unfccc-chair.jpg',
  unfcccViceChair: '/images/team/unfccc-vice-chair.jpg',
  unodaChair: '/images/team/unoda-chair.jpg',
  unodaViceChair: '/images/team/unoda-vice-chair.jpg',
  ungaChair: '/images/team/unga-chair.jpg',
  ungaViceChair: '/images/team/unga-vice-chair.jpg',
  ipEditor1: '/images/team/editor-in-chief-1.jpg',
  ipEditor2: '/images/team/editor-in-chief-2.jpg',
  usgTech: '/images/team/oc1.jpg',
  usgDesign: '/images/team/oc2.jpg',
  ocAnirvan: '/images/team/oc3.jpg',
  ocYuvraj: '/images/team/oc4.jpg',
  ocPurva: '/images/team/oc5.jpg',
  ocTanvi: '/images/team/oc6.jpg',
  ocGuneet: '/images/team/oc7.jpg',
  ocZoya: '/images/team/oc8.jpg',
  ocPragya: '/images/team/oc9.jpg',
  ocArshad: '/images/team/oc10.jpg',
  ocAnas: '/images/team/oc11.jpg',
  ocNaman: '/images/team/oc12.jpg',
  ocVyom: '/images/team/oc13.jpg',
  ocSansriti: '/images/team/oc14.jpg'
};

export const teamMembers: TeamMember[] = [
  // Secretariat
  {
    id: '1',
    name: 'SAAMIT UPADHYE',
    role: 'Secretary General',
    photo: TEAM_PHOTOS.secretaryGeneral,
    bio: 'Leading PIMUN with extensive experience in Model United Nations.',
    category: 'secretariat'
  },
  // Executive Board
  {
  id: '2',
  name: 'SHANAYA CHAKRABORTY',
  role: 'Chair',
  committee: 'UNSC',
  photo: TEAM_PHOTOS.unscChair,
  bio: 'Leading the Security Council with expertise in international security.',
  category: 'executive-board'
},
{
  id: '3',
  name: 'ARVA SHIRKE',
  role: 'Rapporteur',
  committee: 'UNSC',
  photo: TEAM_PHOTOS.unscRapporteur,
  bio: 'Documenting Security Council proceedings and maintaining detailed records.',
  category: 'executive-board',
},
{
  id: '4',
  name: 'TVISSHA JADHAV',
  role: 'Chair',
  committee: 'UNFCCC',
  photo: TEAM_PHOTOS.unfcccChair,
  bio: 'Leading climate policy discussions and environmental negotiations.',
  category: 'executive-board'
},
{
  id: '5',
  name: 'ADWAIY NAGPAL',
  role: 'Vice-Chair',
  committee: 'UNFCCC',
  photo: TEAM_PHOTOS.unfcccViceChair,
  bio: 'Assisting in directing environmental deliberations and debates.',
  category: 'executive-board'
},

{
  id: '6',
  name: 'AVNI BONDE',
  role: 'Chair',
  committee: 'UNGA',
  photo: TEAM_PHOTOS.ungaChair,
  bio: 'Moderating global policy dialogue at the General Assembly.',
  category: 'executive-board'
},
{
  id: '7',
  name: 'SHUBHAM VIPINKUMAR SINGH',
  role: 'Vice-Chair',
  committee: 'UNGA',
  photo: TEAM_PHOTOS.ungaViceChair,
  bio: 'Facilitating General Assembly dialogue with diplomatic skill.',
  category: 'executive-board'
},
{
  id: '8',
  name: 'SHRESHTHA VERMA',
  role: 'Chair',
  committee: 'UNODA',
  photo: TEAM_PHOTOS.unodaChair,
  bio: 'Guiding disarmament discussions with strategic clarity.',
  category: 'executive-board'
},
{
  id: '9',
  name: 'SAGARIKA SINGH',
  role: 'Vice-Chair',
  committee: 'UNODA',
  photo: TEAM_PHOTOS.unodaViceChair,
  bio: 'Supporting disarmament and arms control discourse with insight.',
  category: 'executive-board'
},
{
  id: '10',
  name: 'NATHAN CABRAL',
  role: 'Editor-in-Chief',
  committee: 'International Press',
  photo: TEAM_PHOTOS.ipEditor1,
  bio: 'Heading the press team and shaping impactful journalistic narratives.',
  category: 'executive-board'
},
{
  id: '11',
  name: 'ADVEYA KHARAT',
  role: 'Editor-in-Chief',
  committee: 'International Press',
  photo: TEAM_PHOTOS.ipEditor2,
  bio: 'Overseeing journalistic excellence and media operations.',
  category: 'executive-board'
},
  //ocs
{
  id: '12',
  name: 'SAMIT SHAHABUDDEEN',
  role: 'USG Tech',
  photo: TEAM_PHOTOS.usgTech,
  bio: 'Managing all technical aspects of PIMUN 2025 with efficiency.',
  category: 'oc'
},
{
  id: '13',
  name: 'RIJUL DHORE',
  role: 'USG Design',
  photo: TEAM_PHOTOS.usgDesign,
  bio: 'Crafting the visual identity and branding of the conference.',
  category: 'oc'
},

{
  id: '14',
  name: 'ANIRVAN JADHAV',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocAnirvan,
  bio: 'Ensuring seamless conference execution with the OC team.',
  category: 'oc'
},
{
  id: '15',
  name: 'YUVRAJ GHORPADE',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocYuvraj,
  bio: 'Contributing to event planning and logistics.',
  category: 'oc'
},
{
  id: '16',
  name: 'PURVA MISTRY',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocPurva,
  bio: 'Coordinating with teams and managing delegate services.',
  category: 'oc'
},
{
  id: '17',
  name: 'TANVI KUWALEKAR',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocTanvi,
  bio: 'Ensuring smooth operations and delegate support.',
  category: 'oc'
},
{
  id: '18',
  name: 'GUNEET KAUR',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocGuneet,
  bio: 'Supporting logistics and resource coordination.',
  category: 'oc'
},
{
  id: '19',
  name: 'ZOYA KHAN',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocZoya,
  bio: 'Overseeing hospitality and event facilitation.',
  category: 'oc'
},
{
  id: '20',
  name: 'PRAGYA SHETTY',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocPragya,
  bio: 'Managing schedules and assisting in event coordination.',
  category: 'oc'
},
{
  id: '21',
  name: 'ARSHAD SHAIKH',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocArshad,
  bio: 'Handling logistics and supplies across venues.',
  category: 'oc'
},
{
  id: '22',
  name: 'ANAS CHOUGLE',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocAnas,
  bio: 'Coordinating transport and communications support.',
  category: 'oc'
},
{
  id: '23',
  name: 'NAMAN KADAM',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocNaman,
  bio: 'Supporting backend logistics and delegate queries.',
  category: 'oc'
},
{
  id: '24',
  name: 'VYOM PATEL',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocVyom,
  bio: 'Working on documentation and real-time execution.',
  category: 'oc'
},
{
  id: '25',
  name: 'SANSKRITI NANAWARE',
  role: 'Organizing Committee',
  photo: TEAM_PHOTOS.ocSansriti,
  bio: 'Supporting outreach and registration tasks.',
  category: 'oc'
}
];