export * from './projects'
export * from './education'
export * from './career'

// personal info
export const name = 'Akachi Guo'
export const headline = 'Undergraduate at Northeastern University,majoring in Bioengineering.'
export const introduction =
  "Welcome to my personal page!I am Akachi Guo,a bioengineering undergraduate at Northeastern University in Shenyang,Liaoning.Hailing from the beautiful province of Jiangxi,I am currently immersed in the fascinating world of bioengineering,exploring the intersection of biology and technology.I am delighted to connect with you through this platform and look forward to sharing my journey and experiences with you."
export const email = 'YX1349791010@outlook.com'
export const githubUsername = 'Akachi-Guo'

// about page
export const aboutMeHeadline = 'Pleased to meet you.Welcome to my little corner of the web.'
export const aboutParagraphs = [
  "Coucou Les Amis! I am Akachi Guo,a bioengineering undergraduate at Northeastern University",
  'At present,I am diligently pursuing knowledge in the realm of biology and experimenting with a variety of intriguing web-based initiatives.Through this website,you are invited to explore my social media profiles and contact me directly via email.Additionally,you will find detailed information on my current projects and their respective developments.Should you have any insightful recommendations or constructive feedback regarding my endeavors,I would be most grateful to receive your input.',
  "In the blog section,you'll discover my latest adventures and the things that truly light me up.Who knows?We might just be kindred spirits!",
]

// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro =
  "I've written something delving into the realms of life sciences,artificial intelligence,and philosophy,while also sharing musings on everyday life."

// social links
export type SocialLinkType = {
  name: string
  ariaLabel?: string
  icon: string
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Tiktok',
    icon: 'tiktok',
        href: 'https://www.douyin.com/user/self?from_tab_name=main&showTab=post',
  },
  {
    name: 'Bilibili',
    icon: 'bilibili',
      href: 'https://space.bilibili.com/3546765731039260?spm_id_from=333.1007.0.0',
    },
    {
        name: 'Wechat',
        icon: 'wechat',
        href: ' ',
    },
]

// https://simpleicons.org/
export const techIcons = [
    'typescript',
    'javascript',
    'supabase',
    'cloudflare',
    'java',
    'oracle',
    'mysql',
    'react',
    'nodedotjs',
    'nextdotjs',
    'prisma',
    'postgresql',
    'nginx',
    'vercel',
    'docker',
    'git',
    'github',
    'visualstudiocode',
    'androidstudio',
    'ios',
    'apple',
    'wechat',
    'cardano',
    'soriana',
    'excalidraw',
    'republicofgamers',
    'huawei',
    'dna',
  'honor',
]
