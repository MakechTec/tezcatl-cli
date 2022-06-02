const concat = require('concat-files');
 
  concat([
    "./src/CLI.mjs",
    "./src/constants.mjs",
    "./src/Pattern.mjs",
    "./src/Reader.mjs",
    "./src/Writter.mjs",
    "./src/Argument.mjs",
  ], "./prebuild/cli.mjs", function(err) {
    if (err) throw err
    console.log('done');
  });