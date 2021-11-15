const lesHazard = ["Francesca", "Baptiste", "Julien", "Emilie", "Arnaud", "Paul", "Mohamad"];
const btn = document.querySelector(".clickMe");
let nameContainer = document.querySelector(".name");

btn.addEventListener("click", function (e) {
    const random = Math.floor(Math.random() * lesHazard.length);
    const leHasard = lesHazard[random];
    nameContainer.classList.remove("d-none");
    nameContainer.innerText = leHasard;
    console.log(leHasard);
});
