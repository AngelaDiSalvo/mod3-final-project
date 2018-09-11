document.addEventListener('DOMContentLoaded', function() {
  fetch('https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=coffee&location=houston', {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${yelpApiKey}`
    }
  })
    .then(res => res.json())
    .then(ratingGreaterThanThree)

function  ratingGreaterThanThree(data){
  const highRatings = data.businesses.filter(business => {
    return business.rating > 3
  })
  mapTheCoordinates(highRatings)
}

function mapTheCoordinates(highRatings) {
  const coordinatesArray = highRatings.map(business => {
    return business.coordinates
  })
  debugger
}










})
