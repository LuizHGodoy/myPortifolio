import styles from './line.module.scss'

interface LineTypes {
  size?: string
}

export function HorizontalLine({ size = 'sm' }: LineTypes) {
  return <div className={styles[size]} />
}

export function VerticalLine({ size = 'sm' }: LineTypes) {
  return <div className={styles[size]} />
}
