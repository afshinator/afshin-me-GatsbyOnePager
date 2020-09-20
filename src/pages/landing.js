import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import BannerLanding from '../components/BannerLanding'

import pic08 from '../assets/images/heart-rate.jpg'
import pic09 from '../assets/images/learn.gif'
import pic10 from '../assets/images/taiji.png'


import { shallowCompare } from 'shallow-compare';

const Landing = props => (
  <Layout>
    <Helmet>
      <title>About Afshin Mokhtari - Software Engineer</title>
      <meta name="description" content="About Afshin Page" />
    </Helmet>

    <BannerLanding />

    <div id="main">
      <section id="one">
        <div className="inner">
          <header className="major">
            <h2>I write computer software</h2>
          </header>

          <p>
            I got a degree in Computer Science and wrote a lot of code in C
            before the web became a thing.
          </p>
          <p>
            I've been a <strong>javascript</strong> developer since JQuery and Backbone-JS,
            and these days I focus on web and mobile apps with <strong>React-JS</strong> and related
            technologies.  Currently in the React universe, I'm excited about what <strong>Next.JS</strong> is bringing to the table.
          </p>
          <p>I've also got an interest in AI/ML so I'm paying more attention to Python this year.</p>

        </div>
      </section>
      <section id="two" className="spotlights">
        <section>
          <Link to="/generic" className="image">
            <img src={pic08} alt="Health graphic" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Health is wealth</h3>
              </header>
              <p>
                I like to focus my engineering efforts in the fields of medicine
                and social good. Time on the planet is short, it seems to me a
                good idea to make the stay as pleasant for everyone as possible.</p>
                <p>
                I was the principal mobile engineer on a mindfulness mobile apps
                at <a href="http://whil.com">whil.com</a>, and  
                at <a href="http://doc.ai">doc.ai</a> where our goal was
                to address disease prevention using AI and ML.  Most recently I've
                been 
                diving into Machine Learning projects around health data and pursuing some 
                ideas about how to leverage that data.
              </p>

              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic09} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Knowledge is power</h3>
              </header>
              <p>
                I like to learn.  The computer industry is
                ever-changing and education is the key to staying
                to on top. Recently, life gave us the Covid-19 lemon, I've decided
                to make lemonade by taking the opportunity to learn the
                following:
              </p>
              <ul>
                <li>Gatsy JS, Next JS</li>
                <li>Machine Learning</li>
                <li>Performant web and mobile animations</li>
              </ul>

              {/* <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul> */}
            </div>
          </div>
        </section>
        <section>
          <Link to="/generic" className="image">
            <img src={pic10} alt="" />
          </Link>
          <div className="content">
            <div className="inner">
              <header className="major">
                <h3>Life has many joys</h3>
              </header>
              <p>
                Tech is fun, but life is much larger than that.
                I'm passionate about music and I play drums.  I also practice Tai Chi
                and have taught for several years.  
              </p>
              <ul className="actions">
                <li>
                  <Link to="/generic" className="button">
                    Learn more
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </section>
    </div>
  </Layout>
)

export default Landing
