
export const Reader = {
    readTemplate: function(templateName) {

        let templatePath = "";

        if(fs.existsSync(LOCAL_TEMPLATE_DIR)){
            console.info("Reading templates from: " + LOCAL_TEMPLATE_DIR);
            templatePath = this.getTemplatePath(templateName, LOCAL_TEMPLATE_DIR);
        }
        else if(fs.existsSync(DEFAULT_TEMPLATE_DIR)){
            console.info("Reading templates from: " + LOCAL_TEMPLATE_DIR);
            templatePath = this.getTemplatePath(templateName, DEFAULT_TEMPLATE_DIR);
        }
        else{
            console.error("Template directory not found for: "+ cwd());
            return "";
        }

        return fs.readFileSync(templatePath, "utf8");
        
    },
    getTemplatePath: function(templateName, templateDir = DEFAULT_TEMPLATE_DIR) {
        return templateDir + "/" + templateName + ".temp";
    },
    changePlaceholders: function(content, placeholders) {

        let newContent = content;
        placeholders.forEach((placeholder) => {
            newContent = Pattern.replacePlaceholder(newContent, placeholder);
        });
        return newContent;
    }
}

