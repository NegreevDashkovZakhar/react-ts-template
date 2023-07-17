import '@styles/normalize.scss';
import AppRouter from '@components/AppRouter';
import Layout from '@components/Layout/Layout';
import {BrowserRouter} from 'react-router-dom';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <AppRouter />
      </Layout>
    </BrowserRouter>
  );
};

export default App;
