import { Link } from 'react-router-dom';

function PageNotFound() {
  const root = import.meta.env.BASE_URL;

    return (
      <>
        <header>
          <nav>
            <Link to={root}>Go home</Link>
          </nav>
        </header>
      </>
    )
  }
  
  export default PageNotFound