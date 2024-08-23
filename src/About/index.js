import './index.css';
import suubiabout from '../About/Aboutimages/Suubiabout.png';
import quality from '../About/Aboutimages/efficiency.png';
import qualitys from '../About/Aboutimages/quality.png';
import trusts from '../About/Aboutimages/trust.png';

function About() {
    return (
        <div id="about" className="container"> {/* Add id here */}
            <br />
            <h2>About Us</h2>
            <div className='about'>
                <div>
                    <img src={suubiabout} alt='About' className='aboutimage' />
                </div>
                <div>
                    <div className='abouttext'>
                        <p>We have member tools which will enable your Sacco Member to save, borrow and repay through their mobile phones.</p>
                    </div>
                    <h3>Our Core Values Are:</h3>
                    <div className='values'>
                        <p><img src={trusts} alt="trust" className='trust' /> <b>Trust</b></p>
                        <p><img src={quality} alt="Quality" className='quality' /> <b>Quality</b></p>
                        <p className='efficiencys'><img src={qualitys} alt="Efficiency" className='efficiency' /> <b>Efficiency</b></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;