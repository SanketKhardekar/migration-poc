const express = require("express");
const cors = require("cors");
const { port } = require("./const");
const app = express();
const { exec } = require("child_process");
require("./models");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "DELETE", "UPDATE", "PUT", "PATCH", "OPTIONS"],
  })
);

//PORT for the application
app.listen(`${port}`, async () => {
  console.log(`Server Listening at ${port}`);
  await checkAndRunMigration();
});

async function checkAndRunMigration() {
  try {
    await new Promise((resolve, reject) => {
      const migrateProcess = exec(
        "npx sequelize-cli db:migrate",
        { env: process.env },
        (error, stdout, stderr) => {
          if (error) {
            console.error("Error:", stderr);
            resolve();
          } else {
            console.log("Migrations completed successfully:", stdout);
            resolve();
          }
        }
      );
      migrateProcess.stdout.pipe(process.stdout);
      migrateProcess.stderr.pipe(process.stderr);
    });
  } catch (error) {
    console.error("Error running migrations:", error);
  }
}
