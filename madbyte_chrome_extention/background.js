chrome.runtime.onInstalled.addListener(() => {
       chrome.contextMenus.create({
         id: "madbyte-download",
         title: "Download with MadByte Download Manager",
         contexts: ["link"]
       });
     });
     
     chrome.contextMenus.onClicked.addListener((info, tab) => {
       if (info.menuItemId === "madbyte-download") {
         fetch("http://127.0.0.1:52345/add", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({
             url: info.linkUrl,
             key: "my_super_secret_token"
           })
         })
         .then(res => res.text())
         .then(data => console.log("✅ Download sent:", data))
         .catch(err => console.error("❌ Failed to send:", err));
       }
     });
     