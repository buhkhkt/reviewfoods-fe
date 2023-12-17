import { Outlet } from 'react-router-dom';

const RootLayout = () => {
    return (
        <>
            {/* <header>Header</header> */}

            <main role="main" className="w-full h-[inherit]">
                <Outlet />
            </main>

            {/* <footer>Footer</footer> */}
        </>
    );
};

export default RootLayout;
