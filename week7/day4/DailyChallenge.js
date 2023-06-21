const planets = [
    { name: "Mercury", color: "gray" },
    { name: "Venus", color: "yellow" },
    { name: "Earth", color: "blue" },
    { name: "Mars", color: "red" },
    { name: "Jupiter", color: "orange" },
    { name: "Saturn", color: "yellow" },
    { name: "Uranus", color: "blue" },
    { name: "Neptune", color: "blue" }
  ];
  const moons = [
    { name: "Moon", color: "#808080" },
    { name: "Phobos", color: "#737373" },
    { name: "Deimos", color: "#6E6E6E" },
    { name: "Io", color: "#FFDC48" },
    { name: "Europa", color: "#F0F4FD" },
    { name: "Ganymede", color: "#949494" },
    { name: "Callisto", color: "#888888" },
    { name: "Mimas", color: "#AFAFAF" },
    { name: "Enceladus", color: "#FFFFFF" },
    { name: "Tethys", color: "#F7F7F7" },
    { name: "Dione", color: "#E4E4E4" },
    { name: "Rhea", color: "#DBDBDB" },
    { name: "Titan", color: "#FF9900" },
    { name: "Hyperion", color: "#BEBEBE" },
    { name: "Iapetus", color: "#777777" },
    { name: "Miranda", color: "#9F9F9F" },
    { name: "Ariel", color: "#7D7D7D" },
    { name: "Umbriel", color: "#8D8D8D" },
    { name: "Titania", color: "#6B6B6B" },
    { name: "Oberon", color: "#606060" },
    { name: "Triton", color: "#FF6CB9" },
    { name: "Nereid", color: "#939393" },
    { name: "Charon", color: "#828282" },
  ];
  
const section = document.querySelector('.listPlanets')
for (let i = 0; i < planets.length; i++) {
    let div = document.createElement('div')
    div.classList.add('planet')
    div.setAttribute('style',`background:${planets[i].color}`)
    div.innerText = planets[i].name
    section.appendChild(div)
}
for (let i = 0; i < moons.length; i++) {
    let div = document.createElement('div')
    div.classList.add('moon')
    div.setAttribute('style',`background:${moons[i].color}`)
    div.innerText = moons[i].name
    section.appendChild(div)
}