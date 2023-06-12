import '../../App.scss';

function NavTabs(props) {
    return (
        <li>
            <a href={props.section}>{props.title}</a>
        </li>
    );
}

export default NavTabs;
