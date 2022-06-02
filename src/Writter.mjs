
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
    }
    
};

