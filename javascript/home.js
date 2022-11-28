var wholedata=[]
async function getdata(){
    const response=await fetch("https://fakestoreapi.com/products")
    const data=await response.json()
    // console.log(data)
    wholedata=data
appenddata(data)
}
getdata()
let maindiv=document.getElementById("main")

function appenddata(data){
    maindiv.innerHTML=null
    data.map((e)=>{
        // console.log("data",data)
        let divv=document.createElement("div")
    divv.style.border='2px solid red'

    let im=document.createElement("img")
    im.src=e.image
    im.style.height='200px'

    let price=document.createElement('h3')
    price.innerHTML='price_'  +e.price
        let pp=document.createElement("p")
    pp.innerText=e.id


    let cat=document.createElement("h1")
    cat.innerHTML='category-' +e.category
    let btn=document.createElement("button")
    
    
    divv.append(pp,im,price,cat)
    maindiv.append(divv)
    })
   
}
function handlechange(){
    // console.log('whole',wholedata)
    var sortdata=document.getElementById("sort").value
    console.log(sortdata)
    if(sortdata=='htl'){
       var high=wholedata.sort(function(a,b){
            return b.price-a.price
        })
        console.log(high)
        appenddata(high)

    }
    else if(sortdata=='lth'){
      var low=  wholedata.sort(function(a,b){
            return a.price-b.price
        })
        appenddata(low)
    }

}



function handlefilter(){
    var fil=document.getElementById('filter').value
    console.log(fil)
     if(fil=='elec'){
        var el=wholedata.filter((e)=>{
            return e.category=='electronics'
        })
        console.log(el)
        appenddata(el)
     }

    else if(fil=='jwel'){
        var el=wholedata.filter((e)=>{
            return e.category=='jewelery'
        })
        console.log(el)
        appenddata(el)
     }

     else if(fil=='mens'){
        var el=wholedata.filter((e)=>{
            return e.category=="men's clothing"
        })
        console.log(el)
        appenddata(el)
     }
}