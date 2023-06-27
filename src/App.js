import React from 'react';
import * as reactRouterDom from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';
import { ThirdPartyPasswordlessPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartypasswordless/prebuiltui';

import Home from './pages/Home';
import './App.css';

function App() {
   return (
      <>
         <Routes>
            {getSuperTokensRoutesForReactRouterDom(reactRouterDom, [ThirdPartyPasswordlessPreBuiltUI])}
               <Route path="/" element={<Home />}></Route>
         </Routes>
      </>
   );
}

export default App;

