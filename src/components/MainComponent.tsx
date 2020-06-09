import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import all react components here
import NavComponent from './navbar/NavComponent';
import CardsPlatformComponent from './platforms/cardsPlatformComponents';
import NoMatchComponent from './noMatch/NoMatchComponent';
import HomeComponent from './home/HomeComponent';
import JumboComponent from './jumboHome/jumboComponent';
import LayoutComponent from './layout/LayoutComponent';
import StatsComponent from './operations/StatitsticsComponent';
export const MainComponent = () => {
    return (
        <React.Fragment>
            <NavComponent />
            <JumboComponent />
            <LayoutComponent>
            <Router>
                <Switch>
                    <Route exact path="/" component={HomeComponent} />
                    <Route path="/platforms" component={CardsPlatformComponent} />
                    <Route path="/operations" component={StatsComponent} />
                    <Route component={NoMatchComponent} />
                </Switch>
            </Router>
            </LayoutComponent>
        </React.Fragment>
    )
}

export default MainComponent;
