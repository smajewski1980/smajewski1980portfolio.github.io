const descTitle = document.querySelector(".desc-title");
const desc = document.querySelector(".desc");
const cards = Array.from(document.getElementsByClassName("card"));
const spotlight = document.querySelector(".spotlight");
const descriptionTitle = document.querySelector(".desc-title");
const description = document.querySelector(".desc");
let infoVisible = false;
let infoTimeout;
const descriptions = [
  {
    title: "Cleaning Shellac 78s",
    desc: "description 1 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "My Music Catalog v1",
    desc: "description 2 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "My Music Catalog v2",
    desc: "description 3 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "New York State Assembly Home Page",
    desc: "description 4 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "Assembly Sound Off(the floor)",
    desc: "description 5 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "Empire State Aerosciences Museum Visit Page",
    desc: "description 6 - when this is a completed page, there will be this much text or less in this section",
  },
  {
    title: "Bookmark Landing Page",
    desc: "description 7 - when this is a completed page, there will be this much text or less in this section",
  },
];

function showDescription() {
  if (infoTimeout) {
    clearInterval(infoTimeout);
  }
  spotlight.style.filter = "blur(35px) brightness(0.5)";
  const thisCard = this.dataset.card;
  const thisDesc = descriptions[parseInt(thisCard) - 1];
  descTitle.textContent = thisDesc.title;
  desc.textContent = thisDesc.desc;
  if (!infoVisible) {
    descTitle.classList.toggle("show-description");
    desc.classList.toggle("show-description");
    infoVisible = true;
  }
}

function hideDescription() {
  infoTimeout = setTimeout(() => {
    spotlight.style.filter = "blur(35px) brightness(1)";
    descTitle.classList.toggle("show-description");
    desc.classList.toggle("show-description");
    descTitle.textContent = "";
    desc.textContent = "";
    infoVisible = false;
  }, 100);
}

cards.forEach((card) => {
  card.addEventListener("mouseover", showDescription);
  card.addEventListener("mouseout", hideDescription);
});
