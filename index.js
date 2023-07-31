import puppeteer from "puppeteer";


const isDev = process.env.NODE_ENV === 'development' ? true : false

try {
    const browserOptions = {
        devtools: true,
        headless: false,
        ignoreDefaultArgs: ["--enable-automation"],
        // executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        // executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe",
        defaultViewport: null,
        // defaultViewport: {
        //     width: 1366,
        //     height: 768
        // }
    }
    let url = `https://www.baidu.com/`
    
    const browser = await puppeteer.launch(browserOptions)
    // const ctx = await browser.createIncognitoBrowserContext()
    // const page = await ctx.newPage()
    const page = await browser.newPage()
    page.goto(url, { timeout: 60 * 1000 })
} catch (error) {
    console.log('error: ', error);
}

console.log("done");
await new Promise(()=>{})
