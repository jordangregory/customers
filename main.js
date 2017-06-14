// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element
var dataDisplay = document.querySelector(".customers");

function getRandom() {
  fetch("https://randomuser.me/api/?results=12")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var people = data.results;
      console.log(people);
      for (var i = 0; i < people.length; i++) {
        createPerson(people[i]);
      }
    });
}
getRandom();

function createPerson(personConfig) {
  var profile = document.createElement("div");
  profile.classList.add("profile");
  dataDisplay.appendChild(profile);

  var profilePic = document.createElement("div");
  profilePic.classList.add("profilePic");
  profilePic.style.background =
    "url(" + personConfig.picture.large + ") no-repeat center center";
  profilePic.style.backgroundSize = "cover";
  profile.appendChild(profilePic);
  // console.log("profile: ", profile);

  var name = document.createElement("div");
  name.classList.add("profileName");
  name.textContent = personConfig.name.first + " " + personConfig.name.last;
  profile.appendChild(name);
  // console.log("profile: ", profile);

  var email = document.createElement("div");
  email.classList.add("emailAddress");
  email.textContent = personConfig.email;
  profile.appendChild(email);

  var street = document.createElement("div");
  street.classList.add("streetAddress");
  street.textContent = personConfig.location.street;
  profile.appendChild(street);

  var cityStateZip = document.createElement("div");
  cityStateZip.classList.add("cityStateZip");
  cityStateZip.textContent =
    personConfig.location.city +
    " " +
    personConfig.location.state +
    " " +
    personConfig.location.postcode;
  profile.appendChild(cityStateZip);
  // console.log("profile", profile);

  var phoneNum = document.createElement("div");
  phoneNum.classList.add("phoneNumber");
  phoneNum.textContent = personConfig.phone;
  profile.appendChild(phoneNum);
}
