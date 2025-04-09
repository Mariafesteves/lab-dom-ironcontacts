// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.
const threeContacts = contacts.splice(0, 3);
// Loop through the array and create a row for each contact.

threeContacts.forEach((contact) => {
const row = document.createElement("tr");
row.innerHTML = `
  <td>
    <img src="${contact.pictureUrl}" />
  </td>
  <td> ${contact.name} </td>
  <td> ${contact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(row);

const deleteButton= row.querySelector(".btn-delete");
deleteButton.addEventListener("click", () => {
  console.log("Delete button clicked");
  row.remove();
})

const likeButton = row.querySelector(".btn-like")
likeButton.addEventListener("click", () =>{
  console.log("Like button clicked");
  row.classList.toggle("btn-like.selected");
    
  })

})

// Your code goes here ...

const addRandomContact = () => {
  const randomIndex = Math.floor(Math.random() * contacts.length);
  const contact = contacts[randomIndex];

  const randomRow = document.createElement("tr");
  randomRow.innerHTML = `
    <td>
      <img src="${contact.pictureUrl}" />
    </td>
    <td> ${contact.name} </td>
    <td> ${contact.popularity.toFixed(2)} </td>
    <td>
      <button class="btn-delete">Delete</button>
    </td>
    <td>
      <button class="btn-like">
        <img src="./images/icon.png" alt="like" />
      </button>
    </td>
  `;
  tableBody.appendChild(randomRow);

  const addRandomBtn = document.getElementById("btn-add-random");
  addRandomBtn.addEventListener("click", () => {
    console.log("Add random contact button clicked");
    addRandomContact();
  });

  const deleteButton = randomRow.querySelector(".btn-delete");
  deleteButton.addEventListener("click", () => {
    console.log("Delete button clicked");
    randomRow.remove();
  });
  const likeButton = randomRow.querySelector(".btn-like");
  likeButton.addEventListener("click", () => {
    console.log("Like button clicked");
    randomRow.classList.toggle("btn-like.selected");
  });
}
