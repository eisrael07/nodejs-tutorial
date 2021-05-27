const {
    readFileSync,
    writeFileSync
} = require('fs')
const {
    readFile,
    writeFile
} = require('fs')

//synchronous file system approach
const firstFile = readFileSync('././content/view.txt', 'utf8')
console.log(firstFile)

const secondFile = readFileSync('././content/high.txt', 'utf8')
console.log(secondFile)

const thirdFile = writeFileSync('././content/garbage.txt', `${firstFile} - ${secondFile}`, {
    flag: 'a'
});
console.log(`file created successfully`)

//asynchronous file system approach
const asyncReadFile = readFile('././content/high.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log('file read successfully')
    console.log(result)
    console.log(`starting to write file`);
    writeFile('././content/var.txt', `${result}`, 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log('file wrote successfully')
    })
    console.log(`end of file writing`);
})