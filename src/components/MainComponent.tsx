import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import all react components here
import NavComponent from './navbar/NavComponent';
//import CardsPlatformComponent from './platforms/cardsPlatformComponents';
import PlatformsTable from './platforms/platformsTable';
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
                    <Route exact path="/platforms" component={PlatformsTable} />
                    <Route path="/operations" component={StatsComponent} />
                    <Route path="/about" component={HomeComponent} />
                    <Route component={NoMatchComponent} />
                </Switch>
            </Router>
            </LayoutComponent>
        </React.Fragment>
    )
}

export default MainComponent;
