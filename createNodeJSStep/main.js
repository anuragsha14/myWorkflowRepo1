const core = require('@actions/core')
const myName = core.getInput('name')

async function name() {
    console.log('My name is : ', myName)
}

name();