window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const functionApi = 'https://resumecounterapi.azurewebsites.net/api/ResumeCounter?code=kgynC6WXGZOVDxyP0tKp84wMPvUqgYxWDk9mUB1DBBppAzFuwgoRig==';

const getVisitCount = () => {
    let count = 30;
    fetch(functionApi)
    .then(response => {
        return response.json()
    })
    .then(response => {
        console.log("Website called function API.");
        count = response;
        document.getElementById('counter').innerText = count;
    }).catch(function(error) {
        console.log(error);
      });
    return count;
}