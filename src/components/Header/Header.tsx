import { FC } from 'react';

import classes from './Header.module.scss';

const Header: FC = () => {
    return (
        <header className={classes.root}>
            <div className={classes.logo} />
        </header>
    );
};

export default Header;
