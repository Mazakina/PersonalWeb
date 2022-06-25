import '../styles/globals.css'
import Header from '../components/Header/index'
import styles from '../styles/Home.module.scss'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.container}>

      <Header/>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
