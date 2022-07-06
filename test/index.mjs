import {CLI} from "../index.js";
import {argv} from "node:process";

console.log(CLI.isFlag("export"));
console.log(argv);