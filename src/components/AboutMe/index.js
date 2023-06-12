import '../../App.scss';
import photo from '../../assets/images/photo.jpeg';

function AboutMe() {
    return (
        <section className='aboutme'>
            <div>
                <img src={photo}/>
                <div className='text'>
                    <h1>
                        About me
                    </h1>
                    <h2>
                        A dedicated Front-End Developer based in São Paulo, Brasil
                    </h2>
                    <p>
                        I'm very efficient and focused in everything I do and as well as building this portfolio, I like to get my hands dirty and make a difference. I have good teamwork and a thirst for knowledge, which makes me learn quickly and adapt to any work environment.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
