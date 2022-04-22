import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Header() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
     

	  <nav class="navbar navbar-expand-lg py-3 navbar-dark bg-dark shadow-sm">
  <div class="container">
    <a href="#" class="navbar-brand">
      
      <img src="image/newlogo.png" width="45" alt="" class="d-inline-block align-middle mr-2" />
      
      <span class="text-uppercase font-weight-bold"></span>
    </a>

    <button type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler"><span class="navbar-toggler-icon"></span></button>

    <div id="navbarSupportedContent" class="collapse navbar-collapse">
      <ul class="navbar-nav ml-auto">
      <li class="nav-item active "><a href="/" class="nav-link">Home  <span class="sr-only">(current)</span></a></li>
       
        <li class="nav-item active ml-4"><a href="/about" class="nav-link">THH  <span class="sr-only">(current)</span></a></li>
        <li class="nav-item active ml-4"><a href="/portfolio" class="nav-link">GSP  <span class="sr-only">(current)</span></a></li>
        <li class="nav-item active ml-4" ><a href="/service" class="nav-link">BGX  <span class="sr-only">(current)</span></a></li>
       
       
      </ul>
    </div>
  </div>
</nav>


	 




    </div>
  )
}