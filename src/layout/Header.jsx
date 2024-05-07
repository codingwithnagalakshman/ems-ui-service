import classes from './Header.module.css';

const Header = () => {
    return(
        <>
            <header>
                <div className={classes.header}>
                <h1>Employee Management System</h1>
                 { /** Can add Navs if needed */}
                </div>
            </header>
        
        </>
    );
}

export default Header;