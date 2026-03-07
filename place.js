let place = localStorage.getItem("selectedPlace");

let data = placeData[place];

if(data){

document.getElementById("place-name").innerText = place;

document.getElementById("place-image").src = data.image;

document.getElementById("place-description").innerText = data.description;

document.getElementById("place-location").innerText = data.location;

document.getElementById("place-budget").innerText = data.budget;

let hotels = document.getElementById("place-hotels");

data.hotels.forEach(hotel=>{
let li=document.createElement("li");
li.innerText=hotel;
hotels.appendChild(li);
});

let food = document.getElementById("place-food");

data.food.forEach(foodItem=>{
let li=document.createElement("li");
li.innerText=foodItem;
food.appendChild(li);
});

}
// open feedback form

document.getElementById("feedbackBtn").onclick=function(){

document.getElementById("feedbackForm").style.display="block"

}


// submit feedback

function submitFeedback(){

let name=document.getElementById("name").value
let rating=document.getElementById("rating").value
let comment=document.getElementById("comment").value

if(name=="" || rating=="" || comment==""){
alert("Please fill all details")
return
}

let newComment=document.createElement("div")
newComment.classList.add("comment-box")

newComment.innerHTML=
"<strong>"+name+"</strong><br>"+
"Rating: "+rating+" ⭐<br>"+
"<p>"+comment+"</p>"

document.getElementById("commentsContainer").appendChild(newComment)

document.getElementById("name").value=""
document.getElementById("rating").value=""
document.getElementById("comment").value=""

alert("Feedback submitted successfully!")

}