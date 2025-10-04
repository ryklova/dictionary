async function getDefinition(word) {
  let result;
  await fetch("https://api.dictionaryapi.dev/api/v2/entries/en/" + word)
    .then((response) => response.json())
    .then((data) => {
      result = data;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
}

document
  .getElementById("searchButton")
  .addEventListener("click", displayDefinition);

async function displayDefinition() {}
