#! /usr/bin/env node

import {CLI,Reader, Writter} from "../index.js";
import {Pipe} from "@makechtec/pipe";
import { cwd } from "node:process";

const IF_PATTERN = new RegExp("@if\\(.*\\)", "g");
const ELSE_PATTERN = new RegExp("@else");
const END_IF_PATTERN = new RegExp("@endif", "g");
const IF_STATEMENT = "@if\\(.*\\)";
const ELSE_STATEMENT = "@else";
const END_IF_STATEMENT = "@endif";
const IF_PATTERN_GEN = "\n*\s*@if\s*\(\s*.*\s*\)\s*\n*";

let template = CLI.getArgumentValue("name");
let placeholders = CLI.getArgumentsGroup("ph");
let file = CLI.getArgumentValue("file");

const USER_TEMPLATE_DIR = cwd() + "/templates/default";
const DEFAULT_TEMPLATE_DIR = cwd() + "/node_modules/@makechtec/tezcatl-default/templates/default";
const EXT = ".temp";

const readContent = (templateName) => {
    let userTemplatePath = USER_TEMPLATE_DIR + "/" + templateName;
    let defaultTemplatePath = DEFAULT_TEMPLATE_DIR + "/" + templateName;
    let content = Reader.readTemplate(userTemplatePath);

    if(content == ""){
        content = Reader.readTemplate(defaultTemplatePath);
    }
    return content;
}


let content = readContent(template.value + EXT);

let p = new Pipe(content);

let matchAll = content.matchAll(IF_PATTERN);
        let matchAllEndIf = content.matchAll(END_IF_PATTERN);

        if(matchAll.length !== matchAllEndIf.length){
            console.error("Sintax error: @if and @endif are not balanced");
        }