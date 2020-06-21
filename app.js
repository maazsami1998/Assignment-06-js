 //Chapter 21-25 and Task # 1
// var Fistname=prompt("First Name");
// var Lastname=prompt("Last Name");
// var fullname=prompt(Fistname+Lastname);
// alert(fullname);

 //Task # 2
// var str = prompt("My favorite phone is: ");
// var n= str.length;
// document.write("Length Of String" + n);

 //Task # 3 
// var text='Pakistan';
// var country=text.indexOf('n');
// document.write("String" + text);
// document.write("Index of n" + country);

 //Task # 4 
 //   var text = 'Hello World';
//   var segment = text.lastIndexOf('l');
//   document.write("String" + text);
// document.write("Last Index of 'l' :" + segment);

 //Task # 5 
 // var text='Pakistan';
// var country=text.indexOf('i');
// document.write("String : " + text  +"<br>");
// document.write("Character at index 3:" + country);

 //Task # 6 
//  var Fistname=prompt("Enter your First Name");
//  var Lastname=prompt("Enter your Last Name");
//   var fullname=Fistname.concat(Lastname);
//   alert(fullname);

 //Task # 7 
//  var text='the idea of Hyberabad';
// var newText = text.replace("Hyberabad", "Islamabad");
// document.write("City:  "  + text  +"<br>");
// document.write("After Replacement " +newText);

//Task # 8 
// var message = 'Ali and Sami are best friends. They play cricket and football together';
// var newText = message.replace("and", "$");
// document.write(newText);

 //Task # 9
// let str = "472";
// document.write("Value: "+str +"<br/>");
// document.write("Type:  " + typeof str);
// document.write( Number("472"));


 //Task # 10 
 // var text=prompt("Enter your flavour");
// var othertext=text.toUpperCase();
// document.write("User input: "+ text +"<br>");
// document.write("Upper case: "+othertext);

 //Task # 11 
//  var text=prompt("Enter your Programming Language");
//  var firsttext=text.slice(0,1);
//  firsttext=firsttext.toUpperCase();
//  var otherstext=text.slice(1);
// otherstext=otherstext.toLowerCase()

//  var text=firsttext+otherstext;
//  document.write(text);

 //Task # 12 
// const num = 35.36;
// const withnumber = num.toString().replace(".", ""); 
// document.write("Number: "+num);
// document.write("Result: "+withnumber);

 //Task # 13 
// var username=prompt("Enter your username");

// var format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/;

// document.write("Please enter Valid username"+format+username);


//Task # 14 
// var arr =prompt("Weclome to ABC Bakery.What do you want to order sir/mam?")
// var arr = ["cake", "apple pie", "cookie", "chips", "patties"];
// var number=arr[0];
// if(number < arr)
// {
// document.write(arr[i]+"is available at index 0 in our bakery");
// document.write(arr[i]+"is available at index 1 in our bakery");
// document.write(arr[i]+"is available at index 2 in our bakery");
// document.write(arr[i]+"is available at index 3 in our bakery");
// document.write(arr[i]+"is available at index 4 in our bakery");
// }
// else
// {
// document.write(arr[i]);
// }


 //Task # 15
// var Inputvalue=prompt("Enter your password");
//   var a=/[0-9A-Za-z]+$/;
//   if(Inputvalue.matches(a))
//   {
//     alert("Please enter a valid password");
//   }
//   else
//   {
//     alert("Please not a valid password");
//   }
// document.write(Inputvalue+Inputvalue.matches(a)+a);

// Inputvalue();

 //Task # 16 
    // var text = prompt("Enter your country");
    // var res = text.charAt(7)
    // document.write("User input  "+text +"<br/>");
    // document.write("Last Character of input  "+res);
 
    //Task # 17
//  var word= "University of Karachi";

//  for(var i=word.length-1; i >=0; i--)
//  {
//      console.log(word[i]);
//  }
 
 //Task # 18 
// var num=prompt("Enter count number");
// var char="The quick brown fox jumps over the lazy dog";
// document.write("Text: "+char+"There are "+num+"occurrences of word 'the'");

 //---------------Chapter 26-30 and Task # 1 -------------

//  var num=prompt("Enter your number");
//  var round =Math.round(num);
//  var round1=Math.ceil(num);
//  var round2=Math.floor(num);
//  document.write("Number"+num +"<br/>");
//  document.write("round off value"+round +"<br/>");
// document.write("floor value"+round2 +"<br/>");
// document.write("ceil value"+round1 +"<br/>");

 //---------------Chapter 26-30 and Task # 2 -------------

//  var num=prompt("Enter your number");
//  var round =Math.round(num);
//  var round1=Math.ceil(num);
//  var round2=Math.floor(num);
//  document.write("Number"+num +"<br/>");
//  document.write("round off value"+round +"<br/>");
// document.write("floor value"+round2 +"<br/>");
// document.write("ceil value"+round1 +"<br/>");

 //---------------Chapter 26-30 and Task # 3 -------------

// var num=-4;
// var res=Math.abs(-4);
// document.write("The absolute value of -4 is  "+ res);

// var num=5;
// var res=Math.abs(5);
// document.write("The absolute value of -4 is  "+ res);

 //---------------Chapter 26-30 and Task # 4 -------------
//  var diceRoll=prompt("Enter your number");
//  var diceRoll = Math.round( Math.random() * 6 )+1;
//  document.write('You rolled a ' + diceRoll);
 //---------------Chapter 26-30 and Task # 5 -------------
 
 
//  var userheads =prompt("Enter heads username");
// var usertails =prompt("Enter tails username");
// var toss=Math.random()*4;
// var floor =Math.floor(toss);
// document.write(floor);
 
 //---------------Chapter 26-30 and Task # 6 -------------
 // let getRandom=function(start,range)
// {
//    let getRandom=Math.floor((Math.random()* range) + start);
//    return getRandom;
// }
// alert("random number betwwen 1 and 100: "+getRandom(1,100));
 //---------------Chapter 26-30 and Task # 7 -------------

// var m=prompt("Enter your weight in kilograms");

// var W = m*9.8;
// document.write(W);
// var m1=prompt("Enter your weight in kilograms");
// var W1 = m*9.8;
// document.write(W1);

// var m2=prompt("Enter your weight in kilograms");
// var W2 = m*9.8;
// document.write(W2);

// var m3=prompt("Enter your weight in kilograms");
// var W3 = m*9.8;
// document.write(W3);

 //---------------Chapter 26-30 and Task # 8 -------------



 //---------------Chapter 31-34 and Task # 1 -------------
// var a = new Date();
// document.write(a);
//---------------Chapter 31-34 and Task # 2 -------------
// var month="December";
// alert("Current month:  "+month)

//---------------Chapter 31-34 and Task # 3 -------------
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// document.write("Today is "+nameOfToday)

//---------------Chapter 31-34 and Task # 4 -------------
//  var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// document.write("Today is "+nameOfToday);
// document.write("It's Fun day"+ nameOfToday);

//---------------Chapter 31-34 and Task # 5 -------------
// var num=prompt("Enter your days");
// if(num<=15)
// {
//    alert("First fifteen days of the month")
// }
// else if(num>=16)
// {
//    alert("First sixteen days of the month");
// }
// else
// {
//    alert("Last days of the month");
// }

//---------------Chapter 31-34 and Task # 6 -------------

// var a = new Date();
 
// var dateobject=["January 1 , 1970: 1449336743386"];
// var c=["January 1 , 1970: 402593.53982944443"];
// document.write("Current Date"+a + "<br/>");
// document.write("Elapsed milliseconds since "+dateobject + "<br/>");
// document.write("Elapsed minutes since "+c + "<br/>");

//---------------Chapter 31-34 and Task # 7 -------------

// var date= prompt("Enter your date");
// if(date<=12)
//  {
//     alert("Its AM")
//  }
//  else
//   {
//     alert("Its PM");
//     }

//---------------Chapter 31-34 and Task # 8 -------------

// var letterDate = new Date("Thu Dec 31 2020");
// document.write(letterDate);

//---------------Chapter 31-34 and Task # 9 -------------
// var startingdate ="1st Ramadan, 2015";
// var num =prompt("Enter your days");
// document.write(num  +" have passed since " + startingdate);

//---------------Chapter 31-34 and Task # 10 -------------

// var date = new Date("Sat Dec 05 2015  22:50:16");
// var n=488091;
// document.write("On Reference date "+date+"<br/>"+n+"seconds had passed since beginning of 2015");

//---------------Chapter 31-34 and Task # 11 -------------

// var date = new Date("Sat Dec 05 2015  22:50:16");
// var n ="1 hour ago, it was";
// document.write("current date: "+date+"<br/>"+n+date);

//---------------Chapter 31-34 and Task # 12 -------------
// var date = new Date("Sun Dec 05 2015  22:50:16");
// var n ="100 years, it was";
// document.write("current date: "+date+"<br/>"+n+date);

//---------------Chapter 31-34 and Task # 13 -------------

// var dob =new Date (prompt("Enter your date of birth","Jan 1,1994"));
// var dobmili=db.getTime();
// var today =new Date();
// var todaymili=today.getTime()
// var diff =todaymili-dobmili;
// var acurage=Math.floor(diff/(1000*60*60*24*30*12));
// document.write(acurage);


//---------------Chapter 31-34 and Task # 14 -------------

 // K-Electric Bill
// var name=prompt("Enter your Customer Name");
// var month=prompt("Enter your Current Month");
// var numberofunits=prompt("Enter your number of units");
// var chargesperunits=prompt("Enter your Charges per units");
// var LatePaymentSurcharge=prompt("Enter your Late Payment Surcharge");
// var NetAmountPayable = numberofunits * chargesperunits;
// var GrossAmountPayable = NetAmountPayable + LatePaymentSurcharge

// document.write("Customer Name:"+name + "<br/>");
// document.write("Month:"+month + "<br/>");
// document.write("Number of units: "+numberofunits + "<br/>");
// document.write("Charges per unit:"+chargesperunits + "<br/>");
// document.write("Net Amount Payable (within Due Date)"+NetAmountPayable + "<br/>");
// document.write("Late Payment Surcharge"+LatePaymentSurcharge);
// document.write("Gross Amount Payable (after Due Date)"+GrossAmountPayable);

//---------------Chapter 35-38 and Task # 1 -------------
// function tellTime() {
//    var now = new Date(); 
//    document.write("Current date: "+now);
//   }
// tellTime();

//---------------Chapter 35-38 and Task # 2 -------------

//  var Fistname=prompt("Enter your First Name");
//  var Lastname=prompt("Enter your Last Name");
// function fullname()
// {
//   alert(Fistname+Lastname);

// }
// fullname();

//---------------Chapter 35-38 and Task # 3 -------------

// var a=+prompt("enter the value of a");
// var b=+prompt("enter the value of b");
// function add(a,b)
// {
//   alert(a+b);
// }
// add(a,b);

//---------------Chapter 35-38 and Task # 4 -------------

// function calc(num1,opr,num2){
//     if(opr === "+"){
//         return num1 + num2
//     }
//     else if(opr === "-"){
//         return num1 - num2
//     } 
//     else if(opr === "*"){
//         return num1 * num2
//     else if(opr === "/"){
//         return num1 / num2

//     }else{
//         return "Incorrect Operator!"
//     }
// }
// var result = calc(5,"+",5);
// var result1 = calc(5,"-",5);
// var result2 = calc(4,"*",6);
//  var result3 = calc(4,"/",9)
// document.write(result);
// document.write(result1);
// document.write(result2);
// document.write(result3);

//---------------Chapter 35-38 and Task # 5 -------------

// const square = function(x) {
//   return x * x;
// };

// alert(square(12));

//---------------Chapter 35-38 and Task # 6 -------------

// function calcFact( num )
// {
// var i;
// var fact = 1;
// for( i = 1; i <= num; i++ )
// {
// fact = fact * i;
// }
// return fact;
// }
// alert(calcFact(3));

//---------------Chapter 35-38 and Task # 7 -------------
// var start=prompt("Enter your start number");
// var end=prompt("Enter your end number");
// function counting(start,end)
// {
//   var i;
//   for (i = start; i < end; i++) {
//   document.write(i+"<br/>");
//   }
// }
// alert(counting(start,end));

//---------------Chapter 35-38 and Task # 8 -------------
// function right(Base,Perpendicular)
// {
// var  Hypotenuse = Base + Perpendicular

// return Hypotenuse;
// }
// alert(right(1,5))

// function square(Base, Perpendicular){
//   return Math.sqrt(Math.pow(Base, 2) + Math.pow(Perpendicular, 2));
// }

// alert(square(4, 3));

//---------------Chapter 35-38 and Task # 9 -------------

// i) Argument vs value
// function right(width,height)
// {
// var A=width*height;
// return A;
// }
// alert(right(1,5))

//ii) Argument vs variables
// var width=prompt("Enter your width ");
// var height=prompt("Enter your width ");
// function right(width,height)
// {
// var A=width*height;
// return A;
// }
// alert(right(width,height))

//---------------Chapter 35-38 and Task # 10 -------------

// function palindrome(str)
// {
// var newStr= reverse.palindrome();
// if(str==newStr)
// {
// alert("it's a Palindrome.");
// }
// else
// {
// alert("not a Palindrome");
// }
// }
// palindrome("A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam");

//---------------Chapter 35-38 and Task # 11 -------------

// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }
// alert(uppercase("the quick brown fox"));

//---------------Chapter 35-38 and Task # 12 -------------

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// alert(find_longest_word('Web Development Tutorial'));

//---------------Chapter 35-38 and Task # 13 -------------
// function char_count(str, letter) 
// {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) 
//  {
//     if (str.charAt(position) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// alert(char_count('JSResourceS.com', 'o'));

//---------------Chapter 35-38 and Task # 14 -------------

// function calcCircumference(r)
// {
//   var r;
//   Circumferenceofcircle = 2*3.142*r;
//   return Circumferenceofcircle;
// }
// alert("The Cirumference  is NN"+calcCircumference(3));

// function calcArea(r)
// {
//   var r;
//   Areaofcircle = π*r*r;
//   return Areaofcircle;
// }
// alert("The Area  is NN"+calcArea(6));