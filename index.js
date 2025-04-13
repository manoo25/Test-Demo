var SiteName=document.getElementById('SiteName');
var SiteURL=document.getElementById('SiteURL');
var tbl=document.getElementById('tbl');
var Sub=document.getElementById('submitBtn');
var siteArr=[];
var Index=0;

if(localStorage.getItem('qArr')!=null){
  siteArr=JSON.parse (localStorage.getItem("qArr"));
  displaySite(siteArr);
}




function displaySite(arr){
  var pro='';
  var check='';

  for(var i=0; i<arr.length;i++){
    if(siteArr[i].publish){
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
                <td><h6>${i+1}</h6></td>
                <td><h6>${siteArr[i].Name}</h6></td>
                <td><p>${siteArr[i].Question}</p></td>
                <td><p>${siteArr[i].answer}</p></td>               
                <td><a href="#" onclick="answer(${i})"   class="btn btn-success" id="submitBtn" onclick="addAns()"> <i class="fa-solid fa-edit"></i></a></td>
              <td>
                ${check}
                </td>
                </tr>`
  }
tbl.innerHTML=pro;
}
function answer(index){
   SiteName.value=siteArr[index].Question;
   SiteURL.select();
Index=index;
  }
function addAns(){
if(SiteName.value!=''&&SiteURL.value!=''){
  siteArr[Index].answer=SiteURL.value;
  displaySite(siteArr);
  localStorage.setItem('qArr',JSON.stringify(siteArr))
  SiteName.value='';
  SiteURL.value='';
}

  }
  function publish(e,index) {
 console.log(index);
if(e.checked){
 
  
  siteArr[index].publish=true;
  displaySite(siteArr);
  localStorage.setItem('qArr',JSON.stringify(siteArr))

}
else{
  siteArr[index].publish=false;
  displaySite(siteArr);
  localStorage.setItem('qArr',JSON.stringify(siteArr))
}


    
  }

