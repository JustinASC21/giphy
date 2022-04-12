
$(".search-button").click(function() {
let userQuery = $(".search-term").val();
let apiURL = `https://api.giphy.com/v1/gifs/search?q=${userQuery}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;

  fetch(apiURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(json) {
    let randomInd = Math.floor(Math.random() * 50);
    // let imgURL = json
    let gifURL = json.data[randomInd].images.original.url;
    $(".gifImg").attr("src",gifURL);
    $(".gifImg").css("display","block");
    console.log(json);
  })
  

});