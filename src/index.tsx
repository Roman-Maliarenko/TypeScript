import ReactDOM from 'react-dom/client';
import './index.css';
import Lesson09 from './app/lessons/lesson09/Lesson09';
// import Layout from './app/components/layout/Layout';
// import App from './app/App';
// import StarWarsGallery from './app/components/starWarsGallery/StarWarsGallery';
//import Lesson06 from './app/lessons/lesson06/Lesson06';
//import Lesson08 from './app/lessons/lesson08/Lesson08';
// import Lesson07 from './app/lessons/lesson07/Lesson07';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <> 
    {/* <App /> */}
    {/* <Lesson06 />  */}
    {/* <Lesson07 /> */}
    {/* <Lesson08 /> */}
    {/* <Layout />*/}
    {/* <StarWarsGallery /> */}
    <Lesson09 />
    
  </>
);