import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const discordNeverExpireLink = 'https://discord.gg/kAGEj25dCn'
export const bookADemoLink = 'https://calendly.com/abhisek-safedep/30min';
export const registerLink = 'https://platform.safedep.io';
export const joinWaitListLink = registerLink;
export const joinWaitListLinkTarget = '';
export const registerLinkTarget = '';
export const safedepGitHubOrgLink = 'https://github.com/safedep';
export const safedepVetGitHubLink = 'https://github.com/safedep/vet';
export const mainCallToActionTitle = 'Protect against OSS Attacks';
export const mainCallToActionText = 'Rollout a developer first OSS governance and risk mitigation program. Leverage policy as code to enforce your opinionated security guardrails.';
export const mainDocumentationLink = 'https://docs.safedep.io';
export const apiDocumentationLink = mainDocumentationLink;
export const sdkDocumentationLink = mainDocumentationLink;
export const partnershipLink = 'mailto:hello@safedep.io?subject=Partnership';
export const communityForumLink = 'https://github.com/safedep/vet/discussions';
export const inheritedRiskForOssLink = getPermalink('why-oss-risks-larger-than-sca')
export const careersNotionSiteLink = 'https://safedep-inc.notion.site/Careers-at-SafeDep-11e61d70b23680d7b98dcbdb6c710d55';

export const headerData = {
  links: [
    {
      text: 'Solution',
      links: [
        {
          text: 'Identify Open Source Risks',
          href: getPermalink('/solution/identify'),
        },
        {
          text: 'Protect Against Open Source Risks',
          href: getPermalink('/solution/govern'),
        },
        {
          text: 'Fix Open Source Risks',
          href: getPermalink('/solution/fix'),
        },
      ],
    },
    {
      text: 'Resources',
      links: [
        {
          text: 'Documentation',
          href: mainDocumentationLink,
        },
        {
          text: 'SDK',
          href: sdkDocumentationLink,
        },
        {
          text: 'API',
          href: apiDocumentationLink,
        },
      ]
    },
    // {
    //   text: 'Homes',
    //   links: [
    //     {
    //       text: 'Default',
    //       href: getPermalink('/homes/default'),
    //     },
    //     {
    //       text: 'SaaS',
    //       href: getPermalink('/homes/saas'),
    //     },
    //     {
    //       text: 'Startup',
    //       href: getPermalink('/homes/startup'),
    //     },
    //     {
    //       text: 'Mobile App',
    //       href: getPermalink('/homes/mobile-app'),
    //     },
    //     {
    //       text: 'Personal',
    //       href: getPermalink('/homes/personal'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Pages',
    //   links: [
    //     {
    //       text: 'Features (Anchor Link)',
    //       href: getPermalink('/#features'),
    //     },
    //     {
    //       text: 'Services',
    //       href: getPermalink('/services'),
    //     },
    //     {
    //       text: 'Pricing',
    //       href: getPermalink('/pricing'),
    //     },
    //     {
    //       text: 'About us',
    //       href: getPermalink('/about'),
    //     },
    //     {
    //       text: 'Contact',
    //       href: getPermalink('/contact'),
    //     },
    //     {
    //       text: 'Terms',
    //       href: getPermalink('/terms'),
    //     },
    //     {
    //       text: 'Privacy policy',
    //       href: getPermalink('/privacy'),
    //     },
    //   ],
    // },
    // {
    //   text: 'Landing',
    //   links: [
    //     {
    //       text: 'Lead Generation',
    //       href: getPermalink('/landing/lead-generation'),
    //     },
    //     {
    //       text: 'Long-form Sales',
    //       href: getPermalink('/landing/sales'),
    //     },
    //     {
    //       text: 'Click-Through',
    //       href: getPermalink('/landing/click-through'),
    //     },
    //     {
    //       text: 'Product Details (or Services)',
    //       href: getPermalink('/landing/product'),
    //     },
    //     {
    //       text: 'Coming Soon or Pre-Launch',
    //       href: getPermalink('/landing/pre-launch'),
    //     },
    //     {
    //       text: 'Subscription',
    //       href: getPermalink('/landing/subscription'),
    //     },
    //   ],
    // },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
      // links: [
      //   {
      //     text: 'Blog List',
      //     href: getBlogPermalink(),
      //   },
      //   {
      //     text: 'Article',
      //     href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
      //   },
      //   {
      //     text: 'Article (with MDX)',
      //     href: getPermalink('markdown-elements-demo-post', 'post'),
      //   },
      //   {
      //     text: 'Category Page',
      //     href: getPermalink('tutorials', 'category'),
      //   },
      //   {
      //     text: 'Tag Page',
      //     href: getPermalink('astro', 'tag'),
      //   },
      // ],
    },
    // {
    //   text: 'Widgets',
    //   href: '#',
    // },
  ],
  actions: [
    { text: 'Login', href: registerLink, target: registerLinkTarget },
    { text: 'Book a Demo', href: bookADemoLink, target: '_blank', variant: 'primary' },
    // { text: 'GitHub', href: 'https://github.com/safedep/vet', target: '_blank' }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '/#features' },
        { text: 'Pricing', href: getPermalink('/pricing') },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: apiDocumentationLink },
        { text: 'Partners', href: partnershipLink },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: mainDocumentationLink },
        { text: 'Community Forum', href: communityForumLink },
        { text: 'Professional Services', href: bookADemoLink },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Careers', href: careersNotionSiteLink },
        // { text: 'Press', href: '#' },
        // { text: 'Inclusion', href: '#' },
        // { text: 'Social Impact', href: '#' },
        // { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'YT', icon: 'tabler:brand-youtube', href: 'https://youtube.com/@safedep' },
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/company/safedep/' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/safedep/vet' },
  ],
  footNote: `
    <small>
      Crafted by SafeDep.
      Built with <a href="https://astro.build/themes/details/astrowind/" target="_blank">AstroWind</a>.
    </small>
  `,
};
