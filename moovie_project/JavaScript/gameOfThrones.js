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

// Блок с карточками книг
document.addEventListener("DOMContentLoaded", function () {
  const GOTcardsArray = `[
  {
    "title": "A Game of Thrones 🏰",
    "author": "George R. R. Martin",
    "year": "1996",
    "url": "./assets/images/GOT/book1.jpg",
    "info": "In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the North of Winterfell, sinister and supernatural forces are massing beyond the kingdom’s protective Wall. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the land they were born to. Sweeping from a land of brutal cold to a distant summertime kingdom of epicurean plenty, here is a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Amid plots and counterplots, tragedy and betrayal, victory and terror, the fate of the Starks, their allies, and their enemies hangs perilously in the balance, as each endeavors to win that deadliest of conflicts: the game of thrones."
  },
  {
    "title": "A Clash of Kings 👑",
    "author": "George R. R. Martin",
    "year": "1998",
    "url": "./assets/images/GOT/book2.jpg",
    "info": "A comet the color of blood and flame cuts across the sky. And from the ancient citadel of Dragonstone to the forbidding shores of Winterfell, chaos reigns. Six factions struggle for control of a divided land and the Iron Throne of the Seven Kingdoms, preparing to stake their claims through tempest, turmoil, and war. <br> It is a tale in which brother plots against brother and the dead rise to walk in the night. Here a princess masquerades as an orphan boy; a knight of the mind prepares a poison for a treacherous sorceress; and wild men descend from the Mountains of the Moon to ravage the countryside. Against a backdrop of incest and fratricide, alchemy and murder, victory may go to the men and women possessed of the coldest steel...and the coldest hearts. For when kings clash, the whole land trembles."
  },
  {
    "title": "A Storm of Swords ⚔️",
    "author": "George R. R. Martin",
    "year": "2000",
    "url": "./assets/images/GOT/book3.jpg",
    "info": "Of the five contenders for power, one is dead, another in disfavor, and still the wars rage as violently as ever, as alliances are made and broken. Joffrey, of House Lannister, sits on the Iron Throne, the uneasy ruler of the land of the Seven Kingdoms. His most bitter rival, Lord Stannis, stands defeated and disgraced, the victim of the jealous sorceress who holds him in her evil thrall. But young Robb, of House Stark, still rules the North from the fortress of Riverrun. Robb plots against his despised Lannister enemies, even as they hold his sister hostage at King's Landing, the seat of the Iron Throne. Meanwhile, making her way across a blood-drenched continent is the exiled queen, Daenerys, mistress of the only three dragons still left in the world...<br> But as opposing forces maneuver for the final titanic showdown, an army of barbaric wildlings arrives from the outermost line of civilization. In their vanguard is a horde of mythical Others, a supernatural army of the living dead whose animated corpses are unstoppable. As the future of the land hangs in the balance, no one will rest until the Seven Kingdoms have exploded in a veritable storm of swords..."
  }, {
    "title": "A Feast for Crows 🐦‍⬛",
    "author": "George R. R. Martin",
    "year": "2005",
    "url": "./assets/images/GOT/book4.jpg",
    "info": "It seems too good to be true. After centuries of bitter strife and fatal treachery, the seven powers dividing the land have decimated one another into an uneasy truce. Or so it appears... With the death of the monstrous King Joffrey, Cersei is ruling as regent in King’s Landing. Robb Stark’s demise has broken the back of the Northern rebels, and his siblings are scattered throughout the kingdom like seeds on barren soil. Few legitimate claims to the once desperately sought Iron Throne still exist—or they are held in hands too weak or too distant to wield them effectively. The war, which raged out of control for so long, has burned itself out. <br> But as in the aftermath of any climactic struggle, it is not long before the survivors, outlaws, renegades, and carrion eaters start to gather, picking over the bones of the dead and fighting for the spoils of the soon-to-be dead. Now in the Seven Kingdoms, as the human crows assemble over a banquet of ashes, daring new plots and dangerous new alliances are formed, while surprising faces—some familiar, others only just appearing—are seen emerging from an ominous twilight of past struggles and chaos to take up the challenges ahead."
  }, {
    "title": "A Dance with Dragons 🐉",
    "author": "George R. R. Martin",
    "year": "2011",
    "url": "./assets/images/GOT/book5.jpg",
    "info": "In the aftermath of a colossal battle, the future of the Seven Kingdoms hangs in the balance once again - beset by newly emerging threats from every direction. In the east, Daenerys Targaryen, the last scion of House Targaryen, rules with her three dragons as queen of a city built on dust and death. But Daenerys has three times 3,000 enemies, and many have set out to find her. Yet, as they gather, one young man embarks upon his own quest for the queen, with an entirely different goal in mind. <br> To the north lies the mammoth Wall of ice and stone - a structure only as strong as those guarding it. There, Jon Snow, 998th Lord Commander of the Nights Watch, will face his greatest challenge yet. For he has powerful foes not only within the Watch but also beyond, in the land of the creatures of ice. <br> And from all corners, bitter conflicts soon reignite, intimate betrayals are perpetrated, and a grand cast of outlaws and priests, soldiers and skinchangers, nobles and slaves, will face seemingly insurmountable obstacles. Some will fail, others will grow in the strength of darkness. But in a time of rising restlessness, the tides of destiny and politics will lead inevitably to the greatest dance of all."
  }, {
    "title": "The Winds of Winter ❄️",
    "author": "George R. R. Martin",
    "year": "Planned 🥲",
    "url": "./assets/images/GOT/book6.webp",
    "info": "The Winds of Winter is the forthcoming sixth novel in the epic fantasy series A Song of Ice and Fire by George R.R. Martin. <br> The previous installment, A Dance with Dragons, covered less story than Martin intended, omitting at least one planned large battle sequence and leaving several character threads ending in cliffhangers."
  }, {
    "title": "A Dream of Spring 🍃",
    "author": "George R. R. Martin",
    "year": "Planned 🥲",
    "url": "./assets/images/GOT/book7.webp",
    "info": "Originally titled A Time For Wolves. The seventh and apparent final book of George R.R. Martin's acclaimed series, A Song of Ice and Fire."
  }, {
    "title": "Tales of Dunk and Egg 📜",
    "author": "George R. R. Martin",
    "year": "1998 - nowadays",
    "url": "./assets/images/GOT/book8.jpg",
    "info": "Tales of Dunk and Egg is a series of fantasy novellas by George R. R. Martin, set in the world of his A Song of Ice and Fire novels. They follow the adventures of Dunk (the future Lord Commander of the Kingsguard, Ser Duncan the Tall) and Egg (the future King Aegon V Targaryen), some 90 years before the events of the novels. <br> Three novellas have been published – The Hedge Knight (1998), The Sworn Sword (2003), and The Mystery Knight (2010) – and Martin has stated his intention to continue the series. A collection of the existing three novellas, with illustrations by Gary Gianni, was published as A Knight of the Seven Kingdoms on October 6, 2015."
  }
    ]`;

  let GOTcards = JSON.parse(GOTcardsArray);
  let GOTcardsContent = "";

  for (let card of GOTcards) {
    GOTcardsContent += `<div class='GOTcard'>
            <img class='GOTcard__image' src='${card.url}' alt='Book image'/>
            <h3>${card.title}</h3>
            <div class='GOTcard__text'>
            <div><b>Author:</b> ${card.author}</div>
            <div><b>Year:</b> ${card.year}</div>
            </div>
            </div>`;
  }
  document.getElementById("GOTcards__container").innerHTML = GOTcardsContent;
});
