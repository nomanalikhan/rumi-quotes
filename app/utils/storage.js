function saveState(state) {
  chrome.storage.local.set({ state: JSON.stringify(state) });
}

// quotes unmarked count
function setBadge(quotes) {
  if (chrome.browserAction) {
    const count = quotes.filter(quote => !quote.marked).length;
    chrome.browserAction.setBadgeText({ text: count > 0 ? count.toString() : '' });
  }
}

export default function () {
  return next => (reducer, initialState) => {
    const store = next(reducer, initialState);
    store.subscribe(() => {
      const state = store.getState();
      saveState(state);
      setBadge(state.quotes);
    });
    return store;
  };
}
