import Layout from '@components/Layout';
import Example from '@pages/Example';
import Home from '@pages/Home';
import NoPage from '@pages/NoPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="example" element={<Example />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
