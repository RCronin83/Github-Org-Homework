
let promise = fetch(
  'https://api.github.com/users/addyosmani/orgs',
  {
    method: 'GET',
    headers: {
      Authorization: 'token ' + '453f33e603766c8566cdb0a79bcb3825b4734ffa'
    }
  }
);
promise.then(function handleResponse(responseObj){
  if(responseObj.status > 199 && responseObj.status < 300){
    responseObj.json().then( function printData(orgData) {

      orgData.forEach(function printOrgData(organizationData){
        let loginLi = document.createElement('li');
        let imageSrc = document.createElement('img');
        let login = organizationData.login;
        loginLi.innerText = login;
        imageSrc.setAttribute('src', organizationData.avatar_url);
        document.querySelector('#organizations ul').appendChild(imageSrc);
        document.querySelector('#organizations ul').appendChild(loginLi);

      });
    });
  } else {
    let paragraphError = document.querySelector('.error');
    paragraphError.innerText = 'There was an error';
  }


});
