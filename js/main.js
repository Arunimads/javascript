// output

//window.alert("hello world");
//window.confirm("do you want to close")    //for more popup window
//window.prompt("enter your age");

//console.log("hello world");  //seen inside console , used for debugging, testing purpose
//document.write("hello document"); //testing purpose, 


//innerHTML

//document.getElementById("demo").innerHTML="Hello from inner html"; 
//document.getElementById("demo").innerHTML=prompt("enter text to display");
//document.getElementById("demo").style.border="2px solid red";
function test() {
  document.getElementById("search").href = "https://www.wikipedia.org/";
  document.getElementById("search").innerHTML = "Wikipedia";
  document.getElementById("demo").className = "m-5 border p-3 rounded";
  document.getElementById("demo").classList.add("m-5", "h1");
  document.getElementById("demo").classList.add("shadow");
  //document.getElementById("demo").classList.remove("h1");


  //document.getElementById("in").value="hello Arun";
  alert(document.getElementById("in").value);

}
function change() {
  document.getElementById("img").src = "./image/nature.jpg"
}
function unchange() {
  document.getElementById("img").src = "./image/natural.jpg"
}


//variable
//                 var   let (cannot get outside the)    const
// scope
// redcl


//operators
//arithemetic                     + - * / % ++ -- **(exponents powers)  
//assign                          = += -= /= *= %= ( x=x+10   is   x+=10)
//logical                         ! && ||
//comparison/relatn/ condition    < <=  > >= == (10=="10" true in case of js value is taken not data typ) 
// (10==="10"  false ,data type is considered)   !=   !==
//

console.log(10 + 10 + "20");      //output 2020  
console.log("20" + 10 + 10 + "20");      //output 20101020  starting string all data become string  

var sum = 10 + 20;
console.log(`result is ${sum} the sum is ${sum}`);
var data = {
  name: "akhil",
  age: 24,
  class: "10th"
}
console.warn(data);


var sum = 50 - 10;
console.log(`the result is ${sum}`);
console.log(`the result is ${50 - 10}`);


                //conditional statements

           //if, if else,else if   ( nested if , else if ladder)
           // switch
           // ternory operator
           
           //voting system  >=18   or not eligible

          // var age=parseInt(prompt("enter your age"));  //explicit, implicit

          //if (age>=18){
            //alert("your eligible to vote");

          //}else{
            //alert("you are not eligible to vote")
//}
function voting(age){
//var age=parseInt(prompt("enter your age"));
var out=document.getElementById("output");
 if(age<=0){
  main.classList.add("border-danger")
  out.classList.add("text-danger")
  out.innerHTML="Age is invalid";
}
else if(age<10){
  main.classList.add("border-warning")
  out.classList.add("text-warning")
  out.innerHTML="You are too young to vote";
}
else if(age>=10 && age<18){
  main.classList.add("border-warning")
  out.classList.add("text-warning")
  out.innerHTML="Your voting age is soon";

}
else if(age>100){
  main.classList.add("border-warning")
  out.classList.add("text-warning")
  out.innerHTML="Your voting age is above";


}
              
else if(age>=18){

main.classList.add("border-success")
out.classList.add("text-success")
out.innerHTML="You are eligible to vote";

}
else {
  main.classList.add("border-danger")
  out.classList.add("text-danger")
  out.innerHTML="Age is invalid";


}
}


//ternory

//out.innerText=(age>=18)?"eligible":"not eligible";
function grade(grade){
  switch(grade){
    case "A+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-success");
    graderes.innerHTML="champion of exam";
    break;

    case "B+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-warning");
    graderes.innerHTML="Very good";
    break;

    case "C+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-primary");
    graderes.innerHTML="good";
    break;

    case "D+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-info");
    graderes.innerHTML="passed";
    break;

    case "E+":
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("text-danger");
    graderes.innerHTML="failed";
    break;

   default:
    Grades.className=("border-success container p-5 shadow border rounded");
    graderes.className=("bg-danger text-white");
    graderes.innerHTML="error";
    break;
    

    
  }

}

                      //events

//  --onchange, onclick,ondblclick,onerror

                     //functions
//funtions are named block of code having set of statements, they execute later when it is invoked or called,  helps to code reusability

                     function Sum(num1,num2){
                      console.log(num1+num2);
                     }
                     Sum(10+30);
                     Sum(50+50);
//every functions have a return values
//-- used to write code that needs to reused
  //-- two type  1)build in  2)user defined

  //function is called arguments is called as parameters

  function Calculator(num1,num2,op){
    var num1=parseInt(document.getElementById('num1').value);
    var num2=parseInt(document.getElementById('num2').value);
    var op=document.getElementById('op').value;
    console.log(num1,num2,op)
    var Display=document.getElementById('display');
    switch(op){
      case'+':
      Display.value=num1+num2;
      return false;
      case'-':
      Display.value=num1-num2;
      return false;
      case'*':
      Display.value=num1*num2;
      return false;
      case'/':
      Display.value=num1/num2;
      return false;

      default:
        break;

    }
  }
  //no need of function name

  //var Area=function(){}

  //used for automatically invoke

  // => arrow function

  // function sample(){
  //   ()=>{}
  // }

  // (()=>{
  //   alert("hello")
  // })();

  //calling function inside function 
  function sample(){
    Calculator();
  }


    var Area=() =>{

    }

  
  Area();


  // another  2 ways
                      //1st method

                      //rest parameter used to pass multiple datas (num1,num2.....data)

  function sum(num1,num2,...data){
    return num1+num2;
  }
 // console.log(sum(20,30));

  // in arrow function
   var sum=(num1,num2,...data)=> num1+num2;
         
                    //2nd method

 ()=>20+30;






  //var x=parseInt(prombt("enter first number"));
  //var y=parseInt(prombt("enter second number"));
 // var o=prompt("enter operator");
  //result=calculator(x,y,o);
 // console.log(result)



                               //Array
// special variable to store multiple  datas  var x=[25,52,75,100];  index 0 1 2
var arr=[];
var arr2=new Array(50,60,36)



var x=[25,52,75,100];  //index 0 1 2
x[2]=85      // to change 75 to 85

console.log(x[0]);      //25


var z=[[]];
z=[
  ["akhil",29,"akhil@mail.com"],
  ["arun",25,"arun@mail.com"],
  ["akash",27,"akash@mail.com"],
];
console.log(z[0][2]);  // get email of akhil


//array methods
 var student=["akash",25,"akash@mail.com"];
 student.push="2022-06-07";    //to add
 student.push="passed";
 //student.pop()                  //to delete last index
 
 console.log(student);     
  // console.log(student.lenght());  for length          console.log(student.indexOf(27));   to search  
                                                                                 // console.log(student.lastIndexOf(28));                                                     
        //var res=student.concate(x,z);        // combine arrays    
       // var res=student.fill(x,2,4);     // to fill array     2 starting 4 ending 
       var res=x.find(d=>d>50);   //deligates
       //another  - include , reverse, shift,unshift,sort,                            
   //console.log(res);                                                                                
                        
   

                                                        //loops
           //for ,while, do while, for off, for in, foreach                                             

           //for

          // for(initial;CSSConditionRule;increament /degrement){

       //    }

       for(let i=0; i<=100; i++){
        document.getElementById('loop').innerHTML+=`
        <div class="col">
        <span class="card bg-success-subtle p-4 m-3 border shadow ">${i}</span>
        </div>`;

       }


      //  for( let j=0; j < x.length; j++){
      //   for
      //   console.log(x[j]);
      //  }



      //  var count=0;
      //  while(count<=10){

      //   document.getElementById('loop').innerHTML+=`
      //   <div class="col">
      //   <span class="bg-success-subtle p-4 m-3 border shadow ">${i}</span>
      //   </div>`;
      //  }

      var Person={
        Name: "Nived",
        Age: 25,
        Mob: 9633745016,
        Walk(){
          console.log(this.Name+" is Walking")

        },
        Running(){

        },
        Swim:() =>{

        }
        


      }


        //alert(Person.Name);   
        Person.Walk();
        alert(Person["Age"]);
        
        
        for(const item in Person){                //in used for keys like name, age ,mob  ...
          console.log(Person[item]);
        }

       // for(const item of Person){               // of

        //}


        //                                      foreach used for array 


        // bike.foreach(item=>{
        //   alert(item);
        // }
        //   );


               //error

              // exception handling Syntax      
              // try{
              //   throw
              // }catch(error){

              // }finally{

              // }





              // var num1 =parseInt(prompt("first"));
              // var num2 =parseInt(prompt("second"));

              // try{
              //   if(num2==0){
              //     throw "cannot divide by zero";
              //   }
              //   else{
              //     console.log(num1/num2)
              //   }
              // }catch(error){
              //   console.error(error)
              //   num2=parseInt(prompt("please enter valid second number"));
              //   console.log(num1/num2);

              // }finally{
              //   console.log("operation done !!");
              // }


              //string

              // 

              var txt="Hello world, hello world";
              var txt2="bye bye";
             var res=txt.includes("Hello");
              
                 res=txt.concat(txt2);
                 res=txt.startsWith("h");   //boolean true/false
                 res=txt.endsWith("hello")
                 res=txt.indexOf("h");
                 res=txt.lastIndexOf("world");//lat occurance index
                 res=txt.length;
                 res=txt.match("world");      
                 res=txt.matchAll("world");
                 res=txt.padEnd(10,".")
                 res=txt.repeat(2);          //repeat text 2 times
                 res=txt.replace("world","island");
                 res=txt.search("Hello");
                 res=txt.slice(txt.indexOf("world"),txt.length);
                 res=txt.split(',');
                 res=txt.slice(10,-2);
                 res=txt.substring(0,10);
                 res=txt.toLocaleLowerCase();  //copy to lowercase
                 res=txt.toLocaleUpperCase();
                 res=txt.toUpperCase();
                 res=txt.trim();
                 res=txt.trimEnd();
                 res=txt.trimStart();

              console.log(res);


              // date get and set methods


       

      // //getDate    get the days as a aumber  1-31
      //   getDay    get the weekday as a month 0-6
      //   getFullYear                 yyy
      //   getHours                   0-
      //   getMilliseconds
      //   getMinutes()
      //   getMOnth()
      //   getMilliseconds()
      //   getTime()
      
      // real ex of date ---         input date sever age,   subscription,  recharge

      var dayNames = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
      var date=new Date("2023/12/07 10:30:1:221"); 
      var res=date.getDate();
          res=date.getDay();
          res=dayNames[date.getDay()];
          res=date.getFullYear();
          res=date.getMonth();
          res=date.getHours();
          res=date.getMinutes();
          res=date.getMilliseconds();
         // res=date.getTime();
         res=date.toLocaleTimeString();
          // min=sec/60;
          // hour=min/60;
          // dy=hour/24;
          // month=dy/30
          res=date.toLocaleDateString();
          

      console.log(date);


      //set methods

      // setDate()	                 Set the day as a number (1-31)
      // setFullYear()	             Set the year (optionally month and day)
      // setHours()	                 Set the hour (0-23)
      // setMilliseconds()	         Set the milliseconds (0-999)
      // setMinutes()	               Set the minutes (0-59)
      // setMonth()	                 Set the month (0-11)
      // setSeconds()              	 Set the seconds (0-59)
      // setTime()	                 Set the time (milliseconds since January 1, 1970)
      

      
     date.getFullYear(2023);
     date.setDate(date.getDate()+30);
     var month=["January","February","March","April","May","June","July","August","September","October","November","December"];
     date.setMonth(month.indexOf("june"));
     res=date
     console.log(res);


     function subscribe(subMonth) {
      var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
      var month= ["January","February","March","April","May","June","July",
      "August","September","October","November","December"];
          dt=new Date();
          today=new Date();
          switch (subMonth) {
              case 3:
                  TodayDate=today.toLocaleDateString();
                  dt.setMonth(dt.getMonth()+3)
                  ExpiryDate=dt.toLocaleDateString();
                  qurterYear.innerHTML=`
                  <h5 class="card-subtitle text-bg-success p-1">Today Date : ${dayNames[today.getDay()]} - ${month[today.getMonth()]}-${today.getFullYear()}</h5>
                  <h5 class="card-subtitle text-bg-danger p-1">Expiry Date : ${dayNames[dt.getDay()]} - ${month[dt.getMonth()]}-${dt.getFullYear()}</h5>
                  `
                  break;
              case 12:
                  TodayDate=today.toLocaleDateString();
                  dt.setMonth(dt.getMonth()+12)
                  ExpiryDate=dt.toLocaleDateString();
                  FullYear.innerHTML=`
                  <h5 class="card-subtitle text-bg-success p-1">Today Date : ${TodayDate}</h5>
                  <h5 class="card-subtitle text-bg-danger p-1">Expiry Date : ${ExpiryDate}</h5>
                  `
                  break;
              case 6:
                  TodayDate=today.toLocaleDateString();
                  dt.setMonth(dt.getMonth()+6)
                  ExpiryDate=dt.toLocaleDateString();
                  HalfYear.innerHTML=`
                  <h5 class="card-subtitle text-bg-success p-1">Today Date : ${TodayDate}</h5>
                  <h5 class="card-subtitle text-bg-danger p-1">Expiry Date : ${ExpiryDate}</h5>
                  `
                  break;
          
              default:
                  break;
          }
      }

      // Math functions

var res=Math.min(10,20,330,50,4);
res=Math.max(162,255,333,36);
res=Math.round(10,5);
res=Math.floor(10,2);
res=Math.ceil(10,5);
res=Math.sqrt(25);
res=Math.pow(12,3);
res=Math.random(12);
console.log(res);




    

// javascript timing events
 //                       set time out, set interval

            
setTimeout(clock,2000);
function clock(){
clocks.innerHTML=new Date();
}


  var interval=setInterval(clock,1000);
function clock(){
  clocks.innerHTML=new Date().toLocaleTimeString();
  }

  function stop(){
    clearInterval(interval);
  }
//regular expression     /pattern/modifiers       modifiers are i , g, m   


// var txt="hello world , helo world";
// var pattern=/world/i;
// var res=txt.match.apply(pattern);
// console.table(res)



// var txt="hello world , helo world";
// var pattern=/[^abc]/g;
// var res=txt.match.apply(pattern);
// console.table(res)


// metacharacters


// var txt="hello World , helo world";
// var pattern=/[\bWorld]/i;            //begins with world  /[world\b]/   ending world search
// var res=txt.match.apply(pattern);
// console.table(res)


// var sett


// var mapp=new Map([
//   ["id",100],
// ["username","arunima@123"]]);
// map.set("Name","Akil");
// mapp.sett("Age",24);
// console.log(mapp.get("username"));
// console.log(mapp.values);
// for (const item of mapp.entries()){
//   console.log(item);
// }

function SubmitData() {
  var form=document.forms["myForm"];
  var formData={};
  
  // Validate User name
  var unameTxt=form["uname"].value;
  var unameError;
  if (unameTxt=='') {
      unameError="Please Enter Your User name";
      erruname.innerHTML=unameError;
      //return false;
  }else{
      formData["Username"]=unameTxt;
      erruname.innerHTML='';
  }
  
  // VAlidate password
  var passwordTxt=form["password"].value;
  var passwordError;
  if (passwordTxt=='') {
      passwordError="Please Enter Your Password";
      pass.classList.add("err");
      errpassword.innerHTML=passwordError;
      //return false;
  }else if(passwordTxt.length > 6 ){
      passwordError="Maximum 6 characters";
      pass.classList.add("err");
      errpassword.innerHTML=passwordError;
  } else{
      formData["Password"]=passwordTxt;
      pass.classList.remove("err");
      pass.classList.add("valid");
      errpassword.innerHTML='';
      passwordError='';
  }

  // Submit data
  console.log(formData);
  return false;


  // else {
  //     formData["Username"]=unameTxt.value;
  //     formData["Password"]=passwordTxt.value;
  //     console.log(formData);
  //     return true;
  // }

  
  
}




