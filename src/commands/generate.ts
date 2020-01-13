import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'dataloader-generate',
  alias: ['dlg'],
  description: 'Generate an empty DataLoader',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { spin }
    } = toolbox

    const name = parameters.first

    const target = 'src/dataloaders'

    const spinner = spin(`Generating ${target}/${name}-dataloader.ts`)

    await generate({
      template: 'dataloader.ts.ejs',
      target: `${target}/${name}-dataloader.ts`,
      props: { name: name.charAt(0).toUpperCase() + name.slice(1) }
    })

    spinner.succeed(`Generated file at ${target}/${name}-dataloader.ts`)

    const indexSpinner = spin(`Adding info to ${target}/index.ts`)

    await generate({
      template: 'dataloader-index.ts.ejs',
      target: `${target}/index.ts`,
      props: { dataloaders: toolbox.filesystem.list(`${target}`).filter(loader => loader.includes('-dataloader')).map(loader => loader.split('-')[0]) }
    })

    indexSpinner.succeed()

  }
}
