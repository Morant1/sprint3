import Home from './pages/Home.jsx'
const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export class App extends React.Component {

    render() {
        return (
            <Router>
                <main>
                    <Switch>
                        <Route component={ KeepApp } path="/keep" />
                        <Route component={ MailApp } path="/mail" />
                        <Route component={ About } path="/about" />
                        <Route component={ Home } path="/" />
                    </Switch>
                </main>
                {/* <Msg /> */}
            </Router>
        )
    }
}
