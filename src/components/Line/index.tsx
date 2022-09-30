import styles from './line.module.scss'

interface HorizontalLineTypes {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}
interface VerticalLineTypes {
  size?: 'md' | 'lg'
}

export function HorizontalLine({ size = 'md' }: HorizontalLineTypes) {
  return <div className={styles[`horizontal-${size}`]} />
}

export function VerticalLine({ size = 'md' }: VerticalLineTypes) {
  return <div className={styles[`vertical-${size}`]} />
}
