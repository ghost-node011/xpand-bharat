import LandingGuide from '../components/LandingGuide';

const FAQS = [
  {
    q: 'Is it safe to buy a franchise in India?',
    a: 'Buying a franchise is safer than starting from scratch when the brand has a proven model, transparent numbers and a fair agreement, but every business carries risk. Verify the brand\'s legal entity, trademark, existing outlets and agreement terms before paying any fee. XPAND Bharat screens brands on these points before presenting them to investors.',
  },
  {
    q: 'How do I verify a franchise brand before buying?',
    a: 'Ask for the franchise disclosure details: company registration, trademark ownership, number of operating outlets, closed outlets, and real revenue from existing franchisees. Visit two or three outlets, speak to franchisees without the brand present, and have the agreement reviewed before you sign.',
  },
  {
    q: 'What is the minimum investment to buy a franchise in India?',
    a: 'Some service and kiosk franchises start under ₹10 lakh, while most store-based franchises in food, salon, education and retail need ₹10 lakh to ₹50 lakh including fit-out and working capital. Full-format restaurants and multi-unit rights can go above ₹1 crore.',
  },
  {
    q: 'Do I need business experience to buy a franchise?',
    a: 'No. Most franchise brands train new owners on operations, hiring and sales. What matters more is your capital, your time commitment and your willingness to follow the brand\'s system. Some premium brands do prefer owners with retail or hospitality experience.',
  },
  {
    q: 'How long does it take to open a franchise after buying it?',
    a: 'It often takes a few months from signing to opening, depending on how quickly a suitable location is found, the fit-out size and approvals. Small-format and service franchises open faster than full-format restaurants.',
  },
  {
    q: 'How is buying a franchise through XPAND Bharat different from a franchise listing portal?',
    a: 'A listing portal shows every brand that pays to be listed. XPAND Bharat works the other way: we screen franchise brands first, match only the ones that fit your budget, city and category, and stay involved through brand meetings, number reviews, agreement checks and launch.',
  },
];

export default function BuyFranchise() {
  return (
    <LandingGuide
      crumb="Buy a Franchise in India"
      seo={{
        path: '/buy-franchise-in-india',
        title: 'Buy a Franchise in India: Verified Opportunities | XPAND Bharat',
        description: 'Looking to buy a franchise in India? XPAND Bharat matches you with screened franchise opportunities in food, salon, education and retail that fit your budget and city.',
        keywords: 'buy franchise in India, buy a franchise, franchise for sale India, franchise opportunities India, best franchise to buy in India, salon franchise, food franchise India, franchise under 30 lakh, low cost franchise India, franchise to buy',
      }}
      hero={{
        label: 'Buy a Franchise',
        title: 'Buy a Franchise in India.',
        accent: 'Verified, not just listed.',
        intro: 'Franchise portals show you hundreds of brands. XPAND Bharat shows you the few that fit: franchise opportunities screened for real unit economics, structure and franchisee support, then matched to your budget, city and category.',
        cta: 'Show Me Opportunities',
      }}
      sections={[
        {
          label: 'Why XPAND Bharat',
          heading: 'A better way to buy a franchise',
          paragraphs: [
            'Most people who want to buy a franchise in India start on a listing site, fill a few forms and get flooded with sales calls. The brands that call fastest are not always the brands that fit best.',
            'XPAND Bharat is a franchise expansion and investment advisory that works with both sides: the brands that want to grow and the investors who want to own an outlet. That gives us the visibility to tell you which opportunities are genuinely ready for a new partner.',
          ],
          points: [
            { title: 'Screened brands only', desc: 'We review a brand\'s structure, outlet performance and franchisee support before it reaches you.' },
            { title: 'Matched to you', desc: 'Your budget, city, category and involvement level decide the shortlist, not who pays for ads.' },
            { title: 'Clear numbers', desc: 'We walk you through investment, royalty and payback assumptions before you commit.' },
            { title: 'Support till launch', desc: 'We stay involved through meetings, agreement review, location and opening.' },
          ],
        },
      ]}
      categoriesHeading="Franchise opportunities you can buy"
      budgetsHeading="Find a franchise by investment"
      steps={{
        heading: 'How buying a franchise works with us',
        items: [
          { title: 'Tell us what you are looking for', desc: 'Share your budget, preferred city and category through the form below or on WhatsApp.' },
          { title: 'Get a matched shortlist', desc: 'We send two or three franchise opportunities that fit, not a list of fifty.' },
          { title: 'Meet the brands', desc: 'We set up meetings with the brands and review their numbers with you.' },
          { title: 'Check the agreement and location', desc: 'Review franchise terms, territory rights and site options before you sign.' },
          { title: 'Launch your outlet', desc: 'The brand trains your team and supports the opening while we stay in touch.' },
        ],
      }}
      checklist={{
        heading: 'Before you buy any franchise, check',
        items: [
          'The brand\'s company registration and trademark ownership',
          'How many outlets are operating, and how many have closed',
          'Real revenue and payback from existing franchisees',
          'The full investment, including working capital, not just the franchise fee',
          'Royalty, marketing fee, territory protection and exit terms',
        ],
      }}
      faqs={FAQS}
      related={[
        { to: '/franchise-business-in-india', label: 'Franchise business in India guide' },
        { to: '/for-investors', label: 'For investors' },
        { to: '/growth-opportunities', label: 'Growth opportunities' },
        { to: '/industries', label: 'Industries we cover' },
      ]}
      form={{
        label: 'Start here',
        heading: 'Tell us what you want to buy.',
        sub: 'Share your budget, city and category. Our team will reach out within 24 hours with franchise opportunities that fit.',
        source: 'buy-franchise-in-india',
        submitLabel: 'Get Matched Opportunities',
      }}
    />
  );
}
