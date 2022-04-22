import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Menu from "../component/header";
import Footer from "../component/footer";

export default function Service () {
  return (
  
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
		
		<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous"/>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

	

      </Head>

	 
	  <div className="page-wrapper">
	 
	  <Menu/>


  

    <header className="masthead3">
  <div className="container h-100">
    <div className="row h-100 align-items-center">
      <div className="col-12 text-center">
       
      </div>
    </div>
  </div>
</header>



<div className="">
  <h4 className=" display-4 mt-5 ml-5 pr-5 pl-5 text-about">DESIGNING PROCESS </h4>
  <p className="lead ml-5 pr-5 pl-5 text-p">
    
  Get Set Pet” is a luxurious pet store based in London, UK. After talking to the client and doing some research
   into the company, it was clear that the brand needed to have a professional, corporate aesthetic that still
    appealed to those in the technology sector. We wanted to create a symbol that represented the company
     and its ideals of pets, luxury and playful. Our belief that a relatively small company can still be 
     powerful was also something we wanted to capture in the symbolism.<br/><br/>

     We threw some ideas around and started looking to the animal kingdom, particularly dogs and cats, for inspiration.
      We discovered that the domestic pets, although van be relatively small are a perfect symbol for a company
       that uses technology to accommodate pet owners need

.<br/><br/>

I sketched out a bunch of ideas for the logo symbol, concentrating on the shape of the pets in playful way.
 I wanted to take a more abstract approach and focus on representing the pet’s paws in different ways. 
 I started using curves to draw paws in various shapes and sizes, but soon realised that sharp lines and 
 angles would help me portray the playfullness we were after. I kept the logo design very minimal
  and paired the symbol with clean sans-serif typography as seen above.
.<br/><br/>


I sketched out a few quick concepts for the homepage and then got straight into Photoshop. 
We decided to centre the homepage on an image collage that slowly fades from one image to the next. 
Sharp corners and strong flat colours are used throughout to be consistent with the logo design.<br/>



</p>
 
 
</div>

<br/>

<div className="">
  <h4 className=" display-4 mt-4 ml-5 pr-5 pl-5 text-about">LONG_TERM GAINS</h4>
  <p className="lead ml-5 pr-5 pl-5 text-p">
    
  I was greatly appreciative of the opportunity to work with my client to help build them a solid brand
   and web presence. We enjoyed working together during the creative process and we’re all very happy 
   with the result. I hope their investment brings them long-term gains in the years to come.<br/><br/>

  
</p>
 
 
</div>









<Footer/>
</div>


     

    </div>
  
  )
}
