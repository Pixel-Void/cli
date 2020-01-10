import { GluegunToolbox } from 'gluegun'

module.exports = {
  name: 'dataloader-generate',
  alias: ['dlg'],
  description: 'Generate an empty DataLoader',
  run: async (toolbox: GluegunToolbox) => {
    const {
      parameters,
      template: { generate },
      print: { info }
    } = toolbox

    const name = parameters.first

    const target = 'src/dataloaders'

    await generate({
      template: 'dataloader.ts.ejs',
      target: `${target}/${name}-dataloader.ts`,
      props: { name: name.charAt(0).toUpperCase() + name.slice(1) }
    })

    info(`Generated file at ${target}/${name}-dataloader.ts`)
  }
}
