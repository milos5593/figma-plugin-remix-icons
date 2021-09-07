const toHtml = require('@enyaxu/hast-util-to-html')
import { parse } from 'svg-parser'
import * as fs from 'fs'

var icons = []

fs.readFile('node_modules/remixicon/fonts/remixicon.symbol.svg', 'utf8', function (err, contents) {
    const parsed = parse(contents)
    const symbols = parsed.children[0].children
    symbols.forEach((symbol) => {
        const name = symbol.properties.id
        symbol.tagName = 'svg'
        let newIcon = toHtml(symbol)
        icons.push({
            name,
            svg: newIcon.toString(),
        })
    })

    const obj = {
        icons,
    }

    fs.writeFile(`src/icons.json`, JSON.stringify(obj), () => {
        console.log('Done.\n')
    })
})
