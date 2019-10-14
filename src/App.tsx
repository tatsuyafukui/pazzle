import React, { useLayoutEffect } from 'react';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import * as styles from './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { authCheck } from './modules/auth';
import { Route, Switch } from 'react-router-dom';
import PlayingPage from './pages/PlayingPage';
import Loading from './atoms/Loading/Loading';
import NotFoundErrorPage from './pages/NotFoundErrorPage';
import Header from './organisms/Header';

const loadingSelector = (state: any) => state.authReducer.loading;
const userSelector = (state: any) => state.authReducer.user;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const loading = useSelector(loadingSelector);
  const user = useSelector(userSelector);

  useLayoutEffect(() => {
    dispatch(authCheck());
  }, [dispatch]);

  console.log(user)
  if (loading) {
    return <Loading />;
  }

  if (!user) {
    return (
      <div className={styles.App}>
        <Route path={'/'} render={({history}) => <Header history={history} />} />
        <Route exact path={'/'} component={LandingPage} />
      </div>
    );
  }

  return (
    <div className={styles.App}>
      <Route path={'/'} render={({history}) => <Header history={history} />} />
      <Switch>
        <Route exact path={'/'} component={DashboardPage} />
        <Route exact path={'/play/:id'} render={props => <PlayingPage user={user} {...props} />} />
        <Route component={NotFoundErrorPage} />
      </Switch>
    </div>
  );
};

export default App;
