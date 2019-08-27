import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import { Container } from 'semantic-ui-react';
import history from '../history';

// const PageOne = () => {
//     return <div>Page One <Link to='/pagetwo'>Go to Page Two</Link></div>;
// }

// const PageTwo = () => {
//     return <div>Page Two <Link to='/'>Go to Page One</Link></div>
// }

const App = () => {
    return <Container>
        <Router history={history}>
            <div>
                <Header />
                <Route path='/' exact component={StreamList} />
                <Route path='/new' component={StreamCreate} />
                <Route path='/edit/:id' component={StreamEdit} />
                <Route path='/delete/:id' component={StreamDelete} />
                <Route path='/show/:id' component={StreamShow} />
            </div>
        </Router>
    </Container>;
}

export default App;