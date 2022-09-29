import { CSSProperties } from 'react'

export type Selectors =
  | 'root'
  | 'wrapper'
  | 'input'
  | 'values'
  | 'value'
  | 'valueIcon'
  | 'actions'
  | 'separator'
  | 'actionIcon'
  | 'dropdown'
  | 'itemsWrapper'
  | 'item'

export interface Option {
  name: string
  value: string
}

export interface SelectProps {
  options: Option[]
  placeholder: string
  value: string
  clearable?: boolean
  multiple?: boolean
  styles?: Partial<Record<Selectors, CSSProperties>>
}
