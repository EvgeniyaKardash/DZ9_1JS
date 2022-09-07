

let galery = [
    {file:"red.jpg",
    w: 300,
    title:"Костел", 
    link: "https://msj.by/katolicheskie-xramy/krasnyj-kostel-v-minske/",
    description: "В храме святого Симеона и святой Елены находится полномасштабная копия Туринской Плащаницы.",},
           
    {file:"troi.jpg",
    w: 300,
    title:"Троицкое",
    link: "https://www.belarus.by/ru/travel/belarus-life/trinity-suburb",
    description:"Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь.",},

    {file:"mir.jpg",
    w: 300,
    title:"Мир",
    link: "https://mirzamak.by/",
    description:"Троицкое предместье — исторический район города Минска, расположенный в северо-восточной части исторического центра на левом берегу реки Свислочь.", }
]

     let res1="";
      for (i=0; i<galery.length; i++) {
          res1+=`<div><img style="width:300px" class="class1" onclick="showCard(${i})" src="images/${galery[i]["file"]}">` ;
          res1+= `<p style="text-align:center">${galery[i]["title"]}</p></div>`;
          
      }

      pictureHere.innerHTML = res1;

            let res2="";
            res2 +=`<img id="id1" src="" style="width:1000px" onclick="closeCard()"><p id="myText"></p>`;

            bigPicture.innerHTML = res2;

            function showCard(index) {
                let f1 = document.getElementById('bigPicture');
                let bigCard1  = f1.getElementsByTagName("img");
                let text = f1.getElementsByTagName("p");
          
                bigCard1[0].src = `images/${galery[index]['file']}`;
                bigCard1[0].style.display = "block";
                
                text[0].innerHTML = `${galery[index]['description']}`;
                text[0].style=`text-align:center`;
               
            }

                    function closeCard() {
                        let f2 = document.getElementById('bigPicture');
                        let bigCardOff= f2.getElementsByTagName("img");
                        let textOff = f2.getElementsByTagName("p");

                        bigCardOff[0].style.display = "none";
                        textOff[0].style.display = "none";
                       
                    }
       


      

      
       
      


      
