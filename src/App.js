import React from 'react';
import useGithub from './components/hooks/githubHooks';
import Layout from './components/layout';
import Profile from './components/profile';
import Repositories from './components/repositories';
import NoSearch from './components/no-search';

const App = () => {
  const { githubState } = useGithub();
  return (
        <Layout>
          {githubState.hasUser ? <>
              <>
                <Profile />
                <Repositories />
              </>
          </> : <NoSearch />
          }
        </Layout>
  );
};

export default App;