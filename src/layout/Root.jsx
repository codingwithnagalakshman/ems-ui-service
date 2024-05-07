import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import classes from './Root.module.css';

const Root = () => {
    return(
        <>
            <Header />
            <main className={classes.main}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Root;