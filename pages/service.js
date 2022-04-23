import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Service() {
  return (
    <div className={styles.container}>
      <div className="page-wrapper">
        <header className="masthead2">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-12 text-center"></div>
            </div>
          </div>
        </header>

        <div className="">
          <h4 className=" display-4 mt-5 ml-5 pr-5 pl-5 text-about">
            THE CHALLENGE{' '}
          </h4>
          <p className="lead ml-5 pr-5 pl-5 text-p">
            The bgX homepage hadn’t been updated in a while and there were a
            bunch of known customer pain points which needed to be addressed.
            Our goal was to improve the user experience, modernise the aesthetic
            and increase conversions on available products. The tricky part was
            that there wasn’t scope for a back-end rebuild, so we had to work
            with what was already there and change the front-end into something
            new. The design didn’t need to be responsive as there is a separate
            mobile site.
            <br />
            <br />
            I It was clear that the goal was to fit everything above the fold. I
            suspect that it may have been a business or marketing requirement at
            the time. Somehow, the designer of the page managed to do it, which
            is actually pretty impressive. It must have been tricky as there are
            quite a few elements to fit on the page.
            <br />
            <br />
            Because the main call to action button is above the fold, the page
            is quite busy and cluttered, making it difficult for users to find
            what they’re looking for. We used insights from analytics and user
            feedback on the old bgX homepage to help inform the new design. .
            <br />
            <br />
          </p>
        </div>

        <br />

        <div className="">
          <h4 className=" display-4 mt-4 ml-5 pr-5 pl-5 text-about">
            NEW DESIGN
          </h4>
          <p className="lead ml-5 pr-5 pl-5 text-p">
            Since much of our user base is less tech savvy, we wanted to soften
            the blow of the change to ease them into the new page. We decided to
            create a simple opt-in tour of the new bgX homepage, which simply
            pointed out the changes on the page. We placed it at the bottom of
            the page to ensure that it didn’t get in the way..
            <br />
            <br />
            Once we were happy with the new design above, we A/B tested it
            against the old one on a small portion of our user base. Much to our
            delight, the new design worked wonders, performing better than the
            old one in key areas. While the limited technical scope did narrow
            our design options, it was a fun and challenging project to work on.
            I think it demonstrates how purely visual design changes can have a
            significant impact on the user experience and conversion rate of a
            homepage.
            <br />
            <br />
          </p>
        </div>
      </div>
    </div>
  );
}
