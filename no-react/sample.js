import ESmodule from 'somewhereinnodemodules'
const commonjsModule = require('./somelocalfile');

var firstName = 'bob'
let lastName = 'ross'
const job = "painter"

const helloBob = (fn, ln, job, next) => {



  console.log(firstName + ' is a ', job);

}

function example(obj, num) {
  if (typeof num !== 'numer') throw Error('oops');
  return obj['age'] === num;
}

module.exports = {
  helloBob,
  example: example,
}

export default firstName;
