// export const environment = {
//   production: true
// };
export let APIURL = "";
switch (window.location.hostname) {
  case 'holdmybeerclient.herokuapp.com/':
    APIURL='https://holdmybeerapi.herokuapp.com/'
    break;

  default:
  APIURL = 'http://localhost:3000'
    break;
}
