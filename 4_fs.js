const fs = require('fs')


//  // reading a file 

//   const red =fs.readFileSync('f1.txt')
//  console.log(" file has been readed " + red)

//  // write a file
//  fs.writeFileSync('f2.txt', ' writing text in f2 file')
//  console.log("f2 file changed")

//  // updating a file

//  fs.appendFileSync('f3.txt',' new data append to f3 file')
//  console.log("new data appended")


//  // deleting file 

//  fs.unlinkSync('f4.txt')
//  console.log("f4 file has been deleted")



//directories


// create a directory

// fs.mkdirSync("myDirectory")
// console.log("directory created")


// check the what content we have in directory

// const readdir = fs.readdirSync('myDirectory')

// console.log("read a directort", readdir)

// check directory exist or not

const doesExist = fs.existsSync("mydirectory")
console.log("exist",doesExist)


// remove a directory

fs.rmdirSync("myDirectory")
console.log("directory deleted")