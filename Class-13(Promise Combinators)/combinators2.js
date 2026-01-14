// Any and Race

function fetchFromOpenWeather() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("no data"), 1000)
  );
}

function fetchFromWeatherAPI() {
  return new Promise((resolve, reject) =>
    setTimeout(() => resolve("20 c in blr"), 700)
  );
}

function fetchFromAccuWeather() {
  return new Promise((resolve, reject) =>
    setTimeout(() => reject("no data"), 1200)
  );
}

// Promise.race([
//   fetchFromOpenWeather(),
//   fetchFromWeatherAPI(),// failing
//   fetchFromAccuWeather(),
// ]).then(function(results){
//     console.log(results)
// });



Promise.any([
    fetchFromOpenWeather(),
    fetchFromWeatherAPI(),// failing
    fetchFromAccuWeather(),
  ]).then(function(results){
      console.log(results)
  }).catch(function(err){
    console.log(err)
  });


