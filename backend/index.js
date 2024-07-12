const fs = require("fs");
const path = require("path");

const backendDir = "backend";

// Create backend directory if it doesn't exist
if (!fs.existsSync(backendDir)) {
  fs.mkdirSync(backendDir);
}

// Create subfolders
const subfolders = [
  "models",
  "routes",
  "controllers",
  "services",
  "utils",
  "config",
];

subfolders.forEach((subfolder) => {
  const folderPath = path.join(backendDir, subfolder);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
});

// Create files
const files = [
  { path: "app.js", content: "" },
  { path: "models/user.js", content: "" },
  { path: "routes/auth.js", content: "" },
  { path: "controllers/authController.js", content: "" },
  { path: "services/authService.js", content: "" },
  { path: "utils/constants.js", content: "" },
  { path: "utils/helpers.js", content: "" },
  { path: "config/database.js", content: "" },
  { path: "config/server.js", content: "" },
];

files.forEach((file) => {
  const filePath = path.join(backendDir, file.path);
  fs.writeFileSync(filePath, file.content);
});

console.log("Folder structure created successfully!");
