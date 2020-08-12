import ESmodule from 'somewhereinnodemodules'
import React from 'react' // Try commenting out this line
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

export function Names() {
  const names = ['rita','reed','ruth','rick',]
  return (
    <>
      <label for="names">Names:</label>
      <div id="names">
        {names.map(name => {
          <div>name: {name}</div>
        })}
      </div>
    </>
  )
}

module.exports = {
  helloBob,
  example: example,
}

export default firstName;
