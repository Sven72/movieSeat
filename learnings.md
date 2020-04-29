#das Appearance Property
#border-top-left-radius: 10px;

# The same:

.seat:nth-of-type(7) {
margin-left: 18px;
}
.seat:nth-last-of-type(2) {
margin-left: 18px;
}

#Pseudo Element "not"
.seat:not(.occupied):hover {
cursor: pointer;
transform: scale(1.2);
}

.showcase.seat:not(.occupied):hover {
cursor: default;
transform: unset;
}

#perspective propterty

#JS -> String in Nummer verwandeln: Einfach nur mit Pluszeichen
const ticketPrice = +movieSelect.value;

#EventListener in Selectbox

- 'change'
