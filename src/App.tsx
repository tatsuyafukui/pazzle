import React, { useLayoutEffect } from 'react';
import Top from './pages/top';
import Landing from './pages/landing';
import * as styles from './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { authCheck } from './modules/auth';
import Spinner from './atoms/Spinner/Spinner';
import { Route } from 'react-router-dom';
import Playing from './pages/playing';

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
    return <Spinner />;
  }

  if (!user) {
    return (
      <div className={styles.App}>
        <Route exact path={'/'} component={Landing} />
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <Route exact path={'/'} component={Top} />
      <Route exact path={'/play/:id'} component={Playing} />
    </div>
  );
};

export default App;
