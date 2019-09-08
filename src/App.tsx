import React, { useLayoutEffect } from 'react';
import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';

import LandingPage from './pages/LandingPage';
import * as styles from './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { authCheck } from './modules/auth';
import Spinner from './atoms/Spinner/Spinner';
import { Route } from 'react-router-dom';
import Playing from './pages/playing';
import UploadPage from './pages/UploadPage';
import Loading from './atoms/Loading/Loading';

const loadingSelector = (state: any) => state.authReducer.loading;
const userSelector = (state: any) => state.authReducer.user;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const user = useSelector(userSelector);

  useLayoutEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className={styles.App}>
        <Route exact path={'/'} component={LandingPage} />
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <Route exact path={'/'} component={DashboardPage} />
      <Route exact path={'/upload'} component={UploadPage} />
      <Route exact path={'/play/:id'} component={Playing} />
      <Route exact path={'/users/profile'} component={ProfilePage} />

    </div>
  );
};

export default App;
