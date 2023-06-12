import '../../App.scss';
import NavTabs from './NavTabs';

function Header() {
    return (
        <header>
            <h2>AnakonStar</h2>
            <nav>
                <ul>
                    <NavTabs title='About me' section='#'/>
                    <NavTabs title='Habilities' section='#'/>
                    <NavTabs title='Formation' section='#'/>
                    <NavTabs title='Projects' section='#'/>
                    <NavTabs title='Contacts' section='#'/>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
