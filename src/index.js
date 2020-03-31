import React from 'react';
import ReactDOM from 'react-dom';
import SignUp from './container/SignUp';
import Login from './container/Login';
import App from './container/App';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import RegisterDonor from './container/RegisterDonor';
import DonorDetail from './container/DonorDetail';
import DonorList from './container/DonorList';

// if ('serviceWorker' in navigator) {

//     console.log('Service Worker is supported');

//     // if service worker supported then register my service worker
//     navigator.serviceWorker.register('firebase-messaging-sw.js').then(function (reg) {
//         console.log('Successfully Register :^)', reg);

//         reg.pushManager.subscribe({
//             userVisibleOnly: true
//         }).then(function (subscription) {
//             console.log('subscription:', subscription.toJSON());
//             // GCM were used this endpoint
//             console.log('endpoint:', subscription.endpoint);
//         });

//     }).catch(function (error) {
//         console.log('SW Registration Failed: :^(', error);
//     });

// }


ReactDOM.render(
    <Provider store ={store}>
    <Router>
        <div>
        
    <Route exact={true} path="/" component={SignUp}/>
    <Route exact={true} path="/app"      component={App}/>
    <Route exact={true} path="/login"   component={Login}/>
    <Route exact={true} path="/registerDonor"    component={RegisterDonor} />
    <Route exact={true} path="/donorlist"    component={DonorList} />
    <Route exact={true} path="/donorlist/:uid"  component={DonorDetail} />

    
    
    </div>
     </Router>
     </Provider>
, document.getElementById('root'));

