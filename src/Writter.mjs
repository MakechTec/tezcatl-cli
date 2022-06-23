
export const Writter = {
    writeFile: function(fileName, content) {

        if(Pattern.testHasDirectory(fileName)){
            let pointer = fileName.lastIndexOf("/");
            let directory = fileName.substring(0, pointer);
            this.createDirectory(directory);
        }

        fs.writeFileSync(fileName, content);

    },
    createDirectory: function(dirName) {
        fs.mkdirSync(dirName, { recursive: true });
    },
    insertInLine: function(fileName, lineNumber, text){

        if(Pattern.testHasDirectory(fileName)){
            let pointer = fileName.lastIndexOf("/");
            let directory = fileName.substring(0, pointer);
            this.createDirectory(directory);
        }

        let originalText = fs.readFileSync(fileName, 'utf8');
        let lines = originalText.split("\n");
        let newLines = lines.splice(lineNumber, 0, text);
        let newText = newLines.join("\n");

        fs.writeFileSync(fileName, newText);

    }
    
};

