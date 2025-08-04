import '../styles/global.scss'

import { Header } from '../components/Header'
import { Player } from '../components/Player'

import styles from '../styles/app.module.scss'
import { PlayerContexPorvider } from '../contexts/playerContext'


function MyApp({ Component, pageProps }) {

  return(
    <PlayerContexPorvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContexPorvider>
  )
}

export default MyApp
