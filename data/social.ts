export type Social = {
  github?: string
  x?: string
  juejin?: string
  qq?: string
  wx?: string
  cloudmusic?: string
  zhihu?: string
  email?: string
  discord?: string
  telegram?: string
}

type SocialValue = {
  href?: string
  title: string
  icon: string
  color: string
}

const social: Social = {
  github: 'https://github.com/Kemeow815',
  x: 'https://twitter.com/kemiaosw',
  // juejin: 'https://juejin.cn/user/1565318510545901',
  // wx: 'https://img.kuizuo.cn/wechat.png',
  // qq: 'https://img.kuizuo.cn/qq.png',
  // zhihu: 'https://www.zhihu.com/people/kuizuo',
  qq: 'https://qm.qq.com/q/m8FW8Y6TkY',
  cloudmusic: 'https://music.163.com/#/user/home?id=1725716511',
  email: 'mailto:me@kemiaosw.top',
  telegram: 'https://t.me/KemiaoJun',
  // discord: 'https://discord.gg/M8cVcjDxkz',
}

const socialSet: Record<keyof Social | 'rss', SocialValue> = {
  github: {
    href: social.github,
    title: 'GitHub',
    icon: 'ri:github-line',
    color: '#010409',
  },
  juejin: {
    href: social.juejin,
    title: '掘金',
    icon: 'simple-icons:juejin',
    color: '#1E81FF',
  },
  x: {
    href: social.x,
    title: 'X',
    icon: 'ri:twitter-x-line',
    color: '#000',
  },
  wx: {
    href: social.wx,
    title: '微信',
    icon: 'ri:wechat-2-line',
    color: '#07c160',
  },
  zhihu: {
    href: social.zhihu,
    title: '知乎',
    icon: 'ri:zhihu-line',
    color: '#1772F6',
  },
  discord: {
    href: social.discord,
    title: 'Discord',
    icon: 'ri:discord-line',
    color: '#5A65F6',
  },
  telegram: {
    href: social.telegram,
    title: 'Telegram',
    icon: 'ri:telegram-line',
    color: '#0088CC',
  },
  qq: {
    href: social.qq,
    title: 'QQ',
    icon: 'ri:qq-line',
    color: '#1296db',
  },
  email: {
    href: social.email,
    title: '邮箱',
    icon: 'ri:mail-line',
    color: '#D44638',
  },
  cloudmusic: {
    href: social.cloudmusic,
    title: '网易云',
    icon: 'ri:netease-cloud-music-line',
    color: '#C20C0C',
  },
  rss: {
    href: '/blog/rss.xml',
    title: 'RSS',
    icon: 'ri:rss-line',
    color: '#FFA501',
  },
}

export default socialSet
