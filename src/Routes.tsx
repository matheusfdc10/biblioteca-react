import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';

const Routes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <h1>ERROR 404</h1>,
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/:search",
          element: <SearchResult />
        }
      ]
    }
])

export default Routes;