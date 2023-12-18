export interface IconProps {
  /**
   * icon 类型：
   * - iconify：iconify 中的svg图标，默认
   * - svg：本地 svg
   * - iconfont：本地或在线 iconfont 图标
   */
  type?: 'iconify' | 'svg' | 'iconfont'
  /**
   * 本地 svg-icon 前缀，与 vite.config.ts 中配置的 symbolId 一致。默认值为 icon
   */
  prefix?: string
  /**
   * svg-icon 图标名称或 className
   */
  icon: string
  /**
   * 颜色
   */
  color?: string

  /**
   * iconfont url
   */
  url?: string

  fontFamily?: string
}
