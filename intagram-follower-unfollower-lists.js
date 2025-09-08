// 1. COPY AND PASTE FROM HERE <--
function loadAllElements(){
  async function autoScroll(element) {
    const distance = 200; // px per step
    const delay = 300;    // ms between scrolls

    while (element.scrollTop + element.clientHeight < element.scrollHeight) {
      element.scrollBy(0, distance);
      await new Promise(r => setTimeout(r, delay));
    }
  }

  var search = document.querySelector('input[placeholder="Busca"]');
  var prevNodeOne = search.parentNode;
  var prevNodeTwo = prevNodeOne.parentNode;

  var scrolleable = prevNodeTwo.nextSibling;

  autoScroll(scrolleable);
}

loadAllElements();

// TO HERE <-- ON THE CONSOLE WHILE THE FOLLOWERS/FOLLOWING POPUP IS OPEN

// 2. SAME, COPY AND EXECUTE ON THE CONSOLE
function parseProfiles(){
    const profiles = document.querySelectorAll('div[role="dialog"] img[alt][draggable]');

    const usernames = [];
    profiles.forEach((profile) => {
        const alt = profile.getAttribute("alt");
        const toProcess = alt.split(" ");

        const username = toProcess[toProcess.length - 1];

        usernames.push(username);
    });

    console.log(usernames)
}

// 3. FINAL RESULT DISPLAY ON THE CONSOLE (COPY FOLLOWER AND FOLLOWING ON THE OTHER SCRIPT TO COMPARE)
const following = parseProfiles();
