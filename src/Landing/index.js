import dashboard from '../Assets/dashboard.png';

const Landing = function (){
    return(
        <section className="banner" style={{ backgroundImage: `url(${dashboard})` }}>            
            <div className="content">
                <h3 className='body-text'>SUUBI is what your SACCO needs to move to the next level.<br/>Automate your SACCO now!</h3>
                <button className='get-started-btn'>Get Started</button>
            </div>
        </section>
    )
}

export default Landing;