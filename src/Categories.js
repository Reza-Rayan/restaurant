const Categories = [
    {
        id: 1,
        name: 'خوراک ها',
        image: '/images/kebab.png',
        sub: [
            {
                sub_id: 101,
                sub_name: ' خوراک جوجه',
                price: '70,000 تومان',
                description:'یک سیخ جوجه معمولی 200 گرمی به همراه خیارشور و فلفل'
            },
            {
                sub_id: 102,
                sub_name: ' کوبیده معمولی',
                price: ' 70,000 تومان ',
                description:'یک سیخ لقمه 150 گرمی همراه خیارشور و فلفل'
            },
            {
                sub_id: 103,
                sub_name: ' خوراک مرغ ',
                price: ' 80,000 تومان ',
                description:'450 گرم مرغ (سینه یا ران)'
            },
            {
                sub_id: 104,
                sub_name: '  بال زعفرانی ',
                price: ' 55,000 تومان ',
                description:'7 تکه بال مرغ کبابی'
            },
            {
                sub_id: 105,
                sub_name: ' کتف',
                price: ' 55,000 تومان ',
                description:'7 تکه کتف مرغ کبابی'
            },
            {
                sub_id: 106,
                sub_name: ' جوجه مخصوص',
                price: ' 120,000 تومان ',
                description:'یک سیخ جوجه سینه 300 گرم همراه خیارشور و فلفل  '
            },
            {
                sub_id: 107,
                sub_name: ' کوبیده مخصوص',
                price: ' 120,000 تومان ',
                description:' یک سیخ کوبیده مخصوص 230 گرم همراه خیارشور و فلفل '
            },
            {
                sub_id: 107,
                sub_name: ' شنیسل مرغ',
                price: ' 85,000 تومان ',
                description:' 250 گرم سینه سوخاری  شده مرغ '

            },
            {
                sub_id: 108,
                sub_name: '  جوجه حلزونی',
                price: ' 100,000 تومان ',
                description:' یک سیخ  جوجه حلزونی  سینه و فیله 350 گرم '
            },
            {
                sub_id: 109,
                sub_name: '  ماهی کبابی',
                price: ' 110,000 تومان ',
                description:' 500-600 گرم  ماهی غزل آلا کبابی'
            },
            {
                sub_id: 110,
                sub_name: '  ماهی سرخ شده',
                price: ' 110,000 تومان ',
                description:' 500-600 گرم  ماهی غزل آلا سرخ شده'
            },
            {
                sub_id: 111,
                sub_name: '  لقمه نگین دار',
                price: ' 140,000 تومان ',
                description:' یک سیخ کباب لقمه نگین دار  280 گرم'
            },
            {
                sub_id: 112,
                sub_name: ' جوجه با استخوان',
                price: ' 120,000 تومان ',
                description:' یک عدد اکبر جوجه کامل همراه دورجین و  فلفل'
            },
            {
                sub_id: 113,
                sub_name: ' کباب بناب',
                price: ' 150,000 تومان ',
                description:' یک سیخ بناب 300 گرم همراه خیارشور و فلفل'
            },
            {
                sub_id: 114,
                sub_name: ' کباب وزیری',
                price: ' 140,000 تومان ',
                description:' یک سیخ کباب لقمه 150 گرم و یک سیخ جوجه 200 گرم'
            },
            {
                sub_id: 115,
                sub_name: 'بختیاری گوساله',
                price: ' 120,000 تومان ',
                description:' یک سیخ کباب بختیاری راسته گوساله 250 گرم همراه جوجه'
            },
            {
                sub_id: 116,
                sub_name: 'بختیاری گوسفندی',
                price: ' 130,000 تومان ',
                description:' یک سیخ کباب بختیاری راسته گوسفندی 250 گرم همراه جوجه'
            },
            {
                sub_id: 117,
                sub_name: ' برگ گوساله',
                price: ' 150,000 تومان ',
                description:' یک سیخ برگ گوساله 220 گرم'
            },
            {
                sub_id: 118,
                sub_name: ' برگ گوسفندی',
                price: ' 220,000 تومان ',
                description:' 220 گرم برگ گوسفندی و یک سیخ کباب لقمه  150 گرمی'
            },
            {
                sub_id: 119,
                sub_name: ' شیشلیک',
                price: ' 240,000 تومان ',
                description:' یک سیخ راسته گوسفندی  450 گرم'
            },
            {
                sub_id: 120,
                sub_name: ' سلطانی گوسفندی',
                price: ' 270,000 تومان ',
                description:' یک سیخ 200 گرم برگ گوسفندی و یک سیخ کوبیده  150 گرمی'
            },
            {
                sub_id: 121,
                sub_name: ' سلطانی گوساله',
                price: ' 200,000 تومان ',
                description:' یک سیخ 200 گرم برگ گوساله و یک سیخ کوبیده  150 گرمی'

            },
            {
                sub_id: 122,
                sub_name: 'فیله گوسفندی',
                price: ' 210,000 تومان '
            },
            {
                sub_id: 123,
                sub_name: ' ماهیچه',
                price: ' 210,000 تومان ',
                description:' ماهیچه گوسفندی 400 گرم'
            },
           
        ]
    },


    {
        id: 2,
        name: 'چلو ها',
        image: '/images/chelo.png',
        sub: [
            {
                sub_id: 201,
                sub_name: ' چلو',
                price: '35,000 تومان'
            },
            {
                sub_id: 202,
                sub_name: ' چلو ماهیچه',
                price: '240,000 تومان',
                description:' 400 گرم  ماهیچه گوسفندی همراه 350 گرم برنج'
            },
            {
                sub_id: 203,
                sub_name: ' ته چین مخصوص',
                price: '85,000 تومان',
                description:' 150 گرم مرغ ریش شده همراه برنج'
            },
            {
                sub_id: 204,
                sub_name: ' زرشک پلو با مرغ',
                price: '115,000 تومان',
                description:'  1/4 مرغ  به همراه 350 گرم برنج'
            },
            {
                sub_id: 205,
                sub_name: ' چلو خورشت قرمه سبزی',
                price: '75,000 تومان',
                description:' 80 گرم گوشت گوساله به همراه 350 گرم برنج'
            },
            {
                sub_id: 206,
                sub_name: ' چلو خورشت  قیمه',
                price: '75,000 تومان'
            },
            {
                sub_id: 207,
                sub_name: ' چلو خورشت  قیمه بادمجان',
                price: '75,000 تومان'
            },
            {
                sub_id: 208,
                sub_name: ' چلو قزل آلا',
                price: '145,000 تومان'
            },
            {
                sub_id: 209,
                sub_name: ' چلو بناب',
                price: '175,000 تومان'
            },
            {
                sub_id: 210,
                sub_name: ' چلو جوجه با استخوان',
                price: '155,000 تومان'
            },
            {
                sub_id: 211,
                sub_name: ' چلو لقمه نگین دار ',
                price: '155,000 تومان'
            },
            {
                sub_id: 212,
                sub_name: ' چلو جوجه با استخوان',
                price: '175,000 تومان'
            },
            {
                sub_id: 213,
                sub_name: ' چلو جوجه معمولی ',
                price: '105,000 تومان'
            },
            {
                sub_id: 214,
                sub_name: '  چلو جوجه مخصوص  ',
                price: '155,000 تومان'
            },
            {
                sub_id: 215,
                sub_name: '  باقالی پلو با مرغ ',
                price: '130,000 تومان'
            },
            {
                sub_id: 216,
                sub_name: '  چلو شیشلیک ',
                price: '275,000 تومان'
            },
            {
                sub_id: 217,
                sub_name: '  چلو چنجه ',
                price: '255,000 تومان'
            },
            {
                sub_id: 218,
                sub_name: '  چلو بختیاری گوسفندی ',
                price: '165,000 تومان'
            },
            {
                sub_id: 219,
                sub_name: '  چلو بختیاری گوساله ',
                price: '155,000 تومان'
            },
            {
                sub_id: 220,
                sub_name: '  چلو سلطانی گوسفندی',
                price: '305,000 تومان'
            },
            {
                sub_id: 221,
                sub_name: '  چلو سلطانی گوساله ',
                price: '235,000 تومان'
            },
            {
                sub_id: 222,
                sub_name: '  باقالی پلو با ماهیچه',
                price: '240,000 تومان'
            },
            {
                sub_id: 223,
                sub_name: '  چلو برگ گوسفندی',
                price: '255,000 تومان'
            },
            {
                sub_id: 224,
                sub_name: '  چلو برگ گوساله',
                price: '185,000 تومان'
            },
           
            
        ]
    },



    {
        id: 3,
        name: 'دیزی',
        image: '/images/dizi.png',
        sub: [
            {
                sub_id: 301,
                sub_name: ' دیزی سالنی',
                price: '100,000 تومان'
            },
            {
                sub_id: 302,
                sub_name: ' دیزی بیرون بر',
                price: '100,000 تومان'
            },
            {
                sub_id: 303,
                sub_name: ' جوجه سبزیجات',
                price: 'ـــــــــــــــــ'
            },
           
        ]
    },

    {
        id: 4,
        name: 'مخلفات',
        image: '/images/mokhalafat.png',
        sub: [
            {
                sub_id: 401,
                sub_name: '  گوجه کبابی',
                price: 'ـــــــــــــــــ'
            },
            {
                sub_id: 402,
                sub_name: '  فلفل کبابی',
                price: 'ـــــــــــــــــ'
            },
            {
                sub_id: 403,
                sub_name: '   ماست موسیر',
                price: '115,000 تومان'
            },
            {
                sub_id: 404,
                sub_name: '   ماست خیار',
                price: '30,000 تومان'
            },
            {
                sub_id: 405,
                sub_name: '   زیتون پرورده',
                price: '20,000 تومان'
            },
            {
                sub_id: 406,
                sub_name: '  سالاد فصل',
                price: '30,000 تومان'
            },
            {
                sub_id: 406,
                sub_name: '  سالاد شیرازی',
                price: '35,000 تومان'
            },
        ,
        ]

    },



    {
        id: 5,
        name: 'نوشیدنی ها',
        image: '/images/drink.png',
        sub: [
            {
                sub_id: 501,
                sub_name: ' نوشابه قوطی',
                price: '12,000 تومان'
            },
            {
                sub_id: 502,
                sub_name: ' دلستر قوطی',
                price: '14,000 تومان'
            },
            {
                sub_id: 503,
                sub_name: ' دوغ زالی',
                price: '15,000 تومان'
            },
            {
                sub_id: 504,
                sub_name: ' دوغ لیوانی',
                price: '7,000 تومان'
            },
            {
                sub_id: 505,
                sub_name: ' دوغ عالیس ',
                price: '7,000 تومان'
            },
            
        ]

    },


   
]
export default Categories