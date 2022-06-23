# Tezcatl CLI #

This module is a low level API, which is used to interact with the command line arguments. And with some file actions.

### installation ###

    $ npm install @makechtec/tezcatl-cli

### Argument Class ###

    export class Argument{
        constructor(name, value){
            this.name = name;
            this.value = value;
        }
    }

### Constants ###

    export const ARGUMENT_FLAG = "--";

### Pattern Object ###

    testStart(search, target) : booelean

chek if the target starts with the search

    testArg(search, target) : boolean

check if the target is an argument with the search as name

    testIsArg(target) : boolean

check if the target is an argument

    testFlag(target) : boolean

check if the target is a flag

    testHasDirectory(target) : boolean

check if the target path contains a directory

    replacePlaceholder(content, placeholder) : string

replace the placeholder name in all matches inside the content with the value of the placeholder

    countMatches(str, pattern) : number

count the number of matches of the pattern in the string

### Reader Object ###

    readTemplate(templateName) : string

Alias of read

    read(templateName) : string

read the template file

    changePlaceholders(content, placeholders) : string

replace the placeholder name in all matches inside the content with the value of the placeholder for each item in the placeholders array

### Writter Object ###

    writeFile(fileName, content) : void

create or overwrite the file with the content

    createDirectory(dirName) : void

create the directory

    insertInLine(fileName, lineNumber, text) : void

insert the text in the line number of the file

### CLI Object ###

    getArgumentValue(name, params = argv) : Argument

read the argument from the command line, it must be the form: 

    name=value

the result is an instance of the Argument class

    getArgumentsGroup(prefix, params = argv) : Argument[]

read the arguments from the command line, it must be the form:

    prefix1=value1 prefix2=value2 prefix3=value3

the result is an array of instances of the Argument class

    getFlagsGroup(params = argv) : Argument[]

read the flags from the command line, it must be the form:

    --flag1 --flag2 --flag3

the result is an array of instances of the Argument class, the value is true.

    isFlag: (name, params = argv) : boolean

check if the flag is present in the command line

    getAllArguments: function(params = argv) : Argument[]

read all arguments ignoring the flags. the result is an array of instances of the Argument class