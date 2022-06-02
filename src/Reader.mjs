
export const Reader = {


    readTemplate: function(templateName) {

        if(! fs.existsSync(templateName)){
            console.error("Template directory not found for: "+ cwd());
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
    }
}

