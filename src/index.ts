import playwright from 'playwright';
import fs from 'fs';

(async () => {
    const browser = await playwright['chromium'].launch({headless: false});
    const namesString = fs.readFileSync(process.cwd() + "/src/names.txt", {encoding: "utf8"});
    const names = namesString.split("\n");

    for(let fullname of names) {
        const context = await browser.newContext();
        const page = await context.newPage();
        await page.goto("https://gleam.io/cookiefix?sa=https://gleam.io/Ngbkx/moonstarter-whitelist-competition%3Fl%3Dhttps%253A%252F%252Fmoonstarter.net%252Fwhitelist%253Fgsr%253DNgbkx-JzGx8op7gH%26r%3D%26gsr%3DNgbkx-JzGx8op7gH", {waitUntil: "networkidle"});
        const container = await page.$(".login-choice li .fa-envelope");
        await container?.click();
        const email = fullname.split(" ").map(word => word.toLowerCase()).join(".") + "@gmail.com"
        const wallet = "0x9ae0546d32E3a6a3CBd0dd9B8dC1500402699a40";
        const telegram = "kaktybrat";
        const twitter = "lowhigh";
        await page.type("input[name='name']", fullname);
        const emailInput = await page.$$("input[name='email']");
        await emailInput[1].type(email)
        await page.type("input[name='bep_20_wallet_adress']", wallet);
        await page.type("input[name='telegram_username']", telegram);
        await page.type("input[name='twitter_username']", twitter);
        await page.click("text=Continue");
        await page.waitForSelector("text=Log in using...", {timeout: 0});
        await context.close();

    }


})();
