"use strict";var fs=require("fs"),path=require("path"),keywords=getPostgreSQLKeywords();function getPostgreSQLKeywords(){for(var e=[],r=0,t=fs.readFileSync(path.join(__dirname,"keywords.postgresql.txt")).toString().split(/\r\n|\r|\n/);r<t.length;r++){var s=t[r].split(/\t/);/non-reserved/.test(s[1])||/reserved/.test(s[1])&&e.push(s[0])}return e}keywords.sort(),console.log("'".concat(keywords.join("',\n'"),"'"));