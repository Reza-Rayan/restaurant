const  Categories = [
    {
        _id:1,
        name: 'پیتزا',
        image:'/images/pizza.png'
    },
    {
        _id:1,
        name: 'سوخاری',
        image:'/images/sokhari.png',
        sub:{
            sub_id:'101',
            sub_name:'پیتزا مخلوط',
            price:130000
        },
        sub:{
            sub_id:'102',
            sub_name:'پیتزا پپرونی',
            price:150000
        },
        sub:{
            sub_id:'103',
            sub_name:'پیتزا مخصوص',
        },
        sub:{
            sub_id:'104',
            sub_name:'پیتزا مخصوص',
            price:140000
        },

    },
    {
        _id:2,
        name: 'همبرگر',
        image:'/images/humberger.png'
      
    },
    {
        _id:3,
        name: 'ساندویچ',
        image:'/images/sandwich.png'
      
    },

    {
        _id:5,
        name: 'پاستا',
        image:'/images/pasta.png'

    },
    {
        _id:6,
        name: 'غدای اصلی',
        image:'/images/main-food.png'

    },
    {
        _id:7,
        name: 'سالاد ',
        image:'/images/salad.png'

    },
    {
        _id:8,
        name: 'انواع نوشیدنی ها ',
        image:'/images/soda.png'

    },
]
export default Categories