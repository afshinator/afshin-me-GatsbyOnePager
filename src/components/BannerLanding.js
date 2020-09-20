import React from 'react'
import picme from '../assets/images/me1.png'

const BannerLanding = props => (
  <section id="banner" className="style2">
    <div className="inner">
    <img
        src={picme}
        alt="Picture of Afshin"
        style={{
          maxWidth: '115px',
          float: 'right',
          borderRadius: '9999px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.35)'
        }}
      />
      <header className="major">
        <h1>About Afshin</h1>
      </header>
      <div style={{ clear: 'right' }}></div>
      {/* <div className="content">
                <p>.</p>
            </div> */}
    </div>
  </section>
)

export default BannerLanding
