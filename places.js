function showPlaces(state){

let placesData = {

"Andhra Pradesh":[
"Araku Valley","Borra Caves","Tirupati","Lambasingi"
],

"Arunachal Pradesh":[
"Tawang Monastery","Ziro Valley","Sela Pass","Namdapha National Park"
],

"Assam":[
"Kaziranga National Park","Majuli Island","Kamakhya Temple","Manas National Park"
],

"Bihar":[
"Bodh Gaya","Nalanda University Ruins","Rajgir","Vaishali"
],

"Chhattisgarh":[
"Chitrakote Falls","Tirathgarh Falls","Kanger Valley National Park","Barnawapara Wildlife Sanctuary"
],

"Goa":[
"Baga Beach","Calangute Beach","Dudhsagar Falls","Fort Aguada"
],

"Gujarat":[
"Statue of Unity","Rann of Kutch","Somnath Temple","Gir National Park"
],

"Haryana":[
"Sultanpur Bird Sanctuary","Kurukshetra","Damdama Lake","Morni Hills"
],

"Himachal Pradesh":[
"Manali","Shimla","Spiti Valley","Dharamshala"
],

"Jharkhand":[
"Betla National Park","Hundru Falls","Netarhat","Patratu Valley"
],

"Karnataka":[
"Coorg","Hampi","Mysore Palace","Gokarna"
],

"Kerala":[
"Munnar","Alleppey","Wayanad","Kochi"
],

"Madhya Pradesh":[
"Khajuraho Temples","Kanha National Park","Pachmarhi","Sanchi Stupa"
],

"Maharashtra":[
"Ajanta Caves","Ellora Caves","Lonavala","Mahabaleshwar"
],

"Manipur":[
"Loktak Lake","Kangla Fort","Keibul Lamjao National Park","Ukhrul"
],

"Meghalaya":[
"Shillong","Cherrapunji","Dawki River","Living Root Bridges"
],

"Mizoram":[
"Aizawl","Reiek Tlang","Vantawng Falls","Dampa Tiger Reserve"
],

"Nagaland":[
"Kohima","Dzukou Valley","Khonoma Village","Japfu Peak"
],

"Odisha":[
"Konark Sun Temple","Puri Beach","Chilika Lake","Simlipal National Park"
],

"Punjab":[
"Golden Temple","Jallianwala Bagh","Wagah Border","Anandpur Sahib"
],

"Rajasthan":[
"Jaipur","Udaipur","Jaisalmer","Pushkar"
],

"Sikkim":[
"Gangtok","Tsomgo Lake","Nathula Pass","Yumthang Valley"
],

"Tamil Nadu":[
"Ooty","Kodaikanal","Meenakshi Temple","Mahabalipuram"
],

"Telangana":[
"Charminar","Golconda Fort","Ramoji Film City","Hussain Sagar"
],

"Tripura":[
"Ujjayanta Palace","Neermahal","Unakoti","Sepahijala Wildlife Sanctuary"
],

"Uttar Pradesh":[
"Taj Mahal","Varanasi Ghats","Agra Fort","Fatehpur Sikri"
],

"Uttarakhand":[
"Rishikesh","Haridwar","Nainital","Valley of Flowers"
],

"West Bengal":[
"Darjeeling","Sundarbans","Victoria Memorial","Kalimpong"
]

};

let container = document.getElementById("places-container");

container.innerHTML="";

let places = placesData[state];

places.forEach(place =>{

let card = document.createElement("div");

card.classList.add("place-card");

card.innerHTML = `<h3>${place}</h3>`;

card.onclick = function(){
localStorage.setItem("selectedPlace", place);
window.location.href = "place.html";
};

container.appendChild(card);

});

}