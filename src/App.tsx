import React, { useLayoutEffect } from 'react';
import Top from './pages/top';
import LandingPage from './pages/LandingPage';
import * as styles from './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { authCheck } from './modules/auth';
import Spinner from './atoms/Spinner/Spinner';
import { Route } from 'react-router-dom';
import Playing from './pages/playing';
import UploadForm from './pages/uploadForm';
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
      <Route exact path={'/'} component={Top} />
      <Route exact path={'/upload'} component={UploadForm} />
      <Route exact path={'/play/:id'} component={Playing} />
    </div>
  );
};

export default App;
