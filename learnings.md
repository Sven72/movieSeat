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

#Spread Operator (...) -> Gibt einen Array wieder:
arr1 = [1, 2, 3];
arr2 = [...arr1, 4, 5];

#map vs forEach:
Ersteres wendet eine Funktion auf jedes Element eines Array an und gibt ein entsprechendes Array wieder. Letzteres ist wie eine for-Schleife.

#localStorage : Übernimmmt ein Key-Value Paar. In diesem Fall muss der Array in einen String verwandelt werden. Deswegen JSON.stringify.

Entsprechend gibt es eine getItem Fuktion;
