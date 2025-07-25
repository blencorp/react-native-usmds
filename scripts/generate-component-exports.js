const fs = require("fs");
const path = require("path");

const COMPONENTS_DIR = path.resolve(__dirname, "../apps/storybook/components");

function generateIndexFiles() {
  const componentFolders = fs.readdirSync(COMPONENTS_DIR).filter((name) => {
    const fullPath = path.join(COMPONENTS_DIR, name);
    return fs.statSync(fullPath).isDirectory();
  });

  componentFolders.forEach((folder) => {
    const folderPath = path.join(COMPONENTS_DIR, folder);
    const indexPath = path.join(folderPath, "index.ts");

    const mainFileName = `${folder}.tsx`;
    const mainFilePath = path.join(folderPath, mainFileName);

    if (!fs.existsSync(mainFilePath)) {
      console.warn(`⚠️  Skipping ${folder} – no ${mainFileName} file found`);
      return;
    }

    const exportLine = `export * from './${folder}';\n`;
    fs.writeFileSync(indexPath, exportLine);
    console.log(`✅ Created index.ts for ${folder}`);
  });
}

generateIndexFiles();
