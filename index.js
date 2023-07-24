const fromSearchWrapper=document.querySelector('.fromsearchinput');
const fromInputBox=fromSearchWrapper.querySelector('input');
const fromSuggBox=fromSearchWrapper.querySelector('.autocombox');
const fromAirportNameBox=document.querySelector('.fromairport');
const toSearchWrapper=document.querySelector('.tosearchinput');
const toInputBox=toSearchWrapper.querySelector('input');
const toSuggBox=toSearchWrapper.querySelector('.autocombox');
const toAirportNameBox=document.querySelector('.toairport');

fromInputBox.onkeyup=(e)=>{
    let userData=e.target.value;
    let emptyArray=[];
    if(userData)
    {
        emptyArray=cities.filter((data)=>{
            return data.toLowerCase().includes(userData.toLowerCase());
        });
        emptyArray=emptyArray.map((data)=>{
            return data='<li>'+ data +'</li>';
        });
        fromSearchWrapper.classList.add("active");
        fromshowSuggestions(emptyArray);
        let allList=fromSuggBox.querySelectorAll('li');
        for(let i=0;i<allList.length;i++)
        {
            allList[i].setAttribute('onclick','fromselect(this)');
        }
    }
    else{
        fromSearchWrapper.classList.remove("active");
    }
}

function fromselect(element){
    let selectData=element.textContent;
    fromInputBox.value=selectData.substring(0,selectData.indexOf(","));
    let index1=findairport(selectData);
    fromAirportNameBox.innerHTML=airports[index1];
    fromSearchWrapper.classList.remove("active");
}

function fromshowSuggestions(list){
    let listData;
    if(!list.length){
        userValue=fromInputBox.value;
        listData='<li>'+ userValue +'</li>';
    }
    else{
        listData=list.join('');
    }
    fromSuggBox.innerHTML=listData;
}

function findairport(cityname)
{
    let index1=cities.indexOf(cityname);
    return index1;
}



toInputBox.onkeyup=(e)=>{
    let userData=e.target.value;
    let emptyArray=[];
    if(userData)
    {
        emptyArray=cities.filter((data)=>{
            return data.toLowerCase().includes(userData.toLowerCase());
        });
        emptyArray=emptyArray.map((data)=>{
            return data='<li>'+ data +'</li>';
        });
        toSearchWrapper.classList.add("active");
        toshowSuggestions(emptyArray);
        let allList=toSuggBox.querySelectorAll('li');
        for(let i=0;i<allList.length;i++)
        {
            allList[i].setAttribute('onclick','toselect(this)');
        }
    }
    else{
        toSearchWrapper.classList.remove("active");
    }
}

function toselect(element){
    let selectData=element.textContent;
    toInputBox.value=selectData.substring(0,selectData.indexOf(","));
    let index1=findairport(selectData);
    toAirportNameBox.innerHTML=airports[index1];
    toSearchWrapper.classList.remove("active");
}

function toshowSuggestions(list){
    let listData;
    if(!list.length){
        userValue=toInputBox.value;
        listData='<li>'+ userValue +'</li>';
    }
    else{
        listData=list.join('');
    }
    toSuggBox.innerHTML=listData;
}

const swap=document.querySelector('.swapicon');
swap.onclick=function(){swapfromto()};  

function swapfromto(){
    tempcity=fromInputBox.value;
    let tempairport=fromAirportNameBox.innerHTML;
    fromInputBox.value=toInputBox.value;
    fromAirportNameBox.innerHTML=toAirportNameBox.innerHTML;
    toInputBox.value=tempcity;
    toAirportNameBox.innerHTML=tempairport;
}

const adultsbar=document.querySelector('.adultsbar');
function toggleadult(btn)
{
    var btnArray = adultsbar.getElementsByClassName('button');
    for(i = 0; i < btnArray.length; i++)
    {
        if(btn == btnArray[i])
        {
            //the button is the button which is clicked
            if(!btn.classList.contains("clicked"))
            {
                btn.classList.add("clicked");
            }
        }
        else
        {
          //remove class clicked, just reset the classname
            btnArray[i].className = "button";
        }
    }
}

function togglechildren(btn)
{
    var btnArray = childrenbar.getElementsByClassName('button');
    for(i = 0; i < btnArray.length; i++)
    {
        if(btn == btnArray[i])
        {
            //the button is the button which is clicked
            if(!btn.classList.contains("clicked"))
            {
                btn.classList.add("clicked");
            }
        }
        else
        {
          //remove class clicked, just reset the classname
            btnArray[i].className = "button";
        }
    }
}

function toggleinfant(btn)
{
    var btnArray = infantbar.getElementsByClassName('button');
    for(i = 0; i < btnArray.length; i++)
    {
        if(btn == btnArray[i])
        {
            //the button is the button which is clicked
            if(!btn.classList.contains("clicked"))
            {
                btn.classList.add("clicked");
            }
        }
        else
        {
          //remove class clicked, just reset the classname
            btnArray[i].className = "button";
        }
    }
}

function toggle1(btn)
{
    var btnArray = document.getElementsByClassName('choosetravelbutton');
    for(i = 0; i < btnArray.length; i++)
    {
        if(btn == btnArray[i])
        {
            //the button is the button which is clicked
            if(!btn.classList.contains("clicked"))
            {
                btn.classList.add("clicked");
            }
        }
        else
        {
          //remove class clicked, just reset the classname
            btnArray[i].className = "choosetravelbutton";
        }
    }
}

const traveldialog=document.querySelector('.dropdown');
const tra=traveldialog.querySelector('.dropdown-content');
function onclicktraveldialog(event)
{
    let text=event.target.className;
    if(text!="applybutton")
    {
        if(!(tra.classList.contains("active1")))
        {
            tra.classList.add("active1");
        }
    }
}
const travelclasslabel=document.querySelector('.travelclass');
const travellerlabel=document.querySelector('.traveller');
const numpersons=document.querySelector('.numpersons');
const childrenbar=document.querySelector('.childrenbar');
const infantbar=document.querySelector('.infantbar');
const travelbar=document.querySelector('.travelclassbar');
var numadults=1;
var numchildren=0;
var numinfants=0;

function apply(btn)
{
numadults=(adultsbar.querySelector('.button.clicked')).innerHTML;
numchildren=(childrenbar.querySelector('.button.clicked')).innerHTML;
numinfants=(infantbar.querySelector('.button.clicked')).innerHTML;
const travelclass=(travelbar.querySelector('.choosetravelbutton.clicked')).innerHTML;
var totaltravellers=parseInt(numadults)+parseInt(numchildren)+parseInt(numinfants);
    
    if(totaltravellers>1)
    {
        travellerlabel.innerHTML="Travellers";
    }
    else
    {
        travellerlabel.innerHTML="Traveller";
    }
    numpersons.innerHTML=totaltravellers;
    travelclasslabel.innerHTML=travelclass;
    tra.classList.remove("active1");
}
const cards=document.querySelector('.cards');

function turnblueoffer(divelement)
{   
    const hrhr=document.querySelector('.bar2');
    var divArray = hrhr.querySelectorAll('.offer');

    for(i = 0; i < divArray.length; i++)
    {
        if((divArray[i].classList).contains("active1"))
        {
            divArray[i].classList.remove("active1");
        }
    }
    for(i = 0; i < divArray.length; i++)
    {
        if(divArray[i]==divelement)
        {
            divArray[i].classList.add("active1");
        }
    }

    var allcardcontent=cards.getElementsByClassName('card-content');   
    var offersneeded=cards.getElementsByClassName((divelement.className).substring(0,(divelement.className).indexOf(" ")));
    for(i=0;i<allcardcontent.length;i++)
    {
        if(allcardcontent[i].classList.contains("active1"))
        {
            allcardcontent[i].classList.remove("active1");
        }
    }
    if(divelement.classList.contains("alloffers"))
    {
        for(i=0;i<allcardcontent.length;i++)
        {
            allcardcontent[i].classList.add("active1");
        }
    }
    else
    {
        for(i=0;i<offersneeded.length;i++)
        {
            if(offersneeded[i].classList.contains("active1"))
            {
                offersneeded[i].classList.remove("active1");
            }
        }
        for(i=0;i<offersneeded.length;i++)
        {
            offersneeded[i].classList.add("active1");
        }
    }
}

function turnblueswline0element(divelement)
{
    var divArray = document.getElementsByClassName('swline0element');
    for(i = 0; i < divArray.length; i++)
    {
        if(divArray[i].classList.contains("active1"))
        {
            divArray[i].classList.remove("active1");
        }
    }
    divelement.classList.add("active1");
}

const buttonLeft=document.getElementById('goleft');
const buttonRight=document.getElementById('goright');

function sideScroll(direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            cards.scrollLeft -= step;
        } else {
            cards.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

function searchbutton_function()
{
    var fromcode=(fromAirportNameBox.innerHTML).substring(((fromAirportNameBox.innerHTML).length)-3,((fromAirportNameBox.innerHTML).length));
    var tocode=(toAirportNameBox.innerHTML).substring(((toAirportNameBox.innerHTML).length)-3,((toAirportNameBox.innerHTML).length));
    const depdate=document.querySelector('#picker1');
    const tripTypeouter=document.querySelector('.tripmode');
    const tripTypeinner=tripTypeouter.getElementsByTagName('input');
    var tripType;
    for (i = 0; i < tripTypeinner.length; i++) 
    {
        if(tripTypeinner[i].checked)
        {
            tripType=tripTypeinner[i].value;
            break;
        }
    }
    var cabinClass;
    var cabinclassouter=document.querySelector('.travelclassbar');
    cabinClass=(cabinclassouter.querySelector('.choosetravelbutton.clicked')).value;
    console.log(numadults);
    console.log(numchildren);
    console.log(numinfants);
    var webaddress="https://www.makemytrip.com/flight/search?tripType="+tripType+"&itinerary="+fromcode+"-"+tocode+"-"+depdate.value+"&paxType=A-"+numadults+"_C-"+numchildren+"_I-"+numinfants+"&cabinClass="+cabinClass+"&sTime=1690174000179&forwardFlowRequired=true&isGrpBkg=false&mpo=&semType=&intl=false";
    window.open(webaddress);
}