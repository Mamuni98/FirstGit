//console.dir(document);
//console.log(document.URL);
//console.log(document.domain);
//console.log(document.title);
//document.title="hello";
//console.log(document.head);
//console.log(document.body);
//console.log(document.all[10]);
//document.all[10].textContent= "hello";
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);
//console.log(document.getElementById('header-title'));
//var headTitle= document.getElementById('header-title');
//console.log(headTitle.innerText);
//console.log(headTitle.textContent);
/*var header = document.getElementById("main-header");
header.style.borderBottom="3px solid black";
var title= document.getElementsByClassName("title");
//console.log(title);
title[0].style.color="green";
title[0].style.fontWeight="bold";*/
/*var items = document.getElementsByClassName("list-group-item");
items[2].style.color = 'green';
for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight='bold';
}*/
/*var list = document.getElementsByTagName('li');
list[2].style.color = 'green';
for(var i=0;i<list.length;i++)
{
    list[i].style.fontWeight='bold';
}*/
//QUERY SELECTOR
/*var header = document.querySelector('#main-header');
header.style.borderBottom = "3px solid black";
var input = document.querySelector('input[type="submit"]');
input.value = "Click here";*/
//DELIVERABLE
/*var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor = "green";
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.color = "white";
//QUERYSELECTOR ALL
var item = document.querySelectorAll('li');
item[1].style.color = "green";
var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i=i+1)
{
    odd[i].style.backgroundColor = "green";
}*/

//var itemList = document.querySelector('#items');
//console.log(itemList.parentNode);
//console.log(itemList.parentElement);
//itemList.parentElement.style.backgroundColor = 'grey';
//console.log(itemList.childNodes);
//console.log(itemList.children);
//itemList.children[1].textContent = "Hello";
/*console.log(itemList.firstChild);
console.log(itemList.firstElementChild);
itemList.firstElementChild.style.backgroundColor = "red";*/
/*console.log(itemList.lastChild);
console.log(itemList.lastElementChild);
itemList.lastElementChild.style.backgroundColor = "red";*/
/*console.log(itemList.previousSibling);
console.log(itemList.previousElementSibling);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);*/

//CREATE NEW ELEMENT

var newDiv = document.createElement('div');
newDiv.className = "hello";
newDiv.id = 'hello 1';
newDiv.setAttribute("title", "HELLO");
var newDivText = document.createTextNode("Hello");
newDiv.appendChild(newDivText);
var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
console.log(newDiv);

var itemList = document.querySelector('#items');
//console.log(itemList.innerHTML);
itemList.innerHTML = "<li> Hello </li>" + itemList.innerHTML;
