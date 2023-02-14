//your code here
fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    // Extract necessary information from data
    const fullName = `${data.results[0].name.first} ${data.results[0].name.last}`;
    const imageURL = data.results[0].picture.large;
    const age = data.results[0].dob.age;
    const email = data.results[0].email;
    const phone = data.results[0].phone;

    // Display full name and image on page
    document.getElementById('name').innerHTML = fullName;
    document.getElementById('image').src = imageURL;

    // Add event listeners to buttons
    document.getElementById('ageBtn').addEventListener('click', function() {
      document.getElementById('additionalInfo').innerHTML = age;
    });
    document.getElementById('emailBtn').addEventListener('click', function() {
      document.getElementById('additionalInfo').innerHTML = email;
    });
    document.getElementById('phoneBtn').addEventListener('click', function() {
      document.getElementById('additionalInfo').innerHTML = phone;
    });

    // Add event listener to "Get New User" button
    document.getElementById('getUser').addEventListener('click', function() {
      fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
          // Extract necessary information from new data and update page
          const newFullName = `${data.results[0].name.first} ${data.results[0].name.last}`;
          const newImageURL = data.results[0].picture.large;
          const newAge = data.results[0].dob.age;
          const newEmail = data.results[0].email;
          const newPhone = data.results[0].phone;

          document.getElementById('name').innerHTML = newFullName;
          document.getElementById('image').src = newImageURL;
        });
    });
  });
