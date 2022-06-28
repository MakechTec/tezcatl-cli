export namespace CLI {
    function getArgumentValue(name: any, params?: any): Argument;
    function getArgumentsGroup(prefix: any, params?: any): any;
    function getFlagsGroup(params?: any): any;
    function isFlag(name: any, params?: any): any;
    function getAllArguments(params?: any): any;
}
export const ARGUMENT_FLAG: "--";
export namespace Pattern {
    function testStart(search: any, target: any): boolean;
    function testArg(search: any, target: any): boolean;
    function testIsArg(target: any): any;
    function testFlag(target: any): boolean;
    function testHasDirectory(target: any): boolean;
    function replacePlaceholder(content: any, placeholder: any): any;
    function countMatches(str: any, pattern: any): any;
}
export namespace Reader {
    function readTemplate(templateName: any): any;
    function read(templateName: any): any;
    function changePlaceholders(content: any, placeholders: any): any;
}
export namespace Writter {
    function writeFile(fileName: any, content: any): void;
    function createDirectory(dirName: any): void;
    function insertInLine(fileName: any, lineNumber: any, text: any): void;
}
export class Argument {
    constructor(name: any, value: any);
    name: any;
    value: any;
}