import React from 'react'

const Footer = props => (
  <footer id="footer">
    <div className="inner">
      <ul className="icons">
        <li>
          <a
            href="https://twitter.com/afshinator"
            className="icon alt fa-twitter"
            aria-label="to Afshin's Twitter"
          >
            <span className="label">Twitter</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/afshinator/"
            className="icon alt fa-instagram"
            aria-label="to Afshin's Instagram"
          >
            <span className="label">Instagram</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/afshinator"
            className="icon alt fa-github"
            aria-label="to Afshin's Github"
          >
            <span className="label">GitHub</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/afshinator/"
            className="icon alt fa-linkedin"
            aria-label="to Afshin's LinkedIn"
          >
            <span className="label">LinkedIn</span>
          </a>
        </li>
      </ul>
      <ul className="copyright">
        <li>&copy; 2020 Afshin Mokhtari</li>
        <li>
          Design: <a href="https://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </footer>
)

export default Footer
