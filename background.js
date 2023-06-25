chrome.runtime.onInstalled.addListener(async () => {

  chrome.contextMenus.create({
    "id": 'click-to-whatsapp',
    "title": 'Chamar no zap', 
    "contexts": ['all']
  });
  
  chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "click-to-whatsapp") {
      var phoneNumber = info.selectionText;
      let url = `https://api.whatsapp.com/send?1=pt_br&phone=55${phoneNumber}`
      let tab = chrome.tabs.create({ url });
    }
  });

});