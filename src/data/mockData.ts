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
    title: 'UNSC Addresses Global Security Challenges',
    channel: 'CNN',
    event: 'UNSC',
    date: '2024-04-10',
    author: 'Aahil Johnson',
    summary: 'The UNSC convened to discuss pressing global security matters...',
    content: `The United Nations Security Council today addressed critical global security challenges.
    The council discussed various peacekeeping operations and conflict resolution strategies.
    Key focus areas included regional stability and international cooperation...`,
    imageUrl: ARTICLE_IMAGES.securityMeeting,
    tags: ['Peace & Security', 'Resolution', 'Unanimous Vote'],
    status: 'published',
  },
  {
    id: '2',
    title: 'UNFCCC Makes Progress on Climate Action',
    channel: 'BBC',
    event: 'UNFCCC',
    date: '2024-04-09',
    author: 'Michael Chen',
    summary: 'Delegates achieve breakthrough in climate negotiations...',
    content: `The UNFCCC Conference saw significant progress as delegates reached consensus on key climate action measures. 
    The discussion focused on implementing more aggressive carbon reduction targets and establishing a global fund 
    for climate adaptation in developing nations...`,
    imageUrl: ARTICLE_IMAGES.climateSummit,
    tags: ['Climate Change', 'Environmental Policy', 'Global Cooperation'],
    status: 'published',
  },
  {
    id: '3',
    title: 'UNODA Discusses Disarmament Measures',
    channel: 'Agences France Press',
    event: 'UNODA',
    date: '2024-04-08',
    author: 'Sarah Williams',
    summary: 'UNODA conference addresses global disarmament challenges...',
    content: `The UN Office for Disarmament Affairs convened to discuss critical disarmament initiatives.
    Delegates focused on non-proliferation treaties and arms control measures...`,
    imageUrl: ARTICLE_IMAGES.disarmamentTalks,
    tags: ['Disarmament', 'Global Security', 'Peace'],
    status: 'published',
  },
  {
    id: '4',
    title: 'UNGA Passes Resolution on Sustainable Development',
    channel: 'The Guardian',
    event: 'UNGA',
    date: '2024-04-07',
    author: 'Robert Kim',
    summary: 'General Assembly adopts comprehensive sustainable development framework...',
    content: `The UN General Assembly today passed a landmark resolution on sustainable development.
    The resolution outlines key measures for achieving the SDGs and promoting global cooperation...`,
    imageUrl: ARTICLE_IMAGES.assemblyVote,
    tags: ['Sustainable Development', 'UNGA', 'Global Goals'],
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