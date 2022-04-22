import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Menu from "../component/header";
import Footer from "../component/footer";

export default function Home() {
  return (
  
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
		
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

	

      </Head>

	 
	  <div className="page-wrapper">
	 
	  <Menu/>



    

    <header className="masthead">
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-center">
       
      </div>
    </div>
  </div>
</header>





	  <div className="text-center">
  <h4 className="text-center display-4 mt-5 text-section">About</h4>
  <p className='lead'> I'm a creative designer based in Toronto, Canada.</p>
  <p className="text-center lead ml-5 pr-5 pl-5"> Since 2005, I've enjoyed turning complex problems into simple, beautiful and intuitive designs. When I'm not pushing pixels, you'll find me cooking, gardening or working out in the park.

</p>
 
 
</div>


<div className='container mt-5'>


<h5 className=' cards-section mt-5'><span>Some of our latest work</span></h5>



  <div className='row mt-5 '>
    <div className='col-sm-12 col-md-4  '>
      <div className="card" style={{width:"18rem"}}>
        <Image className="card-img-top" style={{height:"11rem"}} src="image/image1.png" alt="Card image cap" />
        <div className="card-body">
          <h6 className="card-title ml-5">The Healthy Home</h6>
          <p className="card-text mr-4 text-center">Web Design </p>
          <a href='/about' className='learn-more'> <button type="button" className="btn btn-outline-secondary"> Learn More </button></a>
        </div>
      </div>
    </div>
    <div className='col-sm-12 col-md-4 '>
      <div className="card" style={{width:"18rem"}}>
        <Image className="card-img-top" style={{height:"11rem"}} src="image/image2.png" alt="Card image cap" />
        <div className="card-body">
          <h6 className="card-title  text-center">Get Set Pet</h6>
          <p className="card-text text-center">Web Design </p>
          <a href='/portfolio' className='learn-more'> <button type="button" className="btn btn-outline-secondary"> Learn More </button></a>
        </div>
      </div>
    </div>
    <div className='col-sm-12 col-md-4 '>
      <div className="card" style={{width:"18rem"}}>
        <Image className="card-img-top" style={{height:"11rem"}} src="image/image3.png" alt="Card image cap" />
        <div className="card-body">
          <h6 className="card-title text-center">bgX</h6>
          <p className="card-text text-center">Web Design </p>
          <a href='/service' className='learn-more'> <button type="button" className="btn btn-outline-secondary"> Learn More </button></a>
        </div>
      </div>
    </div>
  </div>
</div>









<Footer/>

	




























</div>


     

    </div>
  
  )
}
