await Bun.build({
    entrypoints: ['./index.ts'],
    outdir: './out',
    target: 'bun', 
})  