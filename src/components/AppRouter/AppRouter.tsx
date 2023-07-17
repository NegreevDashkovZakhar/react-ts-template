import Layout from '@components/Layout/Layout';
import Example from '@pages/Example';
import Home from '@pages/Home';
import NoPage from '@pages/NoPage';
import {Route, Routes} from 'react-router-dom';

const Router = () => {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/example" element={<Example />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  );
};

export default Router;
