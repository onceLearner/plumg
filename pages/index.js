import Head from 'next/head'
import Destinations from '../components/destinations'
import Footer from '../components/Footer'
import LangCurrency from '../components/LangCurrency'
import UpperFooterImage from '../components/UpperFooterImage'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Plumguide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>



        <UpperFooterImage />

        <Destinations />

      </main>



      <footer className="flex-0 ">

        <div className="md:absolute right-4  md:mt-20 md:mr-4  z-10   ">
          <LangCurrency />

        </div>

        <div>
          <Footer />
        </div>




      </footer>
    </div >
  )
}
