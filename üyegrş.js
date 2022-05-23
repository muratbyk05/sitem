function üye(){
    let ad,yaş,cinsiyet,sonuc,şifre

    ad=document.getElementById("adı")
    yaş=document.getElementById("yas")
    cinsiyet=document.getElementById("cinsiyet")
    şifre=document.getElementById("Şifre")
    sonuc=document.getElementById("sonuç")
     ad.remove();
    if(yaş>=18){
         
         alert("HOŞGELDİNİZ")
          
    }
   else{
          
          alert("YORUM YAZABİLMEK İÇİN +18 OLMANIZ GEREKMEKTEDİR")
   }
}


