import type { Register, ThemeSetArgs } from 'claude-code'

import { makeColors } from './make-colors.js'
import { SCENE } from './scene.js'

// 极光夜：深靛蓝的夜色，翡翠绿极光做强调色。为暗色模式设计。
const { theme, problems } = makeColors({
  label: 'Aurora Night',
  only: 'dark',
  roles: {
    accent: '#3ee0b0',
    danger: '#ff6b81',
    success: '#7be08a',
    warning: '#ffc46b',
    pro: '#a98bff',
  },
  dark: {
    gray: {
      anchors: {
        'surface-0': '#0b1024',
        'surface-1': '#11172f',
        'surface-2': '#161d38',
        'surface-3': '#1b2240',
        'text-primary': '#eef1ff',
        'text-secondary': '#c3c9e8',
        'text-muted': '#9aa2c8',
      },
    },
    git: {
      added: '#5fd99a',
      removed: '#ff6b81',
      modified: '#ffc46b',
    },
  },
})

const LOOK: ThemeSetArgs = {
  colors: theme,
  overrideColorScheme: 'dark',
  backdrop: {
    scene: 'aurora',
    glass: { blur: 18, tint: '#0b1024', opacity: 0.62 },
  },
}

export const register: Register = on => {
  on('session.start', async ($, e, next) => {
    const unpainted = problems.find(line => line.startsWith("Desktop won't paint"))

    if (unpainted !== undefined) {
      $.ui.toast(unpainted)
    }
    const set = await $.theme.set(LOOK)

    if (!set.isDrawn) {
      $.ui.status(set.reason)
    }

    return next(e)
  })

  on('ui.render', { component: 'Backdrop' }, ($, e, next) => {
    if (e.props.scene !== 'aurora' || (e.surface !== 'desktop' && e.surface !== 'mobile')) {
      return next(e)
    }
    const { Svg } = $.ui.resolve(e)

    return <Svg source={SCENE} alt="极光在星空下缓缓流动，右上角挂着一弯新月" isInteractive />
  })
}
