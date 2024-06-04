const process = require("child_process");
const path = require("path");

// 推送代码
function pushCode() {
  const options = {
    cwd: path.resolve(__dirname, ".."),
    encoding: "utf8",
  };

  process.execSync("git fetch", options);
  process.execSync("git add .", options);
  process.execSync("git commit -m 'feat: auto push code'", options);
  process.execSync("git push", options);
}

pushCode();
