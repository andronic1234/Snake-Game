// This file makes the website into an app. If you dont want that you can safely remove  along with package.json and package-lock.json
const { app, BrowserWindow} = require("electron")

function createWindow() {
    const win = new BrowserWindow({
        width: 850,
        height: 900,
        webPreferences: {
          nodeIntegration: true,
        },
      });
      win.removeMenu();
      win.loadFile("index.html");
}

app.whenReady().then(() => {
    createWindow();
  
    app.on("activate", () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  });
  
  app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
      app.quit();
    }
  });

