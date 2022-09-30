import styles from './styles.module.scss'
import { HorizontalLine, VerticalLine } from '@components/Line'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles['leftWrapper']}></div>
      <div className={styles.middleWrapper}></div>
      <div className={styles.rigthWrapper}>
        <HorizontalLine size="md" />

        <div className={styles.frontendDev}>
          <VerticalLine size="md" />
          <p>FRONT END DEVELOPER</p>
        </div>
      </div>
    </div>
  )
}
