// 极光夜的动态背景：渐变夜空、三条缓慢飘动的极光、闪烁的星星、右上角一弯新月、底部远山。
// 只用 SVG + CSS 动画，不含脚本。

function stars() {
  // 固定种子的伪随机，保证每次画出来的星空一样
  let seed = 7
  const rand = () => {
    seed = (seed * 9301 + 49297) % 233280

    return seed / 233280
  }
  const out = []

  for (let i = 0; i < 90; i++) {
    const x = (rand() * 1600).toFixed(0)
    const y = (rand() * 620).toFixed(0)
    const r = (0.6 + rand() * 1.3).toFixed(2)
    const delay = (rand() * 6).toFixed(2)
    const dur = (3 + rand() * 4).toFixed(2)
    out.push(
      `<circle class="s" cx="${x}" cy="${y}" r="${r}" style="animation-delay:-${delay}s;animation-duration:${dur}s"/>`,
    )
  }

  return out.join('')
}

export const SCENE = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
<defs>
  <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0" stop-color="#070a1c"/>
    <stop offset="0.55" stop-color="#0d1430"/>
    <stop offset="1" stop-color="#141a3a"/>
  </linearGradient>
  <linearGradient id="a1" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#3ef0b8" stop-opacity="0"/>
    <stop offset="0.35" stop-color="#3ef0b8" stop-opacity="0.55"/>
    <stop offset="0.7" stop-color="#5ad1ff" stop-opacity="0.45"/>
    <stop offset="1" stop-color="#5ad1ff" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="a2" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#9a7bff" stop-opacity="0"/>
    <stop offset="0.4" stop-color="#9a7bff" stop-opacity="0.45"/>
    <stop offset="0.8" stop-color="#ff7ac8" stop-opacity="0.3"/>
    <stop offset="1" stop-color="#ff7ac8" stop-opacity="0"/>
  </linearGradient>
  <linearGradient id="a3" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0" stop-color="#7cffd4" stop-opacity="0"/>
    <stop offset="0.5" stop-color="#7cffd4" stop-opacity="0.35"/>
    <stop offset="1" stop-color="#7cffd4" stop-opacity="0"/>
  </linearGradient>
  <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
    <stop offset="0" stop-color="#fff6d8" stop-opacity="0.35"/>
    <stop offset="1" stop-color="#fff6d8" stop-opacity="0"/>
  </radialGradient>
  <filter id="blur" x="-20%" y="-50%" width="140%" height="200%"><feGaussianBlur stdDeviation="28"/></filter>
  <mask id="crescent"><rect width="200" height="200" fill="#000"/><circle cx="100" cy="100" r="34" fill="#fff"/><circle cx="116" cy="90" r="30" fill="#000"/></mask>
</defs>
<style>
  .s { fill:#e8eeff; animation: tw 5s ease-in-out infinite; }
  @keyframes tw { 0%,100% { opacity:.15 } 50% { opacity:.95 } }
  .b1 { animation: d1 26s ease-in-out infinite alternate; transform-origin: 800px 300px; }
  .b2 { animation: d2 34s ease-in-out infinite alternate; transform-origin: 800px 360px; }
  .b3 { animation: d3 20s ease-in-out infinite alternate; transform-origin: 800px 240px; }
  @keyframes d1 { from { transform: translateX(-120px) skewX(-8deg) scaleY(1) } to { transform: translateX(140px) skewX(10deg) scaleY(1.25) } }
  @keyframes d2 { from { transform: translateX(160px) skewX(6deg) scaleY(1.2); opacity:.6 } to { transform: translateX(-140px) skewX(-9deg) scaleY(.9); opacity:1 } }
  @keyframes d3 { from { transform: translateX(-60px) scaleY(.8); opacity:.4 } to { transform: translateX(90px) scaleY(1.3); opacity:.9 } }
  .moon { animation: breathe 9s ease-in-out infinite; }
  @keyframes breathe { 0%,100% { opacity:.85 } 50% { opacity:1 } }
</style>
<rect width="1600" height="1000" fill="url(#sky)"/>
<g>${stars()}</g>
<g filter="url(#blur)">
  <path class="b1" d="M-100 330 C 250 180, 520 420, 820 260 S 1400 140, 1700 300 L 1700 420 C 1400 260, 1100 470, 820 380 S 250 300, -100 450 Z" fill="url(#a1)"/>
  <path class="b2" d="M-100 420 C 300 300, 600 520, 900 380 S 1450 300, 1700 420 L 1700 500 C 1400 400, 1100 560, 880 470 S 300 400, -100 520 Z" fill="url(#a2)"/>
  <path class="b3" d="M-100 220 C 350 120, 700 300, 1000 180 S 1500 120, 1700 200 L 1700 260 C 1450 180, 1150 340, 950 260 S 350 200, -100 300 Z" fill="url(#a3)"/>
</g>
<svg x="1080" y="40" width="480" height="300" viewBox="0 0 480 300" preserveAspectRatio="xMaxYMin meet" overflow="visible">
  <g class="moon">
    <circle cx="380" cy="90" r="90" fill="url(#glow)"/>
    <g transform="translate(280 -10)"><rect width="200" height="200" fill="#fff3cf" mask="url(#crescent)"/></g>
  </g>
</svg>
<path d="M0 1000 L0 860 C 120 820, 220 780, 340 820 S 560 760, 700 800 S 920 740, 1080 790 S 1340 760, 1460 800 L 1600 780 L1600 1000 Z" fill="#060816" opacity=".9"/>
<path d="M0 1000 L0 910 C 180 880, 300 900, 460 870 S 760 900, 960 880 S 1300 890, 1600 860 L1600 1000 Z" fill="#04050f"/>
</svg>`
