'use strict';

// Переписать функцию состоящую из обратных вызовов(callbacks) с помощью промисов(promises)

// const checkAuth = (callback) => {
//   setTimeout(() => {
//     callback( {isAuth: true} );
//   }, 2000);
// };
// const getUser = (authInfo, callback) => {
//   if (!authInfo.isAuth) {
//     callback(null);
//     return;
//   }
//   setTimeout(() => {
//     callback( {name: 'Max'} );
//   }, 2000);
// };


// checkAuth((authInfo) => {
//   getUser(authInfo, (user) => {
//     console.log(user.name);
//   });
// });

new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({isAuth:true})
    },2000);
})
.then((authInfo)=>new Promise(function(resolve,reject){
    if (!authInfo.isAuth) {
        reject(null)
    } else {
    setTimeout(function(){
        resolve({name:"Max"})
    },2000);
}
}))
.then((user)=>console.log(user.name))
.catch((err)=>err);