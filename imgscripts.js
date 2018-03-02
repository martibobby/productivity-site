function enlargeImg(picnum) {
    var bigImgHTML = document.getElementById("largeimg");
    this.picnm = picnum;
    var pic = document.createElement("IMG");
    pic.src = "images/" + picnum;
    console.log(pic.src);

    bigImgHTML.innerHTML = pic;
    console.log(picnum);
}