import Head from 'next/head'
import styles from '../styles/Home.module.css'
export default function Header() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <div className='text-center container footers'>

      <hr/>
      <img src="image/logos.png " className='footer-logo' alt="image not Found "/>

      
      </div>
     



    </div>
  )
}