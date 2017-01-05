chrome.storage.local.get('quotes', (obj) => {
  let quotes = obj.quotes;
  if (quotes) {
    quotes = JSON.parse(quotes);
    const len = quotes.filter(todo => !quote.marked).length;
    if (len > 0) {
      chrome.browserAction.setBadgeText({ text: len.toString() });
    }
  } else {
    // Initial
    chrome.browserAction.setBadgeText({ text: '1' });
  }
});
