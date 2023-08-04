const cards = document.querySelectorAll(".card");

const handleCardHover = (e) => {
  if (e.target.classList.contains("card")) {
    e.target.classList.add("glow");
    e.target.addEventListener("animationend", () => {
      e.target.classList.remove("glow");
    }, { once: true });
  }
};

cards.forEach((card) => {
  card.addEventListener("mouseover", handleCardHover);
});

const expandButton = document.querySelector(".expand-button");
const cardContent = document.querySelector(".card-content");
const portfolioItemDetails = document.querySelectorAll(".portfolio-item-details");

expandButton.addEventListener("click", () => {
  cardContent.classList.toggle("expanded");
  portfolioItemDetails.forEach((item) => item.classList.toggle("expanded"));
});
