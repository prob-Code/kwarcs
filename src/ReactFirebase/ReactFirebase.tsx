import React from 'react'

function ReactFirebase(){
    return(
        <div>
            <button>ReactFirebase</button>
            </div>
    )
}
export default ReactFirebase






// // src/reactfirebase/ReactFirebase.tsx
// import React, { useEffect } from 'react';
// import { initializeApp, getApps } from 'firebase/app';
// import { getAnalytics } from 'firebase/analytics';
// import { firebaseConfig } from './firebaseConfig';

// export default function ReactFirebase(): null {
//   useEffect(() => {
//     // initialize only once
//     if (!getApps().length) {
//       const app = initializeApp(firebaseConfig);

//       // Analytics can throw in SSR/dev env, so guard it
//       if (typeof window !== 'undefined') {
//         try {
//           getAnalytics(app);
//         } catch (err) {
//           // analytics may not be available in non-browser env or emulator
//           // console.warn('Firebase analytics not initialized:', err);
//         }
//       }
//       console.log('Firebase initialized ✅');
//     }
//   }, []);
//   return null; // no UI to render
// }
