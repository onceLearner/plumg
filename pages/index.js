import React, { useState } from "react"
import Head from 'next/head'
import Destinations from '../components/destinations'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LangCurrency from '../components/LangCurrency'
import LowerCards from '../components/LowerCards'
import MiddleShow from '../components/MiddleShow'
import Quote from '../components/Quote'
import RightSlider from '../components/rightSlider'
import UnderHeaderShow from '../components/UnderHeaderShow'
import UpperFooterImage from '../components/UpperFooterImage'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [zvalue, setZvalue] = useState(0)



  return (
    <div className={styles.container}>
      <Head>
        <title>Plumguide</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>



        <Header setZvalue={setZvalue} />

        <UnderHeaderShow zvalue={zvalue} />

        <Quote />

        <MiddleShow />

        <LowerCards />

        <div className="relative">

          <UpperFooterImage />
        </div>

        <Destinations />

      </main>



      <footer className="flex-0 ">





        <div className="md:absolute hidden md:block right-4  md:mt-20 md:mr-4  z-10   ">
          <LangCurrency />

        </div>


        <Footer />





      </footer>
    </div >
  )
}
