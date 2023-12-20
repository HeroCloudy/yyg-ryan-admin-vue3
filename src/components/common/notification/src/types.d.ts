import type { BadgeProps } from 'element-plus'

export interface NotificationProps extends Partial<BadgeProps> {
  icon?: string
  iconSize?: number
  iconColor?: string
  size?: number
  scale?: number
  color?: string
}
