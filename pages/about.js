import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

// import Menu from '../component/header';
// import Footer from '../component/footer';

export default function About() {
  return (
    <div className={styles.container}>
      <div className="page-wrapper">
        <header className="masthead1">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center"></div>
            </div>
          </div>
        </header>

        <div className="">
          <h4 className=" display-4 mt-5 ml-5 pr-5 pl-5 text-about">
            DESIGNING PROCESS{' '}
          </h4>
          <p className="lead ml-5 pr-5 pl-5 text-p">
            After talking to the client and considering the target market, it
            was clear to me that we needed to create a very traditional,
            high-end brand aesthetic. I experimented with circular shapes and
            curve lines for the look and feel of the website, and in the end, we
            decided to add lifestyle imagery to brighten up the page&apos;s
            overall look. The simple green colour scheme conveys cleanliness and
            happiness.
            <br />
            <br />I kept the business card quite traditional and corporate and
            it was printed on heavy matte stock to give it a quality feel. I
            worked together with the client to source images that were bright
            and mainly Green and white in colour, sticking with greenery and
            interior photos rather than people.
          </p>
        </div>

        <br />

        <div className="">
          <h4 className=" display-4 mt-5 ml-5 pr-5 pl-5 text-about">
            WEBSITE DESIGN
          </h4>
          <p className="lead ml-5 pr-5 pl-5 text-p">
            I worked with the client to figure out the website structure and
            content. The sitemap was purposely kept small and shallow to ensure
            that the website could be quickly and easily navigated. I sketched
            out some initial concepts and wireframes and discussed them with the
            client to ensure that we were both on the same page.
            <br />
            <br />
            The main aim was to create a brochure website that showcased the
            service offering of the company. Once the client was happy with the
            initial direction, I moved into Photoshop to put some concepts
            together based on the brand and initial sketches. The homepage is
            centered around an image slider with the main website sections
            positioned on the left. The content page below that has a similar
            layout with a strong focus on the content and imagery.
            <br />
            <br />
            Some design challenges are harder than others, but when you have a
            great client to work with, it makes it that much easier to achieve
            your objective. I had a great time working with this client and I’m
            glad that I could help them create a brand and website that met
            their company needs.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
