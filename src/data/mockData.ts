export interface Article {
  id: string;
  title: string;
  channel: string;
  event: string;
  date: string;
  summary: string;
  content: string;
  imageUrl: string;
  author: string;
  tags: string[];
  status: 'draft' | 'published';
  publishDate?: string;
}

export interface Motion {
  id: string;
  committee: string;
  topic: string;
  type: string;
  introducedBy: string;
  votesFor: number;
  votesAgainst: number;
  abstentions: number;
  totalVotes: number;
  status: 'passed' | 'failed' | 'pending';
  date: string;
}

// Helper function to filter published articles
export const getPublishedArticles = () => {
  const now = new Date();
  return articles.filter(
    (article) =>
      article.status === 'published' &&
      (!article.publishDate || new Date(article.publishDate) <= now)
  );
};

// Update these URLs with your own images
const ARTICLE_IMAGES = {
  peaceResolution: '/images/articles/member3.png',
  climateDebate: '/images/articles/climate-debate.jpg',
  disarmamentTalks: '/images/articles/disarmament-talks.jpg',
  assemblyVote: '/images/articles/assembly-vote.jpg',
  securityMeeting: '/images/articles/security-meeting.jpg',
  climateSummit: '/images/articles/climate-summit.jpg',
  futureConference: '/images/articles/future-conference.jpg'
};

export const articles: Article[] = [
  {
    id: '1',
    title: 'USA taking steps for SIDs, whereas it did not ratify the Kyoto Protocol.',
    channel: 'NDTV',
    event: 'UNFCCC',
    date: '2025-04-12',
    author: 'Garima Kumari',
    summary: 'Contributing the least to climate change...',
    content: `They contributed the least to climate change, but they are paying the highest price. Small
Island Developing States are running out of time-and the land….
In recent discussion, USA shows sympathy towards SIDS and claims that they are actively
working for them financially as well as with technology.
But the discussion further heats up as UK and India attacks USA by raising a challenge and
debating on its statements.

 Inconsistency in climate policy and withdrawal from Paris Agreement:
The USA’s climate policies have been inconsistent and have been criticized as insufficient,
especially for SIDs.
The US’s withdrawal from the Paris Agreement although later reversed was a significant
setback for SIDs and other vulnerable countries.

 Lack of leadership:
The US’s perceived lack of leadership on climate change has also weakened the
international effort to address the climate change, which is particularly felt by SIDs.

Now the question is, “How much longer can we ignore the struggles of those who are paying
the price for a crisis they didn’t contribute much to?”
Till when will this continue and be hidden behind the debate and politics?`,
    imageUrl: ARTICLE_IMAGES.securityMeeting,
    tags: ['Global Warming', 'Politics', 'Climate change'],
    status: 'published',
  },
  {
    id: '2',
    title: ' “Coal to Solar “: Initiatives taken by India and Spain on facing climate changes',
    channel: 'Agence France Press',
    event: 'UNFCCC',
    date: '2025-04-12',
    author: 'Saarah Munshi',
    summary: 'Motion on Schemes and implementation laws by developed countries and developing countries to overcome climate change.',
    content: `The session commenced with the Chair introducing the agenda:  Schemes and implementation laws by developed countries and developing countries to overcome climate changes .
Delegates from India and Spain presented their positions, highlighting their roles as developing and developed countries.
India started the motion with their agenda of “coal-powered plants to solar-based power plants”.India emphasized its commitment to reducing coal and highlighted ongoing efforts to increase solar energy Instead in the country .₹41.75 billion was funded by the USA to India for the initiatives . On October 19, 2018,  significant steps were taken Aimed at curbing coal-powered to solar-powered plant 
Spain questioned India “ Solar cells Will bring more waste to the environment instead “ 
Spain on their behalf shortly voiced their agenda on the energy conservation law of 2013 implemented, wherein it has made 23 percent less gas emissions and on promoting selective charging infrastructure. It then continued with Other countries showing their concerns regarding the Motion discussed .`,
    imageUrl: ARTICLE_IMAGES.climateSummit,
    tags: ['UNFCCC', 'COALTOSOLAR', 'CLIMATE CHANGE', 'INDIA', 'SPAIN', 'Sustainability'],
    status: 'published',
  },
  {
    id: '3',
    title: 'Aggression and Illusion: UNSC wrestles with reality',
    channel: 'Washington Post',
    event: 'UNSC',
    date: '2025-04-12',
    author: 'Kenisha Rai',
    summary: 'The war over Ukraine has recently hit its three-year mark, the global conversation shifted from physical warfare to the more sinister and murky battlezones of modern conflict: the online information war – social media, propaganda, and fact versus fiction.',
    content: `Ukraine accused Russia not only of launching missiles, but also of mastering the art of deception. They pointed
to a shallow deep-fake video of their current president, Volodymyr Zelenskyy surrendering online. The Ukrainian
side claimed that the online social warfare was as destructive as the military warfare they were facing.
“This is not a theoretical war,” the delegate of Ukraine added. “This is our everyday brutal reality.”
In the meantime, Russia tried to absolve itself of any and all guilt regarding the July 24 hospital bombing. They
tried justifying the bombing by saying that the target was supposed to be an Agro Plant. They claimed Ukrainian
interference was responsible for the diversion, and while surrendering, they genuinely accepted this version of
events and it drew quite a few skeptical glances from the other delegations.
During clashes of a more diplomatic nature, one call was heard: The Republic of Korea stating that, “Aggression
cannot, will not, and must not be normalized.”
Denmark and Slovenia were quick to label both hybrid warfare and the international media as deceitful and called
for other nations to stand against such violence. Belarus denied responsibility for the disinformation campaign
and China moved the target focus from China to America. Together with Ukraine, the Americans darkly
underscored the increasing cost of the conflict—both in human lives as well as in verifiable facts.
No resolution to the conflict was reached in the end, but one fact remains: the focus of this battle is not just about
land, but what dominant narratives are accepted in society.
However, under the official remarks and diplomatic courtesy, the atmosphere in the room was sluggish—with
quiet, grief, and the harsh reality that wars are measured in more than just body counts. The lies we choose to
believe also hold weight. This is particularly devastating for the people of Ukraine, bearing the weight of these
narratives.`,
    imageUrl: ARTICLE_IMAGES.disarmamentTalks,
    tags: ['UNSC', 'Ukraine Conflict', 'Russia-Ukraine War', 'Disinformation', 'MUN 2025', 'International Press', 'War in Media', 'Truth in Conflict', 'Geo-politics', 'Crisis Reporting', 'Global diplomacy'],
    status: 'published',
  },
  {
    id: '4',
    title: 'USA AND UK’s FIERCE DEBATE AT UNFCCC, PIMUN 2025',
    channel: 'PIMUN Press',
    event: 'UNFCCC',
    date: '2025-04-12',
    author: 'Shaira Mohammad',
    summary: 'USA and UK have a fierce debate along with their
partners at UNFCCC, PIMUN 2025, along with their chosen
partners. UK and India asked thought provoking questions
and USA and Tuvalu replied with well structured answers.',
    content: `At PIMUN 2025, USA and UK have a fierce debate at UNFCCC,
along with their partners, India with UK, and Tuvalu with
USA.
Delegate of USA starts by introducing themselves. They claim
that they support and are helping the SIDS, who they say are
the frontliners of climate change. They state that they are
helping SIDS through financial and developmental support.
Delegate of UK backfired, by asking USA how they can claim
that they support SIDS if they don’t radify the Kyoto
protocols. USA replies to this by saying that if they would
radify the Kyoto protocols, it would harm their territory.
After this, USA picks Tuvalu as its partner and UK picks India.
UK and India challenge USA and Tuvalu, saying that “How can

you say that you are concerned about climate change and
SIDS when you don’t radify the Kyoto protocols”
USA replies by claiming that they have taken steps to
decrease the Carbon Dioxide by reducing Deforestation. India
backfires by asking USA what initiatives their government has
taken for public transport. USA replies to this by saying that
they haven’t made many initiatives for that, as they are more
focused on starting E-vehicles. USA also states that they have
been reducing plastic and other environment harming
materials to control climate change.
USA concludes by saying that they are taking smaller steps
towards their carbon free goal, and also states that they have
been supporting SIDS financially, and doing so, USA ends this
fierce debate!',
    imageUrl: ARTICLE_IMAGES.assemblyVote,
    tags: ['PIMUN', 'PIMUN 2025', 'UNFCCC', 'Debate', 'USA', 'Global Goals', 'UK', 'Global Warming', 'Climate change', 'SIDS'],
    status: 'published',
  }
{
    id: '5',
    title: 'Escalating Russia-Ukraine Conflict and the global call for peace',
    channel: 'BBC',
    event: 'UNSC',
    date: '2025-04-12',
    author: 'Avaneesh Shinde',
    summary: 'Delegation of the United Kingdom addresses countless amounts of casualties in War. The United Kingdom openly supports Ukraine. Delegation of the United States of America promotes peace among both nations.',
    content: 'The committee Session 1 starts with Delegation of United Kingdom’s
Speaker’s list followed by United States of America. United Kingdom openly supports
Ukraine while addressing countless amounts of deaths which are estimated to be
around 14,200–14,400 military and civilian deaths during the War in Donbas, and up to
1,000,000 estimated casualties during the Russian invasion of Ukraine. Russia
comments that Ukraine has also caused civilian casualties to the same extent as
Russia. Ukraine comments that United Kingdom is right about Russia condemning the
act. Point of Information raised was by Russia about them not condemning any act.
Ukraine changing its words to Russia is causing the act. Delegate of United States
of America states that they have provided $66.5 billion in military assistance since
Russia launched its full-scale invasion of Ukraine on February 24, 2022, and
approximately $69.2 billion in military assistance since Russia’s initial invasion of
Ukraine in 2014. The United States of America has now used the emergency
Presidential Drawdown Authority on 55 occasions since August 2021 to provide Ukraine
military assistance totaling approximately $31.7 billion from DoD stockpiles.',
    imageUrl: ARTICLE_IMAGES.assemblyVote,
    tags: ['Russia-Ukraine Wars', 'UK', 'Ukraine', 'Russia', 'USA', 'Speakers list', 'Call For Peace'],
    status: 'published',
  }
{
    id: '6',
    title: 'United Kingdom’s Views on Disarming of Nuclear Weapons',
    channel: 'PIMUN Press',
    event: 'UNODA',
    date: '2025-04-12',
    author: 'Anay Kathuria',
    summary: 'The United Kingdom views, having Nuclear Weapons as a responsibility
and not a threat to the world. The United Kingdom believes that the
world is at balance when only a few countries, including United
Kingdom, have Nuclear Bombs.',
    content: `The Delegate of United Kingdom said in United Nations Office for
Disarmament Affairs(UNODA) that having a Nuclear Power is a
responsibility and not a luxury. The United Kingdom believes that the
entire world should dispose off of their Nuclear Weapons except for the
five countries which were allowed by the Non-Proliferation Treaty. The
United Kingdom supports the Disarmament Motion but also believes
that it should have Nuclear Weapons in its possession as a
“responsibility”`,
    imageUrl: ARTICLE_IMAGES.assemblyVote,
    tags: ['PIMUN', 'PIMUN 2025', 'UNODA', 'Debate', 'Global Goals', 'UK','Weapons Disarmament','Weapons'],
    status: 'published',
  }
{
    id: '7',
    title: '',
    channel: '',
    event: '',
    date: '2025-04-12',
    author: '',
    summary: '',
    content: '',
    imageUrl: ARTICLE_IMAGES.assemblyVote,
    tags: ['PIMUN', 'PIMUN 2025', 'UNFCCC', 'Debate', 'USA', 'Global Goals', 'UK', 'Global Warming', 'Climate change', 'SIDS'],
    status: 'published',
  }
];

export const motions: Motion[] = [
  {
    id: '1',
    committee: 'UNSC',
    topic: 'Resolution on International Peace and Security',
    type: 'Substantive Motion',
    introducedBy: 'Delegate of France',
    votesFor: 13,
    votesAgainst: 0,
    abstentions: 2,
    totalVotes: 15,
    status: 'passed',
    date: '2024-04-10'
  },
  {
    id: '2',
    committee: 'UNFCCC',
    topic: 'Climate Action Framework',
    type: 'Substantive Motion',
    introducedBy: 'Delegate of Germany',
    votesFor: 156,
    votesAgainst: 10,
    abstentions: 20,
    totalVotes: 186,
    status: 'passed',
    date: '2024-04-09'
  },
  {
    id: '3',
    committee: 'UNODA',
    topic: 'Global Disarmament Initiative',
    type: 'Substantive Motion',
    introducedBy: 'Delegate of Japan',
    votesFor: 145,
    votesAgainst: 15,
    abstentions: 25,
    totalVotes: 185,
    status: 'passed',
    date: '2024-04-08'
  },
  {
    id: '4',
    committee: 'UNGA',
    topic: 'Sustainable Development Goals Implementation',
    type: 'Substantive Motion',
    introducedBy: 'Delegate of Brazil',
    votesFor: 175,
    votesAgainst: 0,
    abstentions: 18,
    totalVotes: 193,
    status: 'passed',
    date: '2024-04-07'
  }
];

export const channels = [
  'CNN',
  'BBC',
  'Agences France Press',
  'Canadian Press',
  'The Guardian',
  'AL Jazeera',
  'Arab News',
  'NDTV',
  'Washington Post',
  'Deutsche Presse-Agentur',
  'Xinhua News Agency',
  'Kyodo News'
];

export const events = [
  'UNSC',
  'UNFCCC',
  'UNODA',
  'UNGA'
];

export const tags = [
  'Peace & Security',
  'Climate Change',
  'Disarmament',
  'Global Security',
  'Sustainable Development',
  'Environmental Policy',
  'Global Cooperation',
  'Resolution',
  'Unanimous Vote',
  'Global Goals',
  'Crisis Response',
  'Conference',
  'Summit',
  'Announcement',
];
