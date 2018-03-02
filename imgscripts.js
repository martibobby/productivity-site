function enlargeImg(picnum) {
    var bigImgHTML = document.getElementById("largeimg");
    bigImgHTML.innerHTML = "";
    this.picnm = picnum;
    var pic = document.createElement("IMG");
    pic.src = "images/" + picnum;
    console.log(pic.src);

    bigImgHTML.appendChild(pic);
    console.log(picnum);
}