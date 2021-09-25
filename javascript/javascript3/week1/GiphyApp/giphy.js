const userInputbox = document.getElementById("user-input-search");
const userInputNumber = document.getElementById("user-input-number");
const searchButton = document.getElementById("search-btn");
const resultArea = document.getElementById("result");

searchButton.addEventListener("click", getDataFromGiphy);

let userInput = "";

async function getDataFromGiphy() {
  if (userInputbox.value !== "") {
    userInput = userInputbox.value;
    userRequest = userInput;
    console.log(userRequest);

    const giphyURL = `https://api.giphy.com/v1/gifs/search?api_key=nfO5SoBcbT52y6LGAQk0RvWckxvh4dc3&q=${userRequest}&limit=30&offset=0&rating=g&lang=en`;

    const fetchResponse = await fetch(giphyURL);
    const giphyData = await fetchResponse.json();
    console.log(giphyData);

    console.log(giphyData.data);
    console.log(giphyData.data[0].url);

    for (
      let i = 0;
      i <
      (userInputNumber.valueAsNumber ||
        Math.floor(Math.random() * giphyData.data.length));
      i++
    ) {
      const data = giphyData.data[i];
      const resultGifdata = data.images.looping.mp4;
      const video = document.createElement("video");
      video.src = resultGifdata;
      video.loop = true;
      video.autoplay = true;
      resultArea.appendChild(video);
    }
  }
}

function clearStage() {}
