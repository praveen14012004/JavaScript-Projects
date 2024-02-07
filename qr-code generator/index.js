// let imgbox=document.getElementById("imgbox");
let qrimg=document.getElementById("qrimg");
let qrtext=document.getElementById("qrtext");


function generateqr(){
setTimeout(() => {
 qrimg.src ="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
 
 
    document.getElementById("d-btn").style.display = 'block'
  }, 1000);
}

function downloadQR() {
    const imageSrc = qrimg.src;
    downloadImage(imageSrc);
}
async function downloadImage(imageSrc) {
    const image = await fetch(imageSrc);
    const imageBlob = await image.blob();
    const imageURL = URL.createObjectURL(imageBlob);

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = 'qr_code.png'; // You can set the file name here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    Event.preventDefault();
}
// function downloadQR() {
//     const imageSrc = qrimg.src;
//     downloadImage(imageSrc);
// }

// async function downloadImage(imageSrc) {
//     const image = await fetch(imageSrc);
//     const imageBlob = await image.blob();
//     const imageURL = URL.createObjectURL(imageBlob);

//     const link = document.createElement('a');
//     link.href = imageURL;
//     link.download = 'qr_code.png'; // You can set the file name here
    
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
// }
