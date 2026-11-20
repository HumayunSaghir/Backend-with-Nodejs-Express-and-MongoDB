const fs = require('fs')

// creating file in a sync way.
fs.writeFileSync("./data.txt", "Ahmed\n")

// creating file in async way.
fs.writeFile("./data.txt", "Humayun\n", (err) => {
    if(err){
        console.log("error in creating file.")
    }
})

// reading file sync way
const result = fs.readFileSync("./data.txt", "utf8")
console.log(result)

// reading file in async way
fs.readFile("./data.txt","utf-8" ,(err, res) => {
    if(err){
        console.log("error in reading file!")
    }
    else{
        console.log(res)
    }
})

// appending file in sync way
fs.appendFileSync("./data.txt", "Muneeb\n")

// appending file in async way
fs.appendFile("./data.txt", "Mumtaz", (err) => {
    if(err){
        console.log("error in appending data to file!")
    }
})

// copying file in sync way
fs.copyFileSync("./data.txt", "./copiedFile.txt")

// deleting file in sync way
fs.unlinkSync("./copiedFile.txt")

// reading properties of the file
const data = fs.statSync("./data.txt")
console.log(data)

// creating a new directory
fs.mkdir("./toBeDeleted", (err) => {
    if(err){
        console.log("error in creating the directory!")
    }
})