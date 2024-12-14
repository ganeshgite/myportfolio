

export default function HeroSection() {
 

  return (
    <section id="heroSection" className="hero--section">
      
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm ganesh Gite</p>
          <h1 className="hero--section--title title "  
>
<ul class="dynamic-txts">
      <li><span>Fullstack Developer</span></li>
      <li><span>Frontend Developer</span></li>
      <li><span>Backend Developer</span></li>
      <li><span>Freelancer</span></li>
    </ul>

   <span className="hero--section-title--color">
</span>{" "}
           
            
          </h1>
          
          <p className="hero--section-description">
          I specialize in creating user-friendly web applications and backend systems 
      using technologies like React, Node.js, and MongoDB. Let’s build something amazing together!


          </p>

         <a href="./CV/resume_ganeshgite.pdf"  download> <button className="btn btn-primary hero--section-btn">Download CV</button></a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
      
    </section>
  );
}
