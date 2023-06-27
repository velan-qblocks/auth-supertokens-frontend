import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import SuperTokens, { SuperTokensWrapper } from 'supertokens-auth-react';
import ThirdPartyPasswordless, { Github, Google } from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter } from 'react-router-dom';

SuperTokens.init({
   appInfo: {
      appName: 'Auth-App',
      apiDomain: 'http://localhost:8000',
      websiteDomain: 'http://localhost:3000',
      apiBasePath: '/auth',
      websiteBasePath: '/auth',
   },
   recipeList: [
      ThirdPartyPasswordless.init({
         contactMethod: 'EMAIL',
         signInUpFeature: {
            providers: [Github.init(), Google.init()],
         },
      }),
      Session.init(),
   ],
});

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
   <React.StrictMode>
      <BrowserRouter>
         <SuperTokensWrapper>
            <App />
         </SuperTokensWrapper>
      </BrowserRouter>
   </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

