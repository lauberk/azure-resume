window.addEventListener('DOMContentLoaded', (event) => {
    getVisitCount();
});


const functionApi = 'https://functionvisitorcounter.azurewebsites.net/api/HttpTrigger1?code=tMPRRJIHJq-mvu1tTaiAEusEYd5isHyS_ZakMdUop3CvAzFup8rvZQ==';

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