import {FC} from "react";
import {Link} from 'react-router-dom';

export const Header: FC = () => {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/about">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/form">Form</Link>
                </li>
                <li>
                    <Link to="/form/shipping">Form shipping</Link>
                </li>
                <li>
                    <Link to="/story">Storybook</Link>
                </li>
            </ul>
        </header>
    )
}
