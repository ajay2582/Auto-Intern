const pup = require("puppeteer");
let { id, pass } = require("./secret");
let tab;
let dataFile = require("./data");

async function main() {
    let browser = await pup.launch({
        headless: false,
        defaultViewport: false,
        args: ["--start-maximized"]
    });
    let pages = await browser.pages();
    tab = pages[0];
    await tab.goto("https://internshala.com/");
    await tab.click('.login-cta' , {delay:200})
    await tab.type('input[type="email"]', id);
    await tab.type('input[type="password"]', pass);
    await tab.click('button[type="submit"]' , {delay:200});
    await tab.waitForNavigation({ waitUntil: "networkidle2" });
    
    
    await tab.click(".nav-item>a" , {delay:200});
    
    // await tab.waitForSelector('#select_category_chosen>ul>li>input', { visible: true });
    // await tab.waitForSelector('.ic-16-calendar', { visible: true });
    
    //  #matching_preference
    
    await tab.waitForSelector('#matching_preference', { visible: true });
    await tab.click('#matching_preference'  , {delay:600});

    await tab.waitForSelector('#internship_list_container_1>div>div:nth-child(2)>div>a', { visible: true });
    let profile_options = await tab.$$('#internship_list_container_1>div>div:nth-child(2)>div>a');
    let app_urls = [];
    for (let i = 0; i < 3; i++) {
        let url = await tab.evaluate(function (ele) {
            return ele.getAttribute("href");
        }, profile_options[i]);
        app_urls.push(url);
    }
    console.log(app_urls.length);
    console.log(app_urls);
    await new Promise(function (resolve, reject) {
        return setTimeout(resolve, 2000);
    });
    for (let i = 0; i < app_urls.length; i++) {
        tab.goto("https://internshala.com" + app_urls[i]);
        await tab.waitForNavigation({ waitUntil: "networkidle2" });
        await tab.waitForSelector('#easy_apply_button', { visible: true })
        await tab.click('#easy_apply_button' ,  {delay:200})
        // const selector = "#assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>div>div:nth-child(1)>p";
        // const element = await tab.$(selector);  // Check if the element exists
        // if (element) {
        //         await tab.waitForSelector(selector, { visible: true });
        //         await tab.type(selector , aboutme   , {delay:100});
        //     }
            // await tab.waitForSelector('#assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>textarea', { visible: true });
            // // await tab.type('#assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>textarea' , aboutme  ,   {delay:100});
            // await tab.click('#assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>textarea' ,   {delay:100});
            
            
            await tab.waitForSelector('#assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>div>div:nth-child(1)>p', { visible: true });
            
            const  squarecoverexiest = '#assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>div>div:nth-child(1)>p';
            const squareExistyesitis = await tab.$(squarecoverexiest);
            if(squareExistyesitis){
                await tab.waitForSelector(squarecoverexiest , { visible:true});
                await tab.click('#assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>div>div:nth-child(1)>p')
                await tab.type('#assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>div>div:nth-child(1)>p' ,dataFile["CoverLetter"] )
           
        }

        // chota checkbox ko click krna ho
        const chotacheckbox = "input[id='check']";
        const chotacheckboxkaele = await tab.$(chotacheckbox);  // Check if the element exists
        if (chotacheckboxkaele) {
            await tab.waitForSelector(chotacheckbox, { visible: true });
            await tab.click(chotacheckbox ,  {delay:100});
        }
        // await tab.waitForSelector('#assessment_questions>div:nth-child(10)>div:nth-child(2)>textarea', { visible: true });
        //   await tab.click('#assessment_questions>div:nth-child(10)>div:nth-child(2)>textarea');
        // await tab.waitForSelector("#assessment_questions>div:nth-child(10)>div:nth-child(2)>textarea", { visible: true });
        //   #assessment_questions>div.form-group.additional_question
        // await tab.waitForSelector('input[value="Select location(s)"]', { visible: true });
        // await tab.click('input[value="Select location(s)"]');
        // // #assessment_questions>div:nth-child(7)>div>div:nth-child(2)>div:nth-child(2)>div>div>ul>li[data-option-array-index="0"]
        // await tab.waitForSelector('#assessment_questions>div:nth-child(7)>div>div:nth-child(2)>div:nth-child(2)>div>div>ul>li[data-option-array-index="0"]', { visible: true });
        // await tab.click('#assessment_questions>div:nth-child(7)>div>div:nth-child(2)>div:nth-child(2)>div>div>ul>li[data-option-array-index="0"]');
        const  square = 'input[value="Select location(s)"]';
        const squareExist = await tab.$(square);
        if(squareExist){
            await tab.waitForSelector(square , { visible:true});
            await tab.click(square , {delay:200});
        }
        const  squareOption = '#assessment_questions>div:nth-child(7)>div>div:nth-child(2)>div:nth-child(2)>div>div>ul>li[data-option-array-index="0"]';
        const squareExistOp = await tab.$(squareOption);
        if(squareExistOp){
            await tab.waitForSelector(squareOption , { visible:true});
            await tab.click(squareOption , {delay:200});
        }
        const  squareOption23 = '#assessment_questions>div:nth-child(5)>div>div:nth-child(2)>div:nth-child(2)>div>div>ul>li[data-option-array-index="0"]';
        const squareExistOp213 = await tab.$(squareOption23);
        if(squareExistOp213){
            await tab.waitForSelector(squareOption23 , { visible:true});
            await tab.click(squareOption23 ,  {delay:200});
        }
        




        var ass = '#assessment_questions>div:nth-child(10)>div:nth-child(2)>textarea';
        // Check if the element exists
        try {
            const ass1 = await tab.$(ass);
            if (ass1) {
                await tab.waitForSelector(ass, { visible: true });
                await tab.type(ass, dataFile["Box1"] );
            }
        } catch (error) {
            console.log(`Error : ${error.message}`);
        }
        var ass8 = '#assessment_questions>div:nth-child(8)>div:nth-child(2)>textarea';
        // Check if the element exists
        try {
            const ass189 = await tab.$(ass8);
            if (ass189) {
                await tab.waitForSelector(ass8, { visible: true });
                await tab.type(ass8, dataFile["Box2"] );
            }
        } catch (error) {
            console.log(`Error : ${error.message}`);
        }
        var ass123 = '#assessment_questions>div:nth-child(9)>div:nth-child(2)>textarea';
        try {
            const ass19 = await tab.$(ass123);  // Check if the element exists
            if (ass19) {
                await tab.waitForSelector(ass123, { visible: true });
                await tab.type(ass123, dataFile["Box3"]);
            }
        } catch (error) {
            // Handle the error or simply ignore it if you don't want to do anything
            console.log(`Error: ${error.message}`);


          //  #assessment_questions_container>div:nth-child(2)>div:nth-child(5)>div:nth-child(3)>textarea
        }
        var ass123ert = '#assessment_questions>div:nth-child(11)>div:nth-child(2)>textarea';
        try {
            const ass19two = await tab.$(ass123ert);  // Check if the element exists
            if (ass19two) {
                await tab.waitForSelector(ass123ert, { visible: true });
                await tab.type(ass123ert, dataTemp );
            }
        } catch (error) {
            // Handle the error or simply ignore it if you don't want to do anything
            console.log(`Error: ${error.message}`);
        }

        // // yeha click krte thain submit bale button ko 
        var ass12398 = '#submit';
        const ass19987 = await tab.$(ass12398);  // Check if the element exists
        if (ass19987) {
            await tab.waitForSelector(ass12398, { visible: true });
            await tab.click(ass12398 , {delay:200});
        }
        // await new Promise(function (resolve, reject) {
            //     return setTimeout(resolve, 60000);
            // });
        }
        // var ass12398 = '#submit';
        // const ass19987 = await tab.$(ass12398);  // Check if the element exists
        // if (ass19987) {
        //     await tab.waitForSelector(ass12398, { visible: true });
        //     await tab.click(ass12398);
        // }
        
        
        
        
        
        await tab.goto("https://internshala.com/internships/" , {delay : 200});

        await tab.waitForSelector('#matching_preference', { visible: true });
        await tab.click('#matching_preference'  , {delay:600});
        
        // await tab.waitForNavigation({ waitUntil: "networkidle2" });
        
        //           .navbar-nav.nav_menu_container>li:nth-child(8)
        
        var ass12398qwe = '.navbar-nav.nav_menu_container>li:nth-child(8)';
        const ass19987rty = await tab.$(ass12398qwe);  // Check if the element exists
        if (ass19987rty) {
            await tab.waitForSelector(ass12398qwe, { visible: true });
            await tab.click(ass12398qwe , {delay:200});
        }
        
        //    more pr click krne ka     .navbar-nav.nav_menu_container>li:nth-child(8)>div>div>div>div>ul>div>li:nth-child(8)>a
        
        var ass12398hui = '.navbar-nav.nav_menu_container>li:nth-child(8)>div>div>div>div>ul>div>li:nth-child(8)>a';
        const ass19987uyi = await tab.$(ass12398hui);  // Check if the element exists
        if (ass19987uyi) {
            await tab.waitForSelector(ass12398hui, { visible: true });
            await tab.click(ass12398hui , {delay:400});
        }
        
        
        //      logout button  pr click 
        //  .navbar-nav.nav_menu_container>li:nth-child(8)>div>div>div>div>ul>div>li:nth-child(8)>ul>li:nth-child(2)>a
        
        
        var ass12398ret = '.navbar-nav.nav_menu_container>li:nth-child(8)>div>div>div>div>ul>div>li:nth-child(8)>ul>li:nth-child(2)>a';
        const ass19987fib = await tab.$(ass12398ret);  // Check if the element exists
        if (ass19987fib) {
            await tab.waitForSelector(ass12398ret, { visible: true });
            await tab.click(ass12398ret , {delay : 500});
        }




        }
        main();


