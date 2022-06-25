let customer={
  name:"dave",
  surname:"yaman",
  age:45,
  skill:function(skil){
    return "liar and "+skil;
  },
  second:function(){
    this.age=this.age+1;
  }
};

console.log(customer.age);
let sentence = customer.skill("fucker");
console.log(sentence);

customer["name"]="jack";
console.log(customer.name);
for (var i = 0; i < 5; i++) {
  customer.second();
}
console.log(customer.age);

const dociy = document.querySelector("p.error");
const dociy3 = document.querySelector("div.error");

 // console.log(dociy);

const dociy2=document.querySelectorAll(".error");
console.log(dociy2);

dociy2.forEach(e=>{
  console.log(e);
})
dociy.innerText="fuckOff";
dociy3.innerHTML +='<h2>fuckkkkkkooloo</h2>';

const names=["dave","mike","steve"];
names.forEach(e=>{
  dociy3.innerHTML +=`<h2>${e}</h2>`;

});

const aLink= document.querySelector("a");
console.log(aLink.getAttribute("href"));
aLink.setAttribute("href","https://www.msn.com/?ocid=mailsignout&pc=U591");
aLink.setAttribute("style", "background-color:red;");
console.log(aLink);
aLink.style.margin="50px";

const arti=document.querySelector("article");
console.log(arti.children);
const arraAArt=Array.from(arti.children);
console.log(arraAArt);
let a =1;

arraAArt.forEach(Element=>{
  Element.classList.add("fuckkkk" +a)
  a++;
});
const boddie=document.querySelector("body");
boddie.style.backgroundColor="white";
const h33=document.querySelector(".h22");




console.log(h33.parentElement);
console.log(h33.parentElement.parentElement);
console.log(h33.parentElement.parentElement.parentElement);
console.log(h33.parentElement.parentElement.parentElement.parentElement);

let loop=4;
let parent1=h33;
while(loop>0){
  parent1=parent1.parentElement;
  console.log(parent1+" b");
  loop=loop-1;

}





const ul = document.querySelector("ul");
const click1=document.querySelector("button");
click1.addEventListener("click",()=>{
  //ul.innerHTML+='<li class="www">c</li>';
  const li =document.createElement("li");
  li.textContent="suck my";
  ul.append(li);
});

/* const items=document.querySelectorAll(".www");
items.forEach(item=>{
  item.addEventListener("click",e =>{
    console.log(e.target);
    console.log(item)
    e.target.style.backgroundColor="blue";
    e.stopPropagation();
    console.log("event in il ");

    item.remove();
  })
}); */

ul.addEventListener("click",e=>{
  console.log("event in ul ");
  console.log(e.target);
  e.target.remove();
});



