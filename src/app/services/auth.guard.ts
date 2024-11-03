// auth.guard.ts
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { StorageService } from './storage/storage.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();
  const storageservice = inject(StorageService);

  return new Promise(resolve =>{
    storageservice.getStorage("userid").then(userid => {
      if (
        userid && userid.value && userid.value.length > 0
      ){
        resolve(true);
      } else {
        resolve(router.navigate(['/login'], { queryParams: { returnUrl: state.url } }));
        
      }
    })
  })
};

//   if (!isLoggedIn) {
//     router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
//     return false;
//   }
//   return true;
// };
