const product = [
    {id: 1, title: "Future State Aquaman #1", price: 435, pictureUrl: "../img/Future-State-Aquaman-1-2021.jpg", description: "When Jackson Hyde accepted the mantle of Aquaman, he didn’t expect to also have to mentor Andy Curry, Arthur and Mera’s teen daughter. Nor did he expect that he and Andy would get sucked into the Confluence-an interdimensional nexus that connects distant planets and galaxies through the One Great Ocean. And he certainly didn’t expect to lose Andy in the process of trying to find their way back home. Now Jackson’s not sure how long he’s been stuck in a prison on Neptune (five years?) or how many times he’s tried to escape (200 at least!). But today Jackson saw something in the water that gave him hope for the first time in a long time-and his captors have no idea what he’s got in store for them."},
    {id: 2, title: "Future State Aquaman #2", price: 376, pictureUrl: "../img/Future-State-Aquaman-2-2021.jpg", description: "Andy Curry, daughter of Arthur and Mera, has had a pretty terrible month. Jackson Hyde, a.k.a. Aquaman, won’t stop calling her Aqualass when she’s told him a thousand times it’s Aquawoman. She’s manifested a new power that scares the absolute hell out of her. Oh, and she and Jackson just got ripped apart in the midst of a cosmic space ocean and she can’t find him anywhere! For the first time in her 14 years, Andy’s all alone-and it’s gonna take her wits, her will, and every single lesson Jackson ever taught her to survive."},
    {id: 3, title: "Future State Batman Superman #1", price: 345, pictureUrl: "../img/Future-State-Batman-Superman-1-2021.jpg", description: "Back in the early days of the Magistrate’s occupation of Gotham City, Bruce Wayne found himself pushed to the edge like never before. So calling the Man of Steel in for backup makes sense, right? Wrong. Gotham’s sinister overlords have already sprung the ultimate trap on the Last Son of Krypton…and with Kryptonian power at your command, no one can stand in your way! Plus…where on Earth did Professor Pyg get a Kryptonite scalpel? Brace yourselves, because things are going to get gross in the caverns below Gotham…"},
    {id: 4, title: "Future State Batman Superman #2", price: 367, pictureUrl: "../img/Future-State-Batman-Superman-2-2021.jpg", description: "Superman has fallen deep into the Magistrate’s Kryptonite caverns, and now he’s at the mercy of a gruesomely transformed Professor Pyg! So what do animalistic body modification and caves of Kryptonite have to do with the Magistrate’s growing fascist state in Gotham City? That’s what Batman needs to find out as the race against time to save the Man of Steel nears its end! All we know for sure is that during this battle, something happened that drove a wedge between Bruce and Clark…Discover the answers in the conclusion that will rock the World’s Finest to their core!"}
]


export const getFetch = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(product)
    });
})

export const getItem = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(product)
    }, 2000);
})