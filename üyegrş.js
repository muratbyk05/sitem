function üye(){
    let ad,yaş,cinsiyet,sonuc,şifre

    ad=document.getElementById("ad").value
    yaş=document.getElementById("yas").value
    cinsiyet=document.getElementById("cinsiyet").value
    şifre=document.getElementById("Şifre").value
    sonuc=document.getElementById("sonuç")
     
    if(yaş>=18){
         
         alert("HOŞGELDİNİZ")
          
    }
   else{
          
          alert("YORUM YAZABİLMEK İÇİN +18 OLMANIZ GEREKMEKTEDİR")
   }
}
