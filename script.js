const data = [
  { name: "john", age: 24, profession: "developer" },
  { name: "jane", age: 20, profession: "admin" },
  
  
];

// 1. Print Developers
function printDeveloper() {
  
  for(let i=0;i<data.length;i++){
    if(data[i].profession=='developer'){
      console.log(data[i]);
    }
  }
}

// 2. Add Data
function addData() {
   const person={
    name:prompt("what is your Name?"),
    age:prompt("How old are you?"),
    profession:prompt("what do you do for living?")
   }
   data.push(person);
  //  console.log(data.length);

}

// 3. Remove Admins
function removeAdmin() {
  for(let i=0;i<data.length;i++){
    let x;
    if(data[i].profession=='admin'){
     x= data.splice(i,1);
      delete data[i];
    }
    console.log(data);
  }
//  console.log(data.length);
}

// 4. Concatenate Array
function concatenateArray() {
  const data2 = [
    { name: "Sakura", age: 24, profession: "Ninja" },
    { name: "Hinata", age: 23, profession: "Wife" },
  ];
  const result=[...data, ...data2];

  console.log(result);
}

// 5. Average Age
function averageAge() {
let count=data.length,avg=0,sum=0;
     data.forEach((element)=> {
      let num= element.age;
      sum+=num;
      avg=sum/count;
     });
     console.log(avg);
}

// 6. Age Check
function checkAgeAbove25() {
 let X=data.filter((e)=>{
   return e.age>25;
});

if(X.length>0){
 console.log(true);
} else {
  console.log(false);
}
}

// 7. Unique Professions
function uniqueProfessions() {
     let unique=[];
  data.forEach((element)=>{
    if((unique.includes(element.profession))==false){
      unique.push(element.profession);
    }
  });

  unique.forEach((ele)=>console.log(ele));


}
// console.log(data);
// 8. Sort by Age
function sortByAge() {

    data.sort((x,y)=>{
       return x.age-y.age;
    });
    console.log(data);
}

// 9. Update Profession
function updateJohnsProfession() {
   data.forEach((e)=>{
    if(e.name=="john"){
      e.profession="manager";
      // console.log(e);
    }
   });
  //  console.log(data[0]);
}

// 10. Profession Count
function getTotalProfessions() {
  let countDev=0,countAd=0;
    data.filter((el)=>{
      if(el.profession=="admin"){
        countAd++;
      }else if(el.profession=="developer"){
       countDev++;
      }
    });

    console.log("Developers: "+countDev);
    console.log("Admins: "+countAd);
}
