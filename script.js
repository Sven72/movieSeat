const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value;

let setMovieData = (movieIndex, moviePrice) => {
  localStorage.setItem("selectMovieIndex", movieIndex);
  localStorage.setItem("selectedMoviePrice", moviePrice);
};

let updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
  // console.log([...seats].indexOf(seat));

  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
};

let populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));

  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  let selectedMovieIndex = localStorage.getItem("selectedMovieIndex");
  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
};

populateUI();

movieSelect.addEventListener("change", e => {
  ticketPrice = +e.target.value;
  updateSelectedCount();

  setMovieData(e.target.selectedIndex, e.target.value);
});

container.addEventListener("click", e => {
  e.target.classList.contains("seat") &&
  !e.target.classList.contains("occupied")
    ? e.target.classList.toggle("selected")
    : console.log("hi from occupied");

  updateSelectedCount();
  //   upateMoviePrice();
});

updateSelectedCount();
