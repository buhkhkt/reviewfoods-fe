import 'react-toastify/dist/ReactToastify.css';

import { useRoutes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { routes } from './routes';

function App() {
    const element = useRoutes(routes);

    return (
        <>
            {element}
            <ToastContainer />
        </>
    );
}

export default App;
