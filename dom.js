//console.dir(document);
// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)

// //document.title= 123
// console.log(document.doctype)
// console.log(document.head)
// console.log(document.body)

// //console.log(document.all)
// //console.log(document.all[10])
// //document.all[10].textContent ='hello'
// console.log(document.forms[0])
// console.log(document.images)


// //console.log(document.getElementById("header-title"))
// var headerTitle= document.getElementById("header-title")
// var header= document.getElementById("main-header")
// //console.log(headerTitle)
// //headerTitle.textContent='bybye'
// //headerTitle.innertext='bybye'
// //headerTitle.innerHTML='<h3>Heelllo</h3>'
//  //headerTitle.innerText="<h3>v<h3>"
// header.style.borderBottom ="solid 20px #000"

// var items = document.getElementsByClassName("list-group-item")
// console.log(items[4])

// items[3].textContent="Hello"
// items[3].style.fontWeight="bold"
// items[3].style.backgroundColor="yellow"
// items[4].textContent="Hello"
// items[4].style.fontWeight="bold"
// items[4].style.backgroundColor="yellow"
// var add =document.querySelector('.title')

// add.style.fontWeight='bold'
// add.style.color="green"


// items[2].style.backgroundColor="green"

// for(var i =0;i<items.length;i++)
// {

// items[i].style.fontWeight="bold"
// items[i].style.color="blue"

// }

// //GETELEMENTSBYTAGNAME//
// var li = document.getElementsByTagName("li")
// console.log(li)
// console.log(li[4])
// li[4].textContent ='Hello 2'
// li[4].style.fontWeight ='bold'
// li[4].style.backgroundColor='grey'

//items[1].textContent="Hello"
//items[1].style.fontWeight="bold"
//items[1].style.backgroundColor="yellow"
// var add =document.querySelector('.title')

// add.style.fontWeight='bold'
// add.style.color="green"


// items[2].style.backgroundColor="green"

// for(var i =0;i<items.length;i++)
// {

// items[i].style.fontWeight="bold"
// items[i].style.color="blue"

// }



// //QuerySelector 
//   var seconditem = document.querySelector('.list-group-item:nth-child(2)')
//   seconditem.style.backgroundColor='green'
//   console.log(seconditem )
//   var thirditem = document.querySelector('.list-group-item:nth-child(3)')
//   thirditem.style.color='white'
//QuerySelectorALL
  var itm = document.querySelectorAll('.list-group-item')
  console.log(itm)
  itm[1].style.color='green'

  var odd=document.querySelectorAll('li:nth-child(odd)')

  for(var i =0; i<odd.length;i++)
  {
    odd[i].style.backgroundColor ='green'
  }

