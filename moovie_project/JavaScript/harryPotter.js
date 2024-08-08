// Блок с цитатами по Гарри Поттеру
const quotes_Container = document.getElementById("HP__quotes--container");
const HPbutton = document.getElementById("HP__button");

document.addEventListener("DOMContentLoaded", getHPquotes);
async function getHPquotes() {
    try {
      const HPfetch = await fetch(
        " "
      );
  
      if (!HPfetch.ok) {
        throw new Error(
          `<p>Возникла ошибка при получении данных с сервера: ${HPfetch.status}</p>`
        );
      }
  
      const HPdata = await HPfetch.json();
      display_Quotes(HPdata);
    } catch (error) {
        quotes_Container.innerHTML = `<p>Ошибка: ${error.message}</p>`;
    }
  }
  function display_Quotes(quote) {
    quotes_Container.innerHTML = `<q class='HPquote__sentence'>${quote.sentence}</q>
    <cite class='HPquote__character'>${quote.character.name}</cite>`;
  }
  
  HPbutton.addEventListener("click", getHPquotes);