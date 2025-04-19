import Translate, { translate } from '@docusaurus/Translate'
import { Icon } from '@iconify/react'
import OpenSourceSvg from '@site/static/svg/undraw_open_source.svg'
import SpiderSvg from '@site/static/svg/undraw_spider.svg'
import WebDeveloperSvg from '@site/static/svg/undraw_web_developer.svg'

export type FeatureItem = {
  title: string | React.ReactNode
  description: string | React.ReactNode
  header: React.ReactNode
  icon?: React.ReactNode
}

const FEATURES: FeatureItem[] = [
  {
    title: translate({
      id: 'homepage.feature.developer',
      message: '在校大二学生',
    }),
    description: (
      <Translate>
        一个普普通通的大二学生，自动化专业，分享我所发现(并非创造)的资源，侵犯了您的权益的话，请联系我删除，希望未来更好吧！
      </Translate>
    ),
    header: <WebDeveloperSvg className="h-auto w-full" height={150} role="img" />,
    icon: <Icon icon="logos:typescript-icon" className="size-4 text-neutral-500" />,
  },
  {
    title: translate({
      id: 'homepage.feature.spider',
      message: '会点编程 & 自动化',
    }),
    description: (
      <Translate>
        专业自动化，不学点怎么办？业余在搞博客时学历点编程，纯纯菜鸟，不能帮上忙请见谅。
      </Translate>
    ),
    header: <SpiderSvg className="h-auto w-full" height={150} role="img" />,
  },
  {
    title: translate({
      id: 'homepage.feature.enthusiast',
      message: '开源爱好者',
    }),
    description: (
      <Translate>
        作为一名开源爱好者，积极参与开源社区，不断探索开源项目，希望有生之年能够构建出一个知名的开源项目。
      </Translate>
    ),
    header: <OpenSourceSvg className="h-auto w-full" height={150} role="img" />,
  },
]

export default FEATURES
