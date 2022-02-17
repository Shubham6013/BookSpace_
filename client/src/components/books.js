const books = [
    {
        id : "1",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B300%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982182915_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "The Last Graduate ",
        author : "Naomi Novik",
        left : "9"
    },
    {
        id : "2",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538728628_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title :"The Wish",
        author : "Nicholas Sparks",
        left : "98" 
    },
    {
        id : "3",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781982168438_p0_v4%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "Cloud Cuckoo Land",
        author : "Anthony Doerr",
        left : "19"
    },
    {
        id : "4",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781455582877_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "Notebook",
        author : "Nicholas Sparks",
        left : "19"
    },
    {
        id : "5",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538764701_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "A walk to remember",
        author : "Nicholas Sparks",
        left : "19"
     },
     {
        id : "6",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780446567336_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "Dear John",
        author : "Nicholas Sparks",
        left : "19"
     },
     {
        id : "7",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781455584727_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "The Longest Ride",
        author : "Nicholas Sparks",
        left : "19"
     },
     {
        id : "8",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/0024543634621_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "(500) Days of Summer",
        author : "Clark Gregg",
        left : "9"
     },
     {
        id : "9",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/2940162379300_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "The Vow",
        author : "B. E. Baker",
        left : "98" 
     },
     {
        id : "10",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780142415436_p0_v5%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "If I Stay",
        author : "Gayle Forman",
        left : "19"
     },
     {
        id : "11",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9780143109464_p0_v3%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "Me Before You",
        author : "Jojo Moyes",
        left : "19"
     },
     {
        id : "12",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781946772916_p0_v1%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "Then Came You",
        author : "Jeannie Moon",
        left : "19"
     },
     {
        id : "13",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781538745304_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "The Lucky One",
        author : "Nicholas Sparks",
        left : "19"
     },
     {
        id : "14",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781455588992_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "The Choice",
        author : "Nicholas Sparks",
        left : "19"
     },
     {
        id : "15",
        img : "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B550%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&product=path%5B/pimages/9781534451568_p0_v2%5D&call=url%5Bfile:common/decodeProduct.chain%5D",
        title : "Five Feet Apart",
        author : "Rachael Lippincott",
        left : "19"
     },
     
     
]

export default books;
