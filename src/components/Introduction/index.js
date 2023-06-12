import '../../App.scss';
import { ReactComponent as GitHubIcon } from '../../assets/images/github-icon.svg';
import { ReactComponent as LinkedinIcon } from '../../assets/images/linkedin-icon.svg';
import { ReactComponent as WorkanaIcon } from '../../assets/images/linkedin-icon.svg';
import { ReactComponent as FrontEndIcon } from '../../assets/images/linkedin-icon.svg';

export default function Introduction() {
    return (
        <section className='introduction'>
            <div>
                <h1>
                    Front-End <br/>
                    <span>
                        Developer
                    </span>
                </h1>
                <p>
                    Hi, I'm Enzo Santana, a Front-End Developer based in São Paulo, Brasil
                </p>
                <div className='icons'>
                    <LinkedinIcon />
                    <FrontEndIcon />
                    <WorkanaIcon />
                    <GitHubIcon />
                </div>
            </div>
        </section>
    );
}
