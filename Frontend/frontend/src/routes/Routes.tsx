import { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import PageLoader from '../layout/PageLoader'
import PartyPage from '../pages/party/PartyPage';
import LoginPage from '../pages/login/LoginPage';
import HistoryPage from '../pages/history/HistoryPage';

export default function Routes() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <Route exact path='/party' component={PartyPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/history' component={HistoryPage} />
                <Route path='/'>
                    <Redirect to='/monitoring' />
                </Route>
            </Switch>
        </Suspense>
    )
}