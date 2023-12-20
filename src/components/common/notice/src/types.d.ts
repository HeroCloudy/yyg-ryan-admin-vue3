import type { AvatarProps, TagProps } from 'element-plus'
import type { CSSProperties } from 'vue'
import type { NotificationProps } from '../../notification/src/types'

export interface MessageListItem {
  avatar?: Partial<AvatarProps>
  title: string
  content?: string
  time?: string
  tagProps?: Partial<TagProps>
  tag?: string
}

export interface NoticeActionsItem {
  icon?: string
  color?: string
  title: string
  click: () => void
}

export interface NoticeMessageListOptions {
  title: string
  contents?: MessageListItem[]
}

export interface NoticeMessageListProps {
  lists: NoticeMessageListOptions[]
  actions: NoticeActionsItem[]
  wrapClass?: string
  wrapStyle?: CSSProperties
}

export interface NoticeProps extends NoticeMessageListProps, Partial<NotificationProps> {}
