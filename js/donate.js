/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
let medicineInNeed2=[];
let container = document.getElementById('container');
let container2 = document.getElementById('container2');
let myForm = document.getElementById('myForm');
let medicineName , imgSource , amount = 0;
let i=0;
const donetorform=document.getElementById('Dinfo');
donetorform.addEventListener('submit',addToForm2);
let arrayForm2 = [];


function MedicineInNeed(name , cost , source ,info){
  this.name = name;
  this.cost = cost;
  this.source = source;
  this.info=info;
  runder();
}

function runder(){
  // create div card
  let divCard=document.createElement('div');
  divCard.setAttribute('class', 'card');
  // create div ImgBox
  let divImgBox=document.createElement('div');
  divImgBox.setAttribute('class', 'imgBx');
  //creat img Element  & give it src
  let imgEl=document.createElement('img');
  imgEl.setAttribute('src' , medicineInNeed2[i].source);
  // create div Contant
  let divContant =document.createElement('div');
  divContant.setAttribute('class','content');
  //create h2 Element & fell it with Name
  let h2Content = document.createElement('h2');
  h2Content.textContent = medicineInNeed2[i].name;
  let pContent = document.createElement('p');
  pContent.textContent = medicineInNeed2[i].info;
  let divbox =document.createElement('div');
  divbox.setAttribute('class','box');
  // let aContent = document.createElement('a');
  // aContent.setAttribute('href','#popup1');
  // aContent.textContent='Donate Now';
  // <div class="box">
  // <a class="button" href="#popup1">Let me Pop up</a>
  // </div>
  //creat Button Element
  let buttonEl=document.createElement('button');
  buttonEl.setAttribute('type','button');
  buttonEl.setAttribute('id', `${i}`);
  buttonEl.textContent='donate for it ';
  buttonEl.addEventListener('click',addToDonate);
  //fell imgBox Div with imgEl
  divImgBox.appendChild(imgEl);
  //fell content
  divContant.appendChild(h2Content);
  divContant.appendChild(pContent);
  //push div ImgBox & div Contant inside divCard
  divCard.appendChild(divImgBox);
  divCard.appendChild(divContant);
  divCard.appendChild(divbox);
  divCard.appendChild(buttonEl);
  if(i%2===0){
    container.appendChild(divCard);
    if(i>=2){
      divCard.setAttribute('data-aos','fade-right');
      divCard.style.transition= '0.3s ease-in-out';
    }
  }
  else{
    container2.appendChild(divCard);
    if(i>=2){
      divCard.setAttribute('data-aos','fade-left');
      divCard.style.transition= '0.3s ease-in-out';
    }

  }

  i++;
}

function getData(){
  let gettingData = localStorage.getItem('Medicine');
  let list1 = JSON.parse(gettingData);
  if(list1){
    medicineInNeed2 = list1;
    runder();
  }
}
function addToDonate(){
  document.location.href='#popup1';
}

function openForm() {
  document.getElementById('myForm').style.display = 'block';
  myForm.addEventListener('submit',function newLocal(event){
    event.preventDefault();
    console.log(event);
    medicineName = event.target.medicineName.value;
    imgSource = event.target.source.value;
    amount = parseInt(event.target.amount.value);
    new MedicineToDonate ( medicineName,amount, imgSource, 'info');
    swal('Thank You!', 'Maybe a human will survive cause of your donation', 'success');
    myForm.removeEventListener('submit',newLocal);
    closeForm();
  });
}
function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}
function gitdonation(){
  for (let y=0; y<medicineInNeed2.length;y++){

    console.log(medicineInNeed2[y]);
    let n =medicineInNeed2[y].name;
    let c =medicineInNeed2[y].cost;
    let s =medicineInNeed2[y].source;
    let i ='Info';
    new MedicineInNeed(n, c, s, i);
  }
}

function MedicineToDonate(name , cost , source ,info){
  this.name = name;
  this.cost = cost;
  this.source = source;
  this.info=info;
  medicineInNeed2.push(this);
  runder();
}

function Form2(donaterNam,idphone, yourLocation,paymentMethod){
  this.donaterNam = donaterNam;
  this.location = yourLocation;
  this.phoneD=idphone;
  this.paymentMethod=paymentMethod;
  arrayForm2.push(this);
  console.log(this);
}

function addToForm2(event){
  event.preventDefault();
  console.log('1');
  console.log(event);
  let idName = event.target.nameDoneter.value;
  let idLocation = event.target.dloc.value;
  let idphone = event.target.donaterPhone.value;
  new Form2 (idName , idphone, idLocation ,'cash');
  swal('Thank You!', 'Maybe a human will survive cause of your donation', 'success');
  document.location.href='#';
  savedForm();
}
function savedForm(){
  let data3 = JSON.stringify(arrayForm2);
  localStorage.setItem('DonaterInformation', data3);
}

getData();
gitdonation();