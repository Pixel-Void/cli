const { system, filesystem } = require('gluegun')

const src = filesystem.path(__dirname, '..')

const cli = async cmd =>
  system.run('node ' + filesystem.path(src, 'bin', 'pxv') + ` ${cmd}`)

test('outputs version', async () => {
  const output = await cli('--version')
  expect(output).toContain('0.0.1')
})

test('outputs help', async () => {
  const output = await cli('--help')
  expect(output).toContain('0.0.1')
})

test('generates file', async () => {
  const output = await cli('dlg foo')

  expect(output).toContain('Generated file at src/dataloaders/foo-dataloader.ts')
  const foomodel = filesystem.read('src/dataloaders/foo-dataloader.ts')

  expect(foomodel).toContain(`import { Service } from 'typedi';`)
  expect(foomodel).toContain(`export default class FooDataloader`)

  // cleanup artifact
  filesystem.remove('src/dataloaders/')
})
