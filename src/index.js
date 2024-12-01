function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 5,
    cursor: "",
  });
}
function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "c3a451d0adt46fobb2b9a77755f49315";
  let context =
    "You are the Mediterranean cuisine expert and love to share delicious recipes. The recipe should include a brief description of the dish, a detailed list of ingredients, and step-by-step instructions. When listing ingridients, please separate each line with a <li>. Make sure to follow user instructions. Please include a recipe title separetely inside a <strong> and <h> element at the top";
  let prompt = `User instructions: Create a Mediterranean recipe about ${instructionsInput.value}`;

  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳  Creating a recipe of ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayRecipe);
}
let recipeFormElement = document.querySelector("#recipe-gen-form");
recipeFormElement.addEventListener("submit", generateRecipe);
