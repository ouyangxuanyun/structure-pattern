const fs = require('fs');
const path = require('path');
const util = require('util');
const moment = require('moment');
const readdir = util.promisify(fs.readdir);
let breakTime = '2018-05-21T07:30:35.000Z';

const find = async (filepath, desDir) => {
  try {
    const files = await readdir(filepath);
    files.forEach(file => {
      const sourceFile = path.join(filepath, file);
      const destinateFile = path.join(desDir, file);
      if (fs.lstatSync(sourceFile).isDirectory()) {
        return find(sourceFile, destinateFile);
      }
      const {atime, mtime, ctime} = fs.statSync(sourceFile);
      // console.log(mtime, ctime, moment(mtime).isAfter(breakTime));
      if (moment(mtime).isAfter(breakTime) || moment(ctime).isAfter(breakTime)) {
        const rs = fs.createReadStream(sourceFile);
        const desFile = sourceFile.replace(filepath, desDir);
        createDir(path.dirname(desFile));
        const ws = fs.createWriteStream(desFile);
        rs.pipe(ws);
      }
    });
  } catch (e) {
    console.error(e);
  }
};

// find('C:\\Users\\Fu\\Desktop\\test', 'F:\\GitLab_Space\\Deployments\\ddd');

const createDir = dir => {
  if (fs.existsSync(dir)) {
    return true;
  }
  if (createDir(path.dirname(dir))) {
    fs.mkdirSync(dir);
    return true;
  }
};
