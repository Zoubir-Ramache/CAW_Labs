const fs = require('fs')


const fileName = process.argv[2]
const fileContent = process.argv[3]

fs.writeFileSync(fileName , fileContent)
console.log("the file has been saved!");
console.log("file content : " , fileContent);

