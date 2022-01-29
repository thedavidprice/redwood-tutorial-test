/* eslint-env node, es6*/

const os = require('os')
const path = require('path')

const execa = require('execa')
const fs = require('fs-extra')

const REDWOOD_FRAMEWORK_PATH = path.resolve(__dirname, '..')
const REDWOOD_PROJECT_PATH = path.join(
  os.tmpdir(),
  'redwood-temp-project',
  new Date().toISOString().split(':').join('-')
)

function createProjectDir() {
  try {
    console.log('Creating temp RW Project...')
    fs.mkdirSync(REDWOOD_PROJECT_PATH, { recursive: true })
  } catch (e) {
    console.log('ERROR creating temp RW Project')
    console.error(e)
    process.exit(1)
  }
  console.log('...Done. Temp RW Project created.')
  console.log()
}

async function exportEnv() {
  try {
    await execa.sync(
      'echo "{REDWOOD_PROJECT_PATH}={$RW_PATH}" >> $GITHUB_ENV',
      {
        shell: true,
        stdio: 'inherit',
        env: {
          RW_PATH: REDWOOD_PROJECT_PATH,
        },
      }
    )
    await execa.sync(
      'echo "{REDWOOD_FRAMEWORK_PATH}={$RWFW_PATH}" >> $GITHUB_ENV',
      {
        shell: true,
        stdio: 'inherit',
        env: {
          RWFW_PATH: REDWOOD_FRAMEWORK_PATH,
        },
      }
    )
  } catch (e) {
    console.log('ERROR exporting env vars to GitHub Action')
    console.error(e)
    process.exit(1)
  }
  console.log('Exported $REDWOOD_PROJECT_PATH= ' + REDWOOD_PROJECT_PATH)
  console.log('Exported $REDWOOD_FRAMEWORK_PATH= ' + REDWOOD_FRAMEWORK_PATH)
  console.log()
}

console.log()
console.log('-'.repeat(80))
console.log()
console.log('RW Project Path: ' + REDWOOD_PROJECT_PATH)
console.log('RW Framework Path: ' + REDWOOD_FRAMEWORK_PATH)
createProjectDir()
console.log('Creating GitHub Action Path Env Vars...')
exportEnv()
console.log('...Done. Exported Path Env Vars...')
console.log()
console.log('-'.repeat(80))
