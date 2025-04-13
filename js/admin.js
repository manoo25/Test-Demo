
const API_URL = 'https://60d5f912943aa60017768d3c.mockapi.io/users';
let allUsers = [];
let currentUserId = null;
var SiteName=document.getElementById('SiteName');
var SiteURL=document.getElementById('SiteURL');
var tbl=document.getElementById('tbl');
var Sub=document.getElementById('submitBtn');



async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('فشل في جلب البيانات');
        allUsers = await response.json();
        displayUsers(allUsers);
    } catch  {
   
       
    }
}



function displayUsers(siteArr) {
    var pro='';
    var check='';
  
    for(var i=0; i<siteArr.length;i++){
      if(siteArr[i].age==1){
        check=`
         <label class="toggle-checkbox">
              <input  onclick="publish(this,${i})" type="checkbox" checked >
              <span class="toggle-slider"></span>
          </label>
        `
      }
      else{
        check=`
         <label class="toggle-checkbox">
              <input onclick="publish(this,${i})" type="checkbox"  >
              <span class="toggle-slider"></span>
          </label>
        `
      }
      pro +=`     <tr  class="text-center ">
                  <td style="width: 5%;"><h6>${i+1}</h6></td>
                  <td style="width: 5%;"><h6>${siteArr[i].name}</h6></td>
                  <td style="width: 30%;"><p>${siteArr[i].firsName}</p></td>
                  <td style="width: 30%;"><p>${siteArr[i].lastName}</p></td>               
                  <td style="width: 5%;"><a href="#" onclick="answer(${(siteArr[i].id)-1})"   class="btn btn-success" id="submitBtn" onclick="addAns()"> <i class="fa-solid fa-edit"></i></a></td>
                <td style="width: 20%;">
                  ${check}
                  </td>
                  </tr>`
    }
  tbl.innerHTML=pro;
}

function answer(index){
    currentUserId=index+1;
    SiteName.value=allUsers[index].firsName;
    SiteURL.select();
    console.log(currentUserId);
    
   }



async function updateUser(userId, userData) {
    try {
        const response = await fetch(`${API_URL}/${userId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) throw new Error('فشل في تحديث المستخدم');
        
        const updatedUser = await response.json();
        allUsers = allUsers.map(user => user.id === updatedUser.id ? updatedUser : user);
        displayUsers(allUsers);
   
    } catch  {
      
    }
}
function addAns(){
    const userData = {
        lastName:SiteURL.value
    };
    if(SiteName.value!=''&&SiteURL.value!=''){
        updateUser(currentUserId, userData);
      SiteName.value='';
      SiteURL.value='';
    }
    
      }
function publish(item,index){
   
    currentUserId=index+1;
  
    
  if (!item.checked) {
    let userData = {
        age:0
    }
 updateUser(currentUserId, userData);
  }
  else{
    let userData = {
        age:1
    }
 updateUser(currentUserId, userData);
  }
       
      }

document.addEventListener('DOMContentLoaded', fetchUsers);