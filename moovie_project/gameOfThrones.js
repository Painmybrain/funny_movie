// Блок с цитатами по игре престолов
const quotesContainer = document.getElementById("GOT__quotes--container");
const GOTbutton = document.getElementById("GOT__button");

document.addEventListener("DOMContentLoaded", getGOTquotes);

async function getGOTquotes() {
  try {
    const GOTfetch = await fetch(
      "https://api.gameofthronesquotes.xyz/v1/random"
    );

    if (!GOTfetch.ok) {
      throw new Error(
        `<p>Возникла ошибка при получении данных с сервера: ${GOTfetch.status}</p>`
      );
    }

    const GOTdata = await GOTfetch.json();
    displayQuotes(GOTdata);
  } catch (error) {
    quotesContainer.innerHTML = `<p>Ошибка: ${error.message}</p>`;
  }
}

function displayQuotes(quote) {
  quotesContainer.innerHTML = `<q class='GOTquote__sentence'>${quote.sentence}</q>
  <cite class='GOTquote__character'>${quote.character.name}</cite>`;
}

GOTbutton.addEventListener("click", getGOTquotes);
