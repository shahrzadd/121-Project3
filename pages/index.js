import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className="page-wrapper">
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center"></div>
            </div>
          </div>
        </header>

        <div className="text-center">
          <h4 className="text-center display-4 mt-5 text-section">About</h4>
          <p className="lead">
            {' '}
            I&apos;m a creative designer based in Toronto, Canada.
          </p>
          <p className="text-center lead ml-5 pr-5 pl-5">
            {' '}
            Since 2005, I&apos;ve enjoyed turning complex problems into simple,
            beautiful and intuitive designs. When I&apos;m not pushing pixels,
            you&apos;ll find me cooking, gardening or working out in the park.
          </p>
        </div>

        <div className="container mt-5">
          <h5 className=" cards-section mt-5">
            <span>Some of our latest work</span>
          </h5>

          <div className="row mt-5 ">
            <div className="col-sm-12 col-md-4  ">
              <div className="card" style={{ width: '18rem' }}>
                <Image
                  className="card-img-top"
                  style={{ height: '11rem' }}
                  src="/image/image1.png"
                  alt="Card image cap"
                  layout="fill"
                />
                <div className="card-body">
                  <h6 className="card-title ml-5">The Healthy Home</h6>
                  <p className="card-text mr-4 text-center">Web Design </p>
                  {/* <Link passHref="/about" className="learn-more">
                    {' '}
                    <button type="button" className="btn btn-outline-secondary">
                      {' '}
                      Learn More{' '}
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 ">
              <div className="card" style={{ width: '18rem' }}>
                <Image
                  className="card-img-top"
                  style={{ height: '11rem', layout: 'fill' }}
                  src="/image/image2.png"
                  alt="Card image cap"
                  layout="fill"
                />
                <div className="card-body">
                  <h6 className="card-title  text-center">Get Set Pet</h6>
                  <p className="card-text text-center">Web Design </p>
                  {/* <Link passHref="/portfolio" className="learn-more">
                    
                    <button type="button" className="btn btn-outline-secondary">
                      
                      Learn More{' '}
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-4 ">
              <div className="card" style={{ width: '18rem' }}>
                <Image
                  className="card-img-top"
                  style={{ height: '11rem', layout: 'fill' }}
                  src="/image/image3.png"
                  alt="Card image cap"
                  layout="fill"
                />
                <div className="card-body">
                  <h6 className="card-title text-center">bgX</h6>
                  <p className="card-text text-center">Web Design </p>
                  {/* <Link passHref="/service" className="learn-more">
                    {' '}
                    <button type="button" className="btn btn-outline-secondary">
                      {' '}
                      Learn More{' '}
                    </button>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
