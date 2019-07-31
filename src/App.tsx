import React, { useLayoutEffect } from 'react';
import Top from './pages/top';
import Landing from './pages/landing';
import * as styles from './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { authCheck } from './modules/auth';
import Spinner from './atoms/Spinner/Spinner';

const loadingSelector = (state: any) => state.loading;
const userSelector = (state: any) => state.user;

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
    return <Landing />;
  }

  return (
    <div className={styles.App}>
      <Top />
    </div>
  );
};

export default App;
