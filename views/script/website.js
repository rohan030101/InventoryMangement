function submitdata(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    // console.log({ value });
    let details = JSON.stringify(value);

}
const form = document.getElementById('ccrdetails');
console.log(form);
if (form) { form.addEventListener('submit', submitdata); }

// const jsonText = `{
//     "browsers": {
//       "firefox": {
//         "name": "Firefox",
//         "pref_url": "about:config",
//         "releases": {
//           "1": {
//             "release_date": "2004-11-09",
//             "status": "retired",
//             "engine": "Gecko",
//             "engine_version": "1.7"
//           }
//         }
//       }
//     }
//   }`;

// const text = JSON.stringify(jsonText);
// console.log(text)
// const ag = JSON.parse(text);
// console.log(ag);