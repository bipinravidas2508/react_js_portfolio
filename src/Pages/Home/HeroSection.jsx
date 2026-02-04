export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Bipin Ravidas </p>
               
               <h1 className="hero--section--title">
                <span className="hero--section--title--color"> Full Stack</span>{" "}
                <br />
                Developer</h1> 
                <p className="hero--section--description">I'm Bipin Ravidas
Bachelor of Technology - Electrical and Electronics Engineering from BIT Mesra
& Web Developer.
                    <br />I have a strong interest in software development and computer programming. 
                    To strengthen my skills, I have learned Java and solved more than 200 problems on LeetCode, which helped me improve my problem-solving ability and logical thinking. To gain practical exposure, I have also learned full-stack development with the MERN stack..</p></div>
                    <button className="btn btn--primary">Get In Touch</button>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero.png" alt="Hero Section" />
            </div>

        </section>


    ); 
}
