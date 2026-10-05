cartNum = document.querySelectorAll('.cartnum ')
initial = 0
closebtn = document.getElementById('close')
priceCard = document.querySelector('.card')
priceCards = document.querySelectorAll('.item')
tops = document.querySelectorAll('.top')
foots = document.querySelectorAll('.foot')
bracels = document.querySelectorAll('.brace')
caps = document.querySelectorAll('.cap')
prodname = document.getElementById('name')
prodDesc = document.getElementById('description')
prodPrice = document.getElementById('price');
prodImg = document.querySelector('.cimg');
cartSec = document.querySelector('.cartsec')
//number = Number(localStorage.getItem("cartnum")) ||0;
cartNum = document.getElementById("cartnum");
addBtn = document.querySelectorAll('#add')
remBtn = document.querySelectorAll('.remo')
elecpg = document.querySelector(".electronicsi")
fashpg = document.querySelector(".fashionii")
buttons = document.querySelectorAll(".add");
totalBx = document.querySelector(".tot")
menuIc = document.getElementById('menu')
menuBar = document.querySelector('nav ul')
closeMen = document.getElementById('closemenu')
dnbtn = document.querySelector('.major')
shirtSize = document.getElementById('shirtsize')
footSize = document.getElementById('ftsize')
prices = []
items = []
selectedFtSz =""
selectedShSz =""
 document.querySelectorAll('input[name ="size"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        console.log(this.value)
        document.getElementsByClassName("ssze")[0].textContent =`current size is ${this.value}`
        selectedFtSz = this.value
    })
})

 document.querySelectorAll('input[name ="shsize"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        console.log(this.value)
        document.getElementsByClassName("shsze")[0].textContent =`current size is ${this.value}`
        selectedShSz = this.value
    })
})


function ftsz() {
    footSize.style.display = 'none';
    shirtSize.style.display = 'flex';
}
function shsz() {
    footSize.style.display = 'none';
    shirtSize.style.display = 'none';
}
function shftsz() {
    footSize.style.display = 'flex';
}
function showMenu() {
    menuBar.style.top = '3.5em'

    menuIc.style.display = 'none'
    closeMen.style.display = 'inline-block'
}
function closeMenu() {
    menuBar.style.top = "-100%"

    closeMen.style.display = 'none'
    menuIc.style.display = 'inline-block'
}
function openCart() {
    cartSec.style.right = '0';
}
function closeCart() {
    cartSec.style.right = '-50%';
}
//function increase() {
  //  number++;
    //localStorage.setItem("cartnum", number);
    //document.getElementById("cartnum").textContent = number
//}

/*function addItem() {
    initial +=1
    cartNum.textContent = initial
}*/  
function closeCard() {
    
    priceCard.style. width = '0em'
    priceCard.style. padding = '0em'
    priceCard.style. overflow = 'hidden'
}

function openCard( name, desc, price, pic ) {

    prodImg.style.backgroundImage = `url('${pic}')`;
    prodname.textContent = name
    prodDesc.textContent = desc;
    prodPrice.textContent = price;
    priceCard.style. width = '80%'
    priceCard.style. padding = '1em'
    priceCard.style. overflow = 'hidden'
}
function showTops() {
    document.getElementById("cap").classList.remove('active')
    document.getElementById("foot").classList.remove('active')
    document.getElementById("top").classList.add('active')
    document.getElementById("all").classList.remove('active')
    document.getElementById("brac").classList.remove('active')
    priceCards.forEach(function(al) {al.style.display ='none'})
    tops.forEach(function(tp) {tp.style.display = 'inline-block'})
}
function alli() {
    document.getElementById("cap").classList.remove('active')
    document.getElementById("foot").classList.remove('active')
    document.getElementById("all").classList.add('active')
    document.getElementById("top").classList.remove('active')
    document.getElementById("brac").classList.remove('active')
    priceCards.forEach(function(pc) {pc.style.display ='inline-block'})
}
function showFoot() {
    document.getElementById("cap").classList.remove('active')
    document.getElementById("top").classList.remove('active')
    document.getElementById("foot").classList.add('active')
    document.getElementById("all").classList.remove('active')
    document.getElementById("brac").classList.remove('active')
    priceCards.forEach(function(al) {al.style.display ='none'})
    foots.forEach(function(ft) {ft.style.display = 'inline-block'})
}
function showCap() {
    document.getElementById("cap").classList.add('active')
    document.getElementById("top").classList.remove('active')
    document.getElementById("foot").classList.remove('active')
    document.getElementById("all").classList.remove('active')
    document.getElementById("brac").classList.remove('active')
    priceCards.forEach(function(al) {al.style.display ='none'})
    caps.forEach(function(cp) {cp.style.display = 'inline-block'})
}
function showBrac() {
     fashpg.style.display = 'block'
    elecpg.style.display ='none'
    document.getElementById("cap").classList.remove('active')
    document.getElementById("top").classList.remove('active')
    document.getElementById("brac").classList.add('active')
    document.getElementById("all").classList.remove('active')
    document.getElementById('foot').classList.remove('active')
    priceCards.forEach(function(al) {al.style.display ='none'})
    bracels.forEach(function(bc) {bc.style.display = 'inline-block'})
}

//document.querySelectorAll(".add").onclick = function() {
  //  initial +=1
    //cartNum.textContent = initial
//}


function addItem(img, cname, cprice, buttonEl) {
        price = Number(cprice)
          prices.push(price)
          console.log(price)
            total = prices.reduce((acc, curr) => acc + curr, 0),
            console.log(total)

            totalBx.textContent = total




    initial +=1
    cartNum.textContent = initial

  const newItem = document.createElement("div")
    newItem.className ="new"
    document.querySelector(".cartitems").append(newItem)

    newItem.relatedButton = buttonEl;
    buttonEl.style.display = 'none'

    imgDiv = document.createElement("div")
    imgDiv.className = "crtimg"
    imgDiv.style.backgroundImage = `url('${img}')`
    newItem.appendChild(imgDiv)

    txtDiv = document.createElement("div")
    txtDiv.className = "crttxt"
    newItem.appendChild(txtDiv)
    crtItNm = document.createElement("h3")
    crtItNm.className = "crtname"
    txtDiv.appendChild(crtItNm)
    crtItNm.textContent = cname

    crtItPc = document.createElement("h3")
    crtItPc.className = "crtprice"
    txtDiv.appendChild(crtItPc)
    crtItPc.textContent = cprice


    actDiv = document.createElement("div")
    actDiv.className = "crtactbtn"
    actDiv.style.display = "flex"
    actDiv.style.justifyContent = "center"
    actDiv.style.gap = "10px"
    actDiv.style.width = "25% "
    actDiv.style.alignItems = "center"
    newItem.appendChild(actDiv)

    
   // decBtn = document.createElement("button")
    //decBtn.className = "dec"
    //decBtn.textContent = "-"
    //actDiv.appendChild(decBtn)

    decBtn = document.createElement("input")
    decBtn.type = "number";
    decBtn.style.width = "3.5em"
    decBtn.min = "1"
    decBtn.value = "1"
    decBtn.className = "dec"
    actDiv.appendChild(decBtn)


   // itmNum = document.createElement("h4")
    //itmNum.className = "num"
    //itmNum.textContent = "4"
    //actDiv.appendChild(itmNum)

    remBtn = document.createElement("button")
    remBtn.className = "inc"
    remBtn.textContent = "-"
    actDiv.appendChild(remBtn)

    remBtn.addEventListener('click', () =>{
        newItem.relatedButton.style.display = 'block'
        newItem.remove();
        initial -=1
        cartNum.textContent = initial
        prices.pop(price);
          total = prices.reduce((acc, curr) => acc + curr, 0),
            console.log(total)

            totalBx.textContent = total
    })
}





//function changee(event){
  //  event.target.textContent = 'remove'
//}

//addBtn.addEventListener("click", changee)

//buttons.forEach(function(button) {
  //  button.addEventListener("click", function() {
    //    this.textContent = "Remove";
      //  this.classList.replace("add", "rem");
      //  this.style.display = "none"
    //});
//});

function openPage() {
    elecpg.style.display ='block'
    fashpg.style.display = 'none'
}
function opFashPg() {
    fashpg.style.display = 'block'
    elecpg.style.display ='none'
    document.getElementById("cap").classList.remove('active')
    document.getElementById("foot").classList.remove('active')
    document.getElementById("all").classList.add('active')
    document.getElementById("top").classList.remove('active')
    document.getElementById("brac").classList.remove('active')
    priceCards.forEach(function(pc) {pc.style.display ='inline-block'})
}

function closePage() {
    elecpg.style.display ='none'
    fashpg.style.display = 'none'
}
function showFashCap() {
     fashpg.style.display = 'block'
    elecpg.style.display ='none'
    document.getElementById("cap").classList.add('active')
    document.getElementById("top").classList.remove('active')
    document.getElementById("foot").classList.remove('active')
    document.getElementById("all").classList.remove('active')
    document.getElementById("brac").classList.remove('active')
    priceCards.forEach(function(al) {al.style.display ='none'})
    caps.forEach(function(cp) {cp.style.display = 'inline-block'})
}
function showFashTop() {
     fashpg.style.display = 'block'
    elecpg.style.display ='none'
    document.getElementById("cap").classList.remove('active')
    document.getElementById("top").classList.add('active')
    document.getElementById("foot").classList.remove('active')
    document.getElementById("all").classList.remove('active')
    document.getElementById("brac").classList.remove('active')
    priceCards.forEach(function(al) {al.style.display ='none'})
    tops.forEach(function(tp) {tp.style.display = 'inline-block'})
}
function showFashFoot() {
     fashpg.style.display = 'block'
    elecpg.style.display ='none'
    document.getElementById("cap").classList.remove('active')
    document.getElementById("top").classList.remove('active')
    document.getElementById("foot").classList.add('active')
    document.getElementById("all").classList.remove('active')
    document.getElementById("brac").classList.remove('active')
    priceCards.forEach(function(al) {al.style.display ='none'})
    foots.forEach(function(ft) {ft.style.display = 'inline-block'})
}


function order(name, desc, price, image) {
    message = `Hello Aaron Hub, I would like to order:
    product: ${name}
    Description: ${desc}
    price: ${price}
    size:  ${selectedFtSz} 
    imageURL = new URL(${image}, window.location.href).href
    view Product Image -> ${imageURL}`
   
    phoneNumber = "233266360736"
    WhatsappUrl =`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(WhatsappUrl, "_blank");
}



function ordershir(name, desc, price, image) {
    message = `Hello Aaron Hub, I would like to order:
    product: ${name}
    Description: ${desc}
    price: ${price}
    size:  ${selectedShSz}
    imageURL = new URL(${image}, window.location.href).href
    view Product Image -> ${imageURL} `
    phoneNumber = "233266360736"
    WhatsappUrl =`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(WhatsappUrl, "_blank");
}

function orderNS(name, desc, price, image) {
    message = `Hello Aaron Hub, I would like to order:
    product: ${name}
    Description: ${desc}
    price: ${price}  
    imageURL = new URL(${image}, window.location.href).href
    view Product Image -> ${imageURL}`
    
    phoneNumber = "233266360736"
    WhatsappUrl =`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(WhatsappUrl, "_blank");
}



