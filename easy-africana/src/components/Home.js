import React from 'react'
import HomeCSS from './home.module.css'

const Home = () => {
  return (
    <div style={{ width: '1512px' }}>
      <div className={HomeCSS.panel1}>
        <div className={HomeCSS.panel1Content}>
          <h5><span>AFRICA'S</span> TECHNOLOGY SOLUTION CONSORT</h5>
          <h1>We help develop technology solutions that <span>scale.</span></h1>
          <p>Digitally transforming various industries in Africa with managed IT services and solutions to power their business with the use of technology and advanced models.</p>
          <button className={HomeCSS.learn}>Learn More</button>
          <button className={HomeCSS.hire}>Hire Us</button>
        </div>
        <div className={HomeCSS.panel1img}>a</div>
      </div>

      <div className={HomeCSS.panel2}>
        <div className={HomeCSS.header}>
          <div className={HomeCSS.lineLeft}></div>
          What We Do
          <div className={HomeCSS.lineRight}></div>
        </div>
        <h3>Enabling Brands to Grow by Leveraging Innovative IT Solutions</h3>
        <div className={HomeCSS.infobox}>
          <div className={HomeCSS.infopanel}>
            <div className={HomeCSS.infopanelpic}></div>
            <h5>Digital Transformation</h5>
            <p>With the help of technology, Easy Africana helps to transform and scale up businesses digitally so that they can deliver value to their clients, grow their business and meet business objectives.</p>
          </div>
          <div className={HomeCSS.infopanel} style={{ boxShadow: '0 -5px 0 #FF9654, 0.1px 0 5px gray' }}>
            <div className={HomeCSS.infopanelpic}></div>
            <h5>Legal Advice</h5>
            <p>We at Easy Africana, have a dedicated team of lawyers that give legal advise to tech startups and businesses to enable them make informed and avoid wrong decisions while growing their brand.</p>
          </div>
          <div className={HomeCSS.infopanel}>
            <div className={HomeCSS.infopanelpic}></div>
            <h5>Business Strategies</h5>
            <p>Easy Africana identifies, nuture, develop, and execute pragmatic and profitable strategies that helps organizations, companies and businesses grow to the level that they wish to attain .</p>
          </div>
        </div>
      </div>

      <div className={HomeCSS.panel3}>
        <h4>Trusted by over <span>200,000</span> clients including</h4>
        <div className={HomeCSS.clientpanel}>
          <div className={HomeCSS.clientcell}></div>
          <div className={HomeCSS.clientcell}></div>
          <div className={HomeCSS.clientcell}></div>
          <div className={HomeCSS.clientcell}></div>
          <button className={HomeCSS.clientscroll}></button>
        </div>
      </div>

      <div className={HomeCSS.panel4}>
        <div className={HomeCSS.chooseus}>
          <div className={HomeCSS.chooseusimg}></div>
          <div className={HomeCSS.chooseuscontent}>
            <h4>Why You Should Choose <span>Us</span></h4>
            <ul>
              <li>Easy Africana is one of the top technology
                companies in Africa.</li>
              <li>Easy Africana focuses on your business to build solutions according to your needs and market conditions.</li>
              <li>Easy Africana covers a wide range of
                industry sectors.</li>
              <li>Easy Africana is led by industry experts.</li>
            </ul>
          </div>
          <button className={HomeCSS.hire}>Hire Us</button>
        </div>
        <div className={HomeCSS.header} style={{ marginTop: '318px' }}>
          <div className={HomeCSS.lineLeft}></div>
          Services
          <div className={HomeCSS.lineRight}></div>
        </div>
        <h4>We Take Your Business to The Next Level With Our <span>Verified Solutions</span></h4>
        <div className={HomeCSS.servicesbox}>
          <div className={HomeCSS.servicespanel}>
            <div className={HomeCSS.servicesimg}></div>
            <h5>Business Management</h5>
            <p>At Easy Africana, we help our clients figure out challenges by providing business management services tailored for startups and others. We want to help you find the right solutions for your business goals, whether personal or organizational in nature.  We know that businesses come in different types and we also know that they need guidance on some basic principles. After speaking with hundreds business owners just like you, we know what it takes to handle their companies successfuly. Whether you are struggling with brand management or support through growth phase, we are here to help!</p>
          </div>
          <div className={HomeCSS.servicespanel}>
            <div className={HomeCSS.servicesimg}></div>
            <h5>Innovative Technology</h5>
            <p>In the face of changing market conditions and the ever-increasing demand for innovation, Easy Africana is poised to deliver solutions that help our clients achieve their goals. Easy Africana has a proven track record of delivering innovative technologies and products that solve real-world problems for our clients. Our team of specialists is ready to help you build a new solution or modify an existing one in order to meet your needs. We understand that every business faces challenges unique to its own unique situation. That's why we specialize in helping you find the best solution for your industry.</p>
          </div>
        </div>
        <button className={HomeCSS.viewservices}>View All Services</button>
        <div className={HomeCSS.header} style={{ marginTop: '168.86px' }}>
          <div className={HomeCSS.lineLeft}></div>
          Reviews
          <div className={HomeCSS.lineRight}></div>
        </div>
        <h3>Here is What Our <span>Clients</span> Say About Us</h3>
        <div className={HomeCSS.reviewspanel}>
          <div className={HomeCSS.reviewbox}>
            <div className={HomeCSS.profile}>
              <div className={HomeCSS.profileimg}></div>
              <h6>Asila Gold</h6>
              <p>CEO, Alliance LTD</p>
            </div>
            <div className={HomeCSS.quote}>
              <h1>“</h1>
              <p>Easy Africana is a great team that is transparent and focuses on continual improvment of their clients. So glad I worked with them, my company enjoys the benefits they yielded.</p>
              <span>”</span>
            </div>
          </div>
          <div className={HomeCSS.reviewbox}>
            <div className={HomeCSS.profile}>
              <div className={HomeCSS.profileimg}></div>
              <h6>Siyabonga Kato</h6>
              <p>Founder, Comm
                Network Services.</p>
            </div>
            <div className={HomeCSS.quote}>
              <h1>“</h1>
              <p>I am pleased with the services that they rendered and we intend to work with them in future. Go Easy Africana.
              </p>
              <figcaption>”</figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home