import React from 'react'
import Layout from '../components/layout'

import me from '../assets/images/me2.png'


const NotFoundPage = () => (
  <Layout>
    <div id="main" className="alt">
        <section id="one">
            <div className="inner">
                <h1>NOT FOUND</h1>
                <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                <a href="https://afshin.me">To Afshin's home page</a>
            </div>
            <span className="image main"><img src={me} alt="afshin m" /></span>
        </section>
    </div>
  </Layout>
)

export default NotFoundPage
