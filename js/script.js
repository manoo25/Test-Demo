
const API_URL = 'https://60d5f912943aa60017768d3c.mockapi.io/users';
let allUsers = [];
let dName=document.getElementById('dName');
let dQuuistion=document.getElementById('dQuuistion');
let ItemsTestimonial=document.getElementById('ItemsTestimonial');
let carouselTestimonial=document.getElementById('carouselTestimonial');
let testimonial=document.getElementById('testimonial');
testimonial.classList.add('d-none')
function disTEstimonial() {
let tes='';
let round=true;
let num=1;
for (let i = 0; i < allUsers.length; i++) {
if(round){
    if (allUsers[i].age==1) {
        testimonial.classList.remove('d-none')
        tes=`
     <div class="carousel-item active" data-bs-interval="4000">
            <div class="container-fluid text-center d-flex flex-column justify-content-center align-items-center  bg ts-item ">
 <img class="rounded-circle " src="./imgs/1_New1.jpg" alt="testimonial-2">
 <p class="text-center mx-auto">${allUsers[i].firsName}</p>
 <div style="line-height:18px;">
   <h5>${allUsers[i].name}</h5>
   <span>الإجابة....</span>
    <p style="color:#FE5A91;" class="pt-3 text-center m-auto">${allUsers[i].lastName}</p>
 </div>
            </div>
           </div> 
    `
    carouselTestimonial.innerHTML+=`
   <button style="width: 10px;height: 10px;position: relative;bottom:30px;background-color:  #748182; "  type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active rounded-circle mt-3 mt-md-0" aria-current="true" aria-label="Slide 1"></button>
    `
    round=false;
    }
}
else{

    if (allUsers[i].age==1) {
        tes=`
        <div class="carousel-item " data-bs-interval="4000">
                 <div class="container-fluid text-center d-flex flex-column justify-content-center align-items-center  bg ts-item ">
      <img class="rounded-circle" src="./imgs/1_New1.jpg" alt="testimonial-2">
    <p class="text-center mx-auto">${allUsers[i].firsName}</p>
 <div style="line-height:18px;">
   <h5>${allUsers[i].name}</h5>
   <span>الإجابة....</span>
    <p style="color:#FE5A91;" class="pt-3 text-center m-auto">${allUsers[i].lastName}</p>
      </div>
                 </div>
                </div> 
        `
         carouselTestimonial.innerHTML+=`
          <button style="width: 10px;height: 10px;position: relative;bottom: 30px;background-color:  #748182;" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="${num}" aria-label="Slide ${num+1}" class="rounded-circle mt-3 mt-md-0"></button>
          `
num++;
    }
}
    ItemsTestimonial.innerHTML+=tes;
   
}


}

async function fetchUsers() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('فشل في جلب البيانات');
        allUsers = await response.json();
        disTEstimonial();
    } catch  {
   
       
    }
}

async function addUser(userData) {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) throw new Error('فشل في إضافة المستخدم');
        
        const newUser = await response.json();  
        allUsers.push(newUser);
      
      console.log(newUser);
      
    } catch (error) {
        showError(error.message);
    }
}
function sendData() { 
    if(dName.value!=''&&dQuuistion.value!=''){
    const userData = {
        name: dName.value.trim(),
        firsName: dQuuistion.value.trim(),
        lastName:'لا يوجد رد !',
        age:0
    };

     addUser(userData);
     dName.value='';
dQuuistion.value='';
  alert('تم إرسال إستشارتك بنجاح')
    }
}


// جلب البيانات عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', fetchUsers);