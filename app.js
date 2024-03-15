//Q1
// let num1= +prompt("Enter any number");
// let num2 = +prompt("Enter any number");
// let sum = num1+num2;
// document.write(sum)

//Q2
// let number1 = +prompt("Enter any number")
// let number2 = +prompt("Enter any number")
// let operation =prompt ("+ - * / %");
// if (operation === "+"){
// 	console.log(number1+number2)
// }

//  else if (operation === "-"){
// 	console.log(number1-number2)
// }
// else if (operation === "*"){
// 	console.log(number1*number2)
// }

// else if (operation === "/"){
// 	console.log(number1/number2)
// }
// else{
// 	console.log(number1%number2)

// }


//Q3
// let numb;
// numb=5;
// ++numb;
// numb = numb+7;
// --numb;
// numb= numb%3;


//Q4

// let ticketPrice = 600 ;
// let pkr= "PKR"
// let calculate = ticketPrice *5 +" " +pkr;
// console.log(calculate)

//Q5
// let table = prompt("Enter 4 number I will display table of 4");
// if(table==4){
// document.write(
// "<table>"
// +"<tr>"
// +"<td>"+"Table of 4" +"</td>"
// +"</tr>"
// +"<tr>"
//  + "<td>" +"4x1=4 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x2=8 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x3=12 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x4=16 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x5=20 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x6=24 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x7=28 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x8=32 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x9=36 "  +"<td>"
//  +"<tr>"
//  +"<tr>"
//  + "<td>" +"4x10=40 "  +"<td>"
//  +"<tr>"
// +"</table>")
// }
// else{
// 	document.write("Sorry! I can not display any number of table without 4.")
// }

//Q7
// let item1=+prompt("Enter the price of item 1");
// let item2 = +prompt("Enter the price of item 2");
// let quantity1=+ prompt("Enter the quantity of item1");
// let quantity2= +prompt("Enter the quantity of item2");
// let shipping = +prompt("Enter the shipping charges");
// let total = (item1*quantity1+shipping)+(item2*quantity2)
// document.write(
// "<table>"
// +"<h1>" +"Shopping Cart"  + "</h1>"
// +"<tr>" 
// +"<td>" +"Price of item 1 is " +item1  +"</td>"
// +"</tr>"
// +"<tr>" 
// +"<td>" +"Quantity of item 1 is " + quantity1  +"</td>"
// +"</tr>"
// +"<tr>" 
// +"<td>" +"Price of item 2 is " +item2  +"</td>"
// +"</tr>"
// +"<tr>" 
// +"<td>" +"Quantity of item 2 is " + quantity2  +"</td>"
// +"</tr>"
// +"<tr>" 
// +"<td>" +"Shipping Charages is " + shipping  +"</td>"
// +"</tr>"
// +"<tr>" 
// +"<td>" +"</td>"
// +"</tr>"
// +"<tr>" 
// +"<td>" +"</td>"
// +"</tr>"
// +"<tr>" 
// +"<td>" +"</td>"
// +"</tr>"
// +"<tr>" 
// +"<td>" +"Total cost of your order is "+total +"</td>"
// +"</tr>"


// +"</table>"

// )

//Q8
//  let totalMarks = prompt("Enter your total marks")
// let obtainedMarks = prompt("Enter your obtained marks")
// let percentage= obtainedMarks/totalMarks*100;

// document.write(
// "<table>"
// +"<h1>"    +"Marks Sheet" +"</h1>"

// +"<tr>"
// + "<td>" +"Total marks:" +"</td>" +"<td>"+ totalMarks +"</td>"
// +"</tr>"
// +"<tr>"
// + "<td>" +"Marks obtained:" +"</td>" +"<td>"+ obtainedMarks +"</td>"
// +"</tr>"
// +"<tr>"
// + "<td>" +"Percrntage:" +"</td>" +"<td>"+ percentage
// +  " % </td>"
// +"</tr>"
// +" </table>"
// )


//Q9
// let dollar =+prompt("Enter the US dollars to convert the Pakistani rupee");
// document.write( "Total Currency in PKR : " +dollar*104.80 + 700 );



//Q10
// let numbers =55;
// numbers= numbers+5*10/2;
// console.log(numbers)

//Q11

// let currentYear = +prompt("Enter the current year");
// let birthYear = +prompt("Enter the birth year");
// let totalyear = currentYear-birthYear
// document.write(
// "<table>"
// +"<h1>"  +"Age Calculator"  +"</h1>"
// +"<tr>"
// +"<td>" +"Current Year:" +"</td>" +"<td>"+currentYear +"</td>"
// +"</tr>"
// +"<tr>"
// +"<td>" +"Birth Year:" +"</td>" +"<td>"+ birthYear+"</td>"
// +"</tr>"
// +"<tr>"
// +"<td>" +"Your Age is:" +"</td>" +"<td>"+ totalyear+"</td>"
// +"</tr>"
// +"</table>"

// )




//13
// let favoriteSnack = prompt("Enter your favorite snack");
// let currentAge = prompt ("Enter your current age");
// let maximumAge = prompt("Enter your maximum age")
// let amount = prompt("What is the amount of snack per day that you eat?")
// let total =(  maximumAge-currentAge) * amount;
// document.write(
// "<table>"
// +"<tr>"
// +"<td>" + "Favourite Snack:"  +"</td>"  +"<td class=one>"+ favoriteSnack  +"</td>"
// + "</tr>"
// +"<tr>"
// +"<td>" + "Current Age:"  +"</td>"  +"<td class=two>"+ currentAge  +"</td>"
// + "</tr>"
// +"<tr>"
// +"<td>" + "Estimated Maximum Age:"  +"</td>"  +"<td class=three>"+ maximumAge  +"</td>"
// + "</tr>"
// +"<tr>"
// +"<td>" + "Amount of snack per day:"  +"</td>"  +"<td class=three>"+ amount  +"</td>"
// + "</tr>"
// +"<tr>"
// +"<td>" + "You will need "+ total + " "+ favoriteSnack +" to last you until the ripe old age of " +maximumAge  +"</td>"
// + "</tr>"
// + "</table>"
// )











































