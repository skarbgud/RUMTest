import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, Posts, Detail, DetailView } from '../pages';

import { ApmRoute } from '@elastic/apm-rum-react';
import { init as initApm } from '@elastic/apm-rum';
import axios from 'axios';
import Menu from '../components/Menu';
// const Menu = lazy(() => {
//     return Promise.all([
//         import('../components/Menu'),
//         new Promise(resolve => setTimeout(resolve, 300000))
//     ])
//     .then(([moduleExports]) => moduleExports);
// });

const About = lazy(() => {
    return Promise.all([
        import('../pages/About'),
        new Promise(resolve => setTimeout(resolve, 1000))
    ])
    .then(([moduleExports]) => moduleExports);
});

// import BOOMR from 'boomerangjs';


const apm = initApm({

  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: 'react',

  // Set custom APM Server URL (default: http://localhost:8200)
  //serverUrl: 'http://192.168.121.153:3000/elastic',
  serverUrl: 'http://172.16.1.10:8200',

})
apm.setInitialPageLoadName("react")

class App extends Component {
    render() {
        axios.get('fdsfdsfss/fdsfs');
        return (
            <div>
                <Suspense fallback={<div>Loading</div>}>
                <ApmRoute
                exact
                path="/"
                component={() => (
                    <Redirect
                    to={{
                        pathname: '/'
                    }}
                    />
                )}
                />
                <ApmRoute path="/" component={Home} />
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/post" component={Posts}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/detail/view" component={DetailView}/>
                </Suspense>
            </div>
        );
    }
}

export default App;