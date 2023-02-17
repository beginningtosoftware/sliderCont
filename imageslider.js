

let body = document.getElementsByTagName("body")[0];

//Project
let div = document.createElement("div");
// appending the above div to body ---- you could append above any other cont if your like
body.appendChild(div);
//making sure there is no overfloww;
body.style.overflowX = "hidden";
//assuming client has provided image links -- change here links to your image links
let imgArr = [
 "https://www.thewowstyle.com/wp-content/uploads/2015/01/nature-images.jpg",
 "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
  "https://www.pixelstalk.net/wp-content/uploads/2016/08/Nature-wallpapers-Full-HD-backgroud.jpg",
  "https://www.gatefans.net/gforums/attachments/200px-square_200x200-svg-png.29387/",
  "https://i.pinimg.com/236x/03/1d/22/031d2248c04aa4f319c87be318cc2317.jpg?nii=t"
];

let dotArr = [];
let imgCont = [];


(() => {
    let radioDiv = document.createElement("div");
    for(let i = 0; i < imgArr.length; i++){
        //Create image cont
        let imgDiv = document.createElement("div");
        imgDiv.className = "img-cont";

        //img tag
        let img = document.createElement("img");

        //link img src
        img.src = imgArr[i];
        //element for dot/radio
        let dot = document.createElement("input");
        dot.type = "radio";
        dot.name = "image-dot";
        dotArr.push(dot);

        //append all elements
        imgDiv.appendChild(img);
        radioDiv.appendChild(dot);
        div.appendChild(imgDiv);
        div.appendChild(radioDiv);

        //img cont css
        imgDiv.style.width = "100vw";

        //div css
        div.style.position = "relative";
        div.style.height = "80vh";

        //image css
        img.style.width = "80vw";
        img.style.height = "40vh";
        img.style.position = "absolute";
        img.style.zIndex = i  + 1;
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";

        imgCont.push(img);
        
    }
    //radio cont css 
    radioDiv.style.position = "absolute";
    radioDiv.style.top = "80%";
    radioDiv.style.zIndex = dotArr.length + 2;
    radioDiv.style.width = "100vw";
    radioDiv.style.display = "flex";
    radioDiv.style.justifyContent = "center";

   
})();

for(let i = 0; i < dotArr.length; i++){
    dotArr[i].addEventListener("click", () => {  
                            
        if((dotArr[i].checked)){
            
            imgCont[i].style.zIndex = imgCont.length + 1;
            //after change imgCont[i] z-index, changing other img cont z-index to zero
            imgCont.filter((ele, j) => {
                if ( j !== i){
                    imgCont[j].style.zIndex = 0;
                  
                }
            })
        }
    })
}