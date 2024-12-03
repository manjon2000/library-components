const { exec } = require("child_process");
const fs = require('fs/promises');

const libraryName = "manjon-ui";
const angularCLIPath = "./node_modules/.bin/ng";

console.log(`Compiling the library: ${libraryName}...`);

exec(`${angularCLIPath} build ${libraryName}`, async (error, stdout, stderr) => {
    try {
        if (error) {
            console.error(`❌ Error when compiling the library: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`❌ Problems encountered during compilation:\n${stderr}`);
            return;
        }
        console.log(`✅ Successful build:\n${stdout}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
    }finally {
        await moveFolder('./dist/manjon-ui', './node_modules/manjon-ui');
    }

});

// Move
async function moveFolder(source, destination) {
    try {
        await fs.rm(`${destination}/*`, { recursive: true, force: true });
        await fs.mkdir(destination, { recursive: true });
        await fs.cp(source, destination, { recursive: true });
        await fs.rm(source, { recursive: true, force: true });
        console.log(`✅ Folder move to  ${source} from ${destination}`);
    } catch (error) {
        console.error(`❌ Error moving file: ${error.message}`);
    }
}