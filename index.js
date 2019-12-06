function getDogImages(query) {
  fetch(`https://dog.ceo/api/breeds/image/random/${query}`)
    .then(response => response.json()) //converts response into JSON
    .then(responseJson => responseJson) // returning JSON Response
    .then(responseJson => displayDogSearchData(responseJson)) //passing the json data to displaysearch function
    .catch(error => alert("Something went wrong. Try again later."));
}

function displayResults(responseJson) {
  return `
   <div>
     <br/>
     <img src="${responseJson}" class="results-img">
   </div> 
   `; //returns each item mapped by function below
}

function displayDogSearchData(image) {
  const results = image.message.map(item => displayResults(item)); //maps through getdogimages messages

  $(".js-results").html(results);

  $(".results").removeClass("hidden");
}

function listenToInput() {
  $(".js-search-form").submit(event => {
    event.preventDefault();
    const query = $(".js-query").val(); //stores value.
    if (query > 50) {
      return $(".js-results").html(
        `<h1>Error: The max results are 50. Please try any number between 1-50.`
      );
    }
    getDogImages(query);
  });
}

$(function() {
  listenToInput();
});
