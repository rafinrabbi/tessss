// const api_url = 'https://my-json-server.typicode.com/typicode/demo/comments';
const api_url = 'https://api.github.com/users/hadley/orgs';

async function getapi(url){
    const response = await fetch(url);

    var data = await response.json();
    
    show(data);
}

getapi(api_url);


function show(data) {
    let table = `<div class="row justify-content-md-center"><tr>
    <th class="col col-auto">ID</th>
    <th class="col-md-auto">Body</th>
    <th class="col col-lg-2">Avatar</th>    
</tr></div>`;
for (let r of data) {
    table += `<tr>
    <td>${r.id}</td>
    <td>${r.login}</td>
    <td><a href="${r.avatar_url}" target="_blank">${r.avatar_url}</a></td>
    </td>
    </tr>`;
}
/*
 * alternative for loop
 * 
 */

// for (var i = 0; i < data.length; i++) {
//     table += `<tr>
//     <td>${data[i].id}</td>
//     <td>${data[i].body}</td>
//     <td>${data[i].postId}</td>
//     </tr>`;
// }
// console.log(table);
document.getElementById("test").innerHTML = table;
}
