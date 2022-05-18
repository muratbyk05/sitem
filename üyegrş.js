function üye(){
    let ad,yaş,cinsiyet,sonuc

    ad=document.getElementById("ad").value
    yaş=document.getElementById("yas").value
    cinsiyet=document.getElementById("cinsiyet").value
    sonuc=document.getElementById("sonuç")
     
    if(yaş>=18){
         
         alert("HOŞGELDİNİZ")
          
    }
   else{
          
          alert("YORUM YAZABİLMEK İÇİN +18 OLMANIZ GEREKMEKTEDİR")
   }
}