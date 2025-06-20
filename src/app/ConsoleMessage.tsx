'use client';

import { useEffect } from 'react';

export default function ConsoleMessage() {
  useEffect(() => {
    console.clear()
    console.log(
      `%c
              ****       ****                  
           **=....+*   *=    :**               
         **:.......+   *        **             
       *-.........:*   *          .*           
    *+.  .+:.....=*     +-           =*        
   *-       -=:+*         *=.         :*       
   *-         .+*         *= ::       :*       
    *=           -*     *:      +.   =*        
       *.          *   +           *           
         *+        +   +        =*             
           **:    =*   *-     +*               
              ****       ****                  
    
%c👀 Hey you! Look at something, huh?
%c🚀 Join the GDG community: https://www.facebook.com/gdgcmust`,
  'color: #ffffff; font-weight: bold; font-size: 12px;', // ASCII art color
  'color: #8bc34a; font-size: 14px; font-weight: bold;', // message color
  'color: #ff9800; font-size: 14px; font-weight: bold;' // link color
);
}, []);

  return null;
}
