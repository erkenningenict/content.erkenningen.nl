import fs from "fs";
import path from "path";

const pageString = `
- file: "src/pages/contact.md"
        label: "Contact"
        name: "contact"
        delete: false
        fields:
          - { label: "Title", name: "title", widget: "string" }
          - { label: "Body", name: "body", widget: "markdown" }
          `;

const pagesDir = "src/pages";

let fileName;
let parentDir;
let structure = [];
const walk = function(dir, done) {
  fs.readdir(dir, function(error, list) {
    if (error) {
      return done(error);
    }

    var i = 0;

    (function next() {
      var file = list[i++];

      if (!file) {
        return done(null);
      }

      fileName = file;
      // dir.split("/")
      console.log("#DH# dir", dir.split("/").pop());
      structure.push({file: file, paths: dir.split})
      file = dir + "/" + file;

      fs.stat(file, function(error, stat) {
        if (stat && stat.isDirectory()) {
          walk(file, function(error) {
            next();
          });
        } else {
          // do stuff to file here
          if (path.extname(file) === ".md") {
            console.log("#DH# path", path.dirname(file));
            // structure.push({
            //   name: "licenties-aanvragen",
            //   label: "Licenties aanvragen",
            //   files: []
            // });
            console.log(file);
          }

          next();
        }
      });
    })();
  });
};

walk(pagesDir, function(error) {
  if (error) {
    throw error;
  } else {
    console.log(
      "-------------------------------------------------------------"
    );
    console.log("finished.");
    console.log(
      "-------------------------------------------------------------"
    );
  }
});
