import { GluegunCommand } from 'gluegun'

const command: GluegunCommand = {
  name: 'pxv',
  run: async toolbox => {
    const { print } = toolbox

    print.divider()
    print.info('Welcome to DataLoader generator for PixelVoid Server')
    print.divider()
    print.info('This works to automatic generating Dataloaders for PixelVoid Server ' + print.colors.warning('(https://github.com/Pixel-Void/server)'))
    print.info('- Use `pxv dlg [dataloader name]` to generate a DataLoader. (use in project root)')
    print.info(`${print.colors.muted('Eg.:')} pxv g user`)
    print.info('\n- Use `pxv h for help.')

  }
}

module.exports = command
