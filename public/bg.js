<<<<<<< HEAD
// chrome.runtime.onMessage.addListener((data, sender, onSuccess) => {
//   const { message, url } = data;
//   if (message === "fetch_prices") {
//     fetch(url)
//       .then((response) => response.json())
//       .then((data) => onSuccess(data))
//       .catch((err) => console.log(err));
//   }
//   return true;
// });
=======
chrome.runtime.onMessage.addListener((data, sender, onSuccess) => {
  const { message, url } = data;
  if (message === "fetch_prices") {
    fetch(url)
      .then((response) => response.json())
      .then((data) => onSuccess(data))
      .catch((err) => console.log(err));
  }
  return true;
});
>>>>>>> d63f3089bfb3eb85a5e51d2200d457b3570c3879
