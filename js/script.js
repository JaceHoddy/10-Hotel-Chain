const hb = document.querySelector("#hamburgerBtn");
const pw = document.querySelector("#pageWrapper");

hb.addEventListener("click", () => {
  pw.classList.toggle("moveOver");
});

import { hotels } from "./hotels.js";

const cardContainer = document.querySelector("#cards");

hotels.forEach((hotel) => {
  // Create card container
  const card = document.createElement("section");
  card.className = "hotel-card";

  // Create image container
  const imageContainer = document.createElement("div");
  imageContainer.className = "hotel-image";

  if (hotel.image) {
    const img = document.createElement("img");
    img.className = "image"
    img.src = hotel.image;
    img.alt = hotel.name;
    imageContainer.appendChild(img);
  } else {
    const noImage = document.createElement("div");
    noImage.className = "no-image";
    noImage.textContent = "No Image Available";
    imageContainer.appendChild(noImage);
  }

  const nameElement = document.createElement("h2");
  nameElement.textContent = hotel.name;


  const streetAddress = document.createElement("p");
  streetAddress.className = 'hotel-address'
  streetAddress.innerHTML = `${hotel.address[0]}<br>${hotel.address[1]}`;

  const phoneElement = document.createElement("p");
  phoneElement.className = "hotel-phone";
  phoneElement.textContent = `Phone: ${hotel.phone}`;

  card.appendChild(nameElement);
  card.appendChild(streetAddress)
  card.appendChild(phoneElement);

  card.appendChild(imageContainer);

  cardContainer.appendChild(card);
});

