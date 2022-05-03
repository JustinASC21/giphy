
$(".search-button").click(function() {
$(".gifImgHolder").empty();
let userQuery = $(".search-term").val();
let apiURL = `https://api.giphy.com/v1/gifs/search?q=${userQuery}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

  fetch(apiURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let numGifs = $(".numItems").val();
    if (numGifs != null || numGifs != "") {
        for (let i = numGifs; i > 0; i--) {
          generateGIF(json);
        }
    }
    else {
      generateGIF(json);
    }
    console.log(json);
  })
  

});

function generateGIF(json) {
  let randomInd = Math.floor(Math.random() * 50);
    // let imgURL = json
    // let gifImgObj = document.createElement("img");
    // gifImgObj.attr("class","gifImg");
    let gifURL = json.data[randomInd].images.original.url;
    // gifImgObj.attr("src",gifURL);
    // gifImgObj.css("display","block");
$(".gifImgHolder").append($(`<img src = ${gifURL} class = "gifImg">`));
}