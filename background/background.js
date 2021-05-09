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
