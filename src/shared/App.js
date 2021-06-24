import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Home, About, Posts, Detail, DetailView } from '../pages';
import Menu from '../components/Menu';
import { ApmRoute } from '@elastic/apm-rum-react';
import { init as initApm } from '@elastic/apm-rum';
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
        return (
            <div>
                {/* <ApmRoute
                exact
                path="/"
                component={() => (
                    <Redirect
                    to={{
                        pathname: '/'
                    }}
                    />
                )}
                /> */}
                {/* <ApmRoute path="/" component={Home} /> */}
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/posts" component={Posts}/>
                <Route path="/detail" component={Detail}/>
                <Route path="/detail/view" component={DetailView}/>
            </div>
        );
    }
}

export default App;