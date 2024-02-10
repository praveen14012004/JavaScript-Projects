// const accseskey = "wpJtOxQALe0mkfzvQCV8_lMHeMvVdF-yGRDy0GUAdYs";
// const form1 =document.querySelector("form") ;
// const input1 = document.getElementById("myInput");
// const showresults = document.querySelector(".results");
// const showMore = document.getElementById("show-more");

// let inputData = "";
// let page = 1;

// async function searchimage(){
//     inputData = input1.value; 
//     const url = `https://api.unsplash.com/search/photos?page=${page}&query=$(inputData)&client_id=$(accessKey}`
//     const resposone = await  fetch(url);
//     const data = await  resposone.json();
//     const results = data.results;
//     if(page===1){
//         showresults.innerHTML= "";

//     }
//     results.map((result)=>{
//     const Imagewarapper = document.createElement("div");
//     Imagewarapper.classList.add("img-result");
//     const image = document.createElement("img");
//     img.src = result.url.small;
//     img.alt = result.alt_description;
//      Imagewarapper.appendChild(image);
//      Imagewarapper.appendChild(imageLink);
//      showresults.appendChild(Imagewarapper);

// });
// page++;
// if(page>1){
//     showMore.style.display="block";
// }
// }
// form1.addEventListener("submit",(event)=>{
//     event.preventDefault();
//     page=1;
//     searchimage();
// })

// showMore.addEventListener("click",()=>{
//     searchimage();
// });



const accessKey = "wpJtOxQALe0mkfzvQCV8_lMHeMvVdF-yGRDy0GUAdYs";
const form1 = document.querySelector("form");
const input1 = document.getElementById("myInput");
const showresults = document.querySelector(".results");
const showMore = document.getElementById("show-more");

let inputData = "";
let page = 1;

async function searchimage() {
    inputData = input1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page === 1) {
        showresults.innerHTML = "";
    }
    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("img-result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        imageWrapper.appendChild(image);
        showresults.appendChild(imageWrapper);
    });
    page++;
    if (page > 1) {
        showMore.style.display = "block";
    }
}

form1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchimage();
});

showMore.addEventListener("click", () => {
    searchimage();
});

















