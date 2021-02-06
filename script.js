//////////// BUTTON EVENT HANDLER ////////////
const inputButton = document.getElementById("input-button");

inputButton.addEventListener("click", () => {
  const mealBoxDetails = document.getElementsByClassName("meal-box");

  //////// hiding previous meal-box divs for new search
  if (mealBoxDetails.length > 0) {
    for (let i = 0; i < mealBoxDetails.length; i++) {
      const div = mealBoxDetails[i];
      div.style.display = "none";
    }
  }

  const inputMealName = document.getElementById("input-name").value;
  fetchingMealData(inputMealName);
});

//////////// FETCHING FUNCTION ///////////
const fetchingMealData = (inputNameValue) => {
  fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${inputNameValue}`
  )
    .then((response) => response.json())
    .then((data) => showMeal(data.meals));
};

///////////// FUNCTIONS /////////////
const showMeal = (meals) => {
  meals.forEach((meal) => {
    const mealName = meal.strMeal;
    const mealThumbnail = meal.strMealThumb;

    const mealBox = document.getElementById("my-container");
    const mealBoxDetails = document.createElement("div");
    mealBoxDetails.className = "meal-box";

    const showInDom = `
          <img class="meal-img" src="${mealThumbnail}">
          <h4 class="meal-heading">${mealName}</h4>
      `;

    mealBoxDetails.innerHTML = showInDom;
    mealBox.appendChild(mealBoxDetails);
  });
};
