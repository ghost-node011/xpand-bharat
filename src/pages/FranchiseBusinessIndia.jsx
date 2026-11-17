import LandingGuide from '../components/LandingGuide';

const FAQS = [
  {
    q: 'Which franchise business is best in India?',
    a: 'There is no single best franchise business. The right one depends on your budget, your city, how involved you want to be day to day, and the category you understand. Food & beverage, salon & beauty, education and retail are the most active franchise categories in India, but a strong brand in a weak location still struggles. XPAND Bharat shortlists franchise businesses that match your capital, city and goals.',
  },
  {
    q: 'How much investment is needed to start a franchise business in India?',
    a: 'Franchise businesses in India start from under ₹10 lakh for kiosk and service models and go above ₹1 crore for full-format restaurants and multi-unit rights. Most first-time franchise owners invest between ₹10 lakh and ₹50 lakh. Your total budget should cover the franchise fee, store fit-out, equipment, initial stock, deposits and working capital for the first few months.',
  },
  {
    q: 'Is a franchise business profitable in India?',
    a: 'A franchise business can be profitable when the brand has proven unit economics, the location has the right footfall and the owner runs it well. Profit is never guaranteed. Before you invest, review real numbers from existing outlets, understand the royalty and marketing fees, and speak to current franchisees. XPAND Bharat walks you through these numbers before any commitment.',
  },
  {
    q: 'Can I run a franchise business along with my job?',
    a: 'Yes, many investors do. Look for semi-managed or manager-run franchise models where the brand helps with hiring, training and daily operations, and plan to review reports weekly. A trusted on-ground manager is essential.',
  },
  {
    q: 'What is the difference between a franchise and starting my own business?',
    a: 'With a franchise you get an established brand, tested processes, training, supply chain and marketing support in exchange for a franchise fee and ongoing royalty. Starting your own business gives full control and no royalty, but you build every system and the brand from scratch, which usually takes longer and carries more risk.',
  },
  {
    q: 'How does XPAND Bharat help with a franchise business?',
    a: 'XPAND Bharat is a franchise expansion and investment advisory based in Gurugram. We screen franchise brands for structure, unit economics and franchisee support, match investors to the right opportunities by budget, city and category, and stay involved through brand meetings, agreement review and launch.',
  },
];

export default function FranchiseBusinessIndia() {
  return (
    <LandingGuide
      crumb="Franchise Business in India"
      seo={{
        path: '/franchise-business-in-india',
        title: 'Franchise Business in India: Choose & Start the Right One | XPAND Bharat',
        description: 'Planning a franchise business in India? Compare categories, investment ranges and the steps to start, then get matched with verified franchise opportunities by XPAND Bharat.',
        keywords: 'franchise business in India, franchise business, best franchise business in India, low investment franchise business, how to start a franchise business in India, franchise business opportunities, franchise business ideas India, top franchise business in India',
      }}
      hero={{
        label: 'Franchise Business Guide',
        title: 'Franchise Business in India.',
        accent: 'Start with the right one.',
        intro: 'A franchise business lets you run a proven brand with its systems, training and supply chain already in place. The hard part is not finding a franchise. It is choosing one that fits your capital, your city and the way you want to work. XPAND Bharat helps you make that choice with clarity.',
        cta: 'Find My Franchise',
      }}
      sections={[
        {
          label: 'The basics',
          heading: 'What is a franchise business?',
          paragraphs: [
            'A franchise business is an outlet you own and run under an established brand. You pay a one-time franchise fee and an ongoing royalty. In return the brand gives you its name, store format, operating manuals, training, sourcing and marketing support.',
            'You invest the capital and run the outlet. The brand provides the playbook that has already worked in other locations. That proven playbook is why a franchise business is often a lower-risk way to own a business than starting from zero.',
          ],
        },
        {
          label: 'Why now',
          heading: 'Why franchise businesses are growing in India',
          paragraphs: [
            'Indian consumer brands are expanding well beyond the metros, into Tier-2 and Tier-3 cities where demand for organised food, salons, education and retail is rising fast. Most of these brands grow through franchising, so new franchise business opportunities open up across the country every month.',
            'At the same time, more first-time business owners, salaried professionals and family businesses want an asset they can build without inventing a brand. A franchise business gives them a tested model, and gives brands committed local partners.',
          ],
        },
        {
          label: 'Choosing well',
          heading: 'How to choose the right franchise business',
          points: [
            { title: 'Start with your budget', desc: 'Fix your total investment, including working capital, before you look at brands. It removes most options instantly.' },
            { title: 'Match the category to your city', desc: 'A category that works in one market can fail in another. Check local demand, rents and competition.' },
            { title: 'Check the unit economics', desc: 'Ask for real revenue, margins and payback from existing outlets, not projections from a brochure.' },
            { title: 'Judge the support', desc: 'Training, hiring help, supply chain and marketing decide how fast a new outlet becomes profitable.' },
          ],
        },
      ]}
      categoriesHeading="Popular franchise business categories in India"
      budgetsHeading="Franchise business investment in India"
      steps={{
        heading: 'How to start a franchise business in India',
        items: [
          { title: 'Set your budget and goals', desc: 'Decide your total investment, expected involvement and the timeline you are comfortable with.' },
          { title: 'Shortlist categories and brands', desc: 'Pick two or three categories that suit your city, then shortlist brands with a proven track record.' },
          { title: 'Verify before you commit', desc: 'Review unit economics, the franchise agreement, territory rights and speak to existing franchisees.' },
          { title: 'Secure location and sign', desc: 'Finalise a site the brand approves, negotiate the lease and sign the franchise agreement.' },
          { title: 'Set up, train and launch', desc: 'Complete fit-out, hiring and brand training, then launch with the brand\'s opening marketing support.' },
        ],
      }}
      checklist={{
        heading: 'Questions to ask before you buy a franchise business',
        items: [
          'What is the total investment, including fit-out, deposits and working capital?',
          'What are the royalty and marketing fees, and how are they calculated?',
          'What do existing outlets actually earn, and how long did payback take?',
          'Is my territory protected from another outlet of the same brand?',
          'What are the agreement term, renewal and exit conditions?',
          'Can I speak to two or three current franchisees on my own?',
        ],
      }}
      faqs={FAQS}
      related={[
        { to: '/buy-franchise-in-india', label: 'Buy a franchise in India' },
        { to: '/for-investors', label: 'For investors' },
        { to: '/growth-opportunities', label: 'Growth opportunities' },
        { to: '/industries', label: 'Industries we cover' },
      ]}
      form={{
        label: 'Get matched',
        heading: 'Find the right franchise business for you.',
        sub: 'Share your budget, city and preferred category. Our team will reach out within 24 hours with opportunities that fit.',
        source: 'franchise-business-in-india',
        submitLabel: 'Get My Franchise Options',
      }}
    />
  );
}
