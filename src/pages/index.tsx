import styles from './styles.module.scss'
import { HorizontalLine } from '@components/Line'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles['leftWrapper']}></div>
      <div className={styles.middleWrapper}></div>
      <div className={styles.rigthWrapper}>
        <div className={styles.frontendDev}>
          <p>FRONT END DEVELOPER</p>
        </div>
      </div>
    </div>
  )
}
