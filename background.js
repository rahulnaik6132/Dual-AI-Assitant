chrome.runtime.onMessage.addListener((message) => {
	if (message.action === "openChatGPT") {
		chrome.tabs.create({ url: "https://chatgpt.com/" });
	}
	if (message.action === "openGemini") {
		chrome.tabs.create({ url: "https://gemini.google.com/" });
	}
});
