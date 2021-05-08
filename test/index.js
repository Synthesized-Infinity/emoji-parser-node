const emoji = require('../dist')

const parseTest = async () => {
    console.log(`~Emoji Parse Test~`)
    return await new Promise(async (resolve) => {
        await new Promise((res) => {
            setTimeout(() => {
                console.log(`Without Emoji`)
                console.log('RESULT:', emoji.parse(`Well in that case...`))
                res()
            }, 3000)
        })

        setTimeout(() => {
        console.log(`With Emoji 🌟`)
        console.log('RESULT:' , emoji.parse(`Well in that case...🏓`))
        console.log('--------------------------------------------------')
        resolve()
        }, 3000)
    })
}

const unicodeTest = async () => {
    console.log(`~Emoji to Unicode Test~`)
    return await new Promise(async (resolve) => {
        await new Promise((res) => {
                setTimeout(() => {
                console.log(`Regular Character`)
                console.log('RESULT:', emoji.emojiToUnicode(`Z`))
                res()
            }, 3000)
        })

        setTimeout(() => {
            console.log(`Emoji 🌟`)
            console.log('RESULT:', emoji.emojiToUnicode(`🏓`))
            console.log('--------------------------------------------------')
            resolve()
        }, 3000)
    })
}

const test = () => {
    const package = require('../package.json')
    console.log('Welcome to', package.name,`Tests 🔍`)
    console.log(`You are using Version ${package.version}!`)
    console.log('--------------------------------------------------\n\n~Starting Tests~')
    new Promise((resolve) => {
            setTimeout(() => parseTest().then(() => {
            setTimeout(() => unicodeTest().then(resolve), 3000)
        }), 3000)
    }).then(() => console.log(`Tests Done!`))
}
test()
