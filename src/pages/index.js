import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/me2.png'
import pic02 from '../assets/images/02-screen.jpg'
import pic03 from '../assets/images/mobile1.jpg'
import pic04 from '../assets/images/kybd.jpg'
import pic05 from '../assets/images/yinYang.jpg'
import pic06 from '../assets/images/drums.jpg'

class HomeIndex extends React.Component {
  render() {
    return (
      <Layout>
        <Helmet
          title="Gatsby Starter - Forty"
          meta={[
            { name: 'description', content: 'Website of Afshin Mokhtari' },
            { name: 'keywords', content: 'afshin, afshinator' },
          ]}
        ></Helmet>

        <Banner />

        <div id="main">
          <section id="one" className="tiles">
            <article style={{ backgroundImage: `url(${pic01})` }}>
              <header className="major">
                <h3>About Me</h3>
              </header>
              <Link to="/landing" className="link primary"
              aria-label="to about page"
              ></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic02})` }}>
              <header className="major">
                <h3>Mostly Front-End</h3>
                <p>Browser Technologies and more</p>
              </header>
              <Link to="/landing" className="link primary" aria-label="to about page"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic03})` }}>
              <header className="major">
                <h3>Mobile Development</h3>
                <p>With React-Native</p>
              </header>
              <Link to="/landing" className="link primary" aria-label="to about page"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic04})` }}>
              <header className="major">
                <h3>Computer Science</h3>
                <p>And other tech</p>
              </header>
              <Link to="/landing" className="link primary" aria-label="to about page"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic05})` }}>
              <header className="major">
                <h3>Health & Natural Medicine</h3>
                <p>Acupuncture, Herbs, QiGong, TaiChi</p>
              </header>
              <Link to="/landing" className="link primary" aria-label="to about page"></Link>
            </article>
            <article style={{ backgroundImage: `url(${pic06})` }}>
              <header className="major">
                <h3>Drumming</h3>
                <p>The hobby of Shamans</p>
              </header>
              <Link to="/landing" className="link primary" aria-label="to about page"></Link>
            </article>
          </section>
          <section id="two">
            <div className="inner">
              <header className="major">
                <h2>September 2020</h2>
              </header>
              <p>
                Its been some time since I had my own site up. With the coming
                of the Covid, I found time to dive into{' '}
                <strong>Gatsby-JS</strong>{' '}
                and decided to pull together a blog and much more. This isn't
                it!
              </p>
              <p>
                This is just a little interim site while I get that up in
                October.
              </p>
              {/* <ul className="actions">
                <li>
                  <Link to="/landing" className="button next">
                    Get Started
                  </Link>
                </li>
              </ul> */}
            </div>
          </section>
        </div>
      </Layout>
    )
  }
}

export default HomeIndex
