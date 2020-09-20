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
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
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
