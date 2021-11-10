import { Suspense } from 'react'
import { Switch, Route, Redirect } from 'react-router'
import PageLoader from '../layout/PageLoader'
import PartyPage from '../pages/party/PartyPage';
import LoginPage from '../pages/login/LoginPage';
import HistoryPage from '../pages/history/HistoryPage';
import MenuPage from '../pages/menu/MenuPage';
import PartyMakerPage from '../pages/party/PartyMakerPage'
import TourneyMakerPage from '../pages/tourney/TourneyMakerPage'

export default function Routes() {
    return (
        <Suspense fallback={<PageLoader />}>
            <Switch>
                <Route exact path='/party' component={PartyPage} />
                <Route exact path='/login' component={LoginPage} />
                <Route exact path='/history' component={HistoryPage} />
                <Route exact path='/menu' component={MenuPage} />
                <Route exact path='/partymaker' component={PartyMakerPage} />
                <Route exact path='/tourneymaker' component={TourneyMakerPage} />
                <Route path='/'>
                    <Redirect to='/menu' />
                </Route>
            </Switch>
        </Suspense>
    )
}