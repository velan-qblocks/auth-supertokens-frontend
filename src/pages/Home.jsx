import React from 'react';

import {signOut} from 'supertokens-auth-react/recipe/session';

import Confetti from 'react-confetti';
import { redirectToAuth } from 'supertokens-auth-react';
import { SessionAuth } from 'supertokens-auth-react/recipe/session';

function Home() {
   return (
      <SessionAuth>
      <div className="pageContainer">
         <h1 className="title">Eureka !</h1>
         <button className="logoutButton" onClick={async () => {
            await signOut();
            redirectToAuth();
         }}>
            Logout
         </button>
         <Confetti width={window.innerWidth} height={window.innerHeight} />
      </div>
      </SessionAuth>
   );
}

export default Home;
