const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');

const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

let updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');

    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
}

movieSelect.addEventListener('change', (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
})


container.addEventListener('click', (e) => {
    e.target.classList.contains('seat') && !e.target.classList.contains('occupied') ? e.target.classList.toggle('selected') : console.log("hi from occupied");

    updateSelectedCount();
    upateMoviePrice();

})