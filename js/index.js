var bannerText1=["Free Shipping & 60-Day Free Returns","Nike Statement on COVID-19","Up to 40% off"];

var bannerText2=["Join Now","View here","Shop Our Latest Sale Style"];

var bannerLink=["https://www.nike.com/membership","https://www.nike.com/covid-19-response","https://www.nike.com/w/sale-3yaep"];

var bannerBg=["rgb(207,61,99)","rgb(207,93,100)","rgb(207,150,150)"]

var textOrder=0;

var displayRepeat = setInterval(bannerDisplay,3000);
// setTimeout(bannerDisplay,2000);


function bannerDisplay(){
   document.getElementById("banner_text_1").innerHTML=bannerText1[textOrder];
   document.getElementById("banner_text_2").innerHTML=bannerText2[textOrder];
   document.getElementById("banner_text_2").href=bannerLink[textOrder];
   document.getElementById("alert_banner").style="background:"+bannerBg[textOrder];

   textOrder=textOrder+1;
   if(textOrder==3){
       textOrder=0
    // clearInterval(displayRepeat);
    }
}


