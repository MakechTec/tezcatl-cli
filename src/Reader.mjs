
export const Reader = {

    readTemplate: function(templateName){
        this.read(templateName);
    },

    read: function(templateName) {

        if(! fs.existsSync(templateName)){
            console.error("file not found in : "+ templateName);
            return "";
        }

        return fs.readFileSync(templateName, "utf8");
        
    },
    changePlaceholders: function(content, placeholders) {

        let newContent = content;
        placeholders.forEach((placeholder) => {
            newContent = Pattern.replacePlaceholder(newContent, placeholder);
        });
        return newContent;
    },
    readConfig: function(configName) {

    }
}

