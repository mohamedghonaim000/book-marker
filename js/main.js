var siteName = document.getElementById("bookmarkName")
var siteUrl = document.getElementById("bookmarkURL")
var button = document.getElementById("submitBtn")
var btnVisit = document.getElementById("visit")
var  btnDelete = document.getElementById("Delete")
// add url
var sites =[]
if(localStorage.getItem("site") !==null){
    sites=JSON.parse(localStorage.getItem("site"))
    Display()
}
else{
    var sites =[]
}

function addUrl(){
  if(validationName()==true && validationUrl()==true){
    var site= {
        siteName:siteName.value,
        siteUrl:siteUrl.value
    }
    sites.push(site)
    localStorage.setItem("site",JSON.stringify(sites))
    console.log(sites);
  }
}

//display url
function Display (){
    var cartoona;
    for (let i = 0; i < sites.length; i++) {
        cartoona+=`
           <tr><th class="text-capitalize">${[i+1]}</th>
            <th class="text-capitalize">${sites[i].siteName}</th>
             <th class="text-capitalize"><button onclick="visitItem(${i})" class="btn btn-visit px-5" id="visit">visit</button></th>
            <th class="text-capitalize"><button onclick="deleteItem(${i})" class="btn btn-Delete px-5" id="Delete">Delete</button></th>
          </tr>
          `
        
    }
    document.getElementById("tableContent").innerHTML=cartoona
}
// clear funcition
function clear(){
    siteName.value=""
    siteUrl.value=""
}
// visit
function visitItem(index) {
    window.open(sites[index].siteUrl , "_blank")
}
// delete item
function deleteItem(index) {
    sites.splice(index , 1)
    localStorage.setItem("site", JSON.stringify(sites));
    Display();
}

// add event listener
button.addEventListener("click",function(){
    addUrl()
    Display()
    clear()
    validationName()
})


// validation
function validationName(){
    var regex = /^[A-Z]{1}[a-z]{3,12}[0-9]*$/
    var siteName = document.getElementById("bookmarkName")
    if(regex.test(siteName.value)==true){
        document.getElementById("alertName").classList.replace("d-block" , "d-none")
        return true
    }
    document.getElementById("alertName").classList.replace("d-none" , "d-block")
    return false
    
}
function validationUrl(){
    var regex = /https?:\/\/[^\s/$.?#].[^\s]*/
    var siteUrl = document.getElementById("bookmarkURL")
    if(regex.test(siteUrl.value)==true){
        document.getElementById("alertUrl").classList.replace("d-block" , "d-none")
        return true
    }
    document.getElementById("alertUrl").classList.replace("d-none" , "d-block")
    return false
    
}