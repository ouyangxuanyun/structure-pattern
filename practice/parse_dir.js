const fs = require('fs');
const path = require('path');

let parseDir = (dir) => {
    let children = [];
    fs.readdirSync(dir).forEach(filename => {
        let path = `${dir}/${filename}`;
        let stat = fs.statSync(path);
        if (stat && stat.isDirectory()) {
            children = [...children, ...parseDir(path)]
        } else {
            children.push(path)
        }
    })
    return children
}

let dir = path.resolve(__dirname,'..');
console.log(fs.statSync(dir))
// let res = parseDir(dir);
// console.log(res)
console.log(__filename,__dirname)
