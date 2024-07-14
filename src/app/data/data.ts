interface Hero {
    name: string;
    age: number;
    image: string;
    lightsaberColors: string[];
    isDark: boolean;
}

const heroes: Hero[] = [

        {
            name: 'Luke Skywalker',
            age: 53,
            image: 'https://nsabers.de/cdn/shop/articles/opolar_Luke_Skywalker_illuminated_only_by_his_green_lightsaber._ea2cfe7b-c177-4019-9b1d-14ca18970bdc.png?v=1706273475',
            lightsaberColors: ['green', 'blue'],
            isDark: false
        },
        {
            name: 'Darth Vader',
            age: 45,
            image: 'https://lumiere-a.akamaihd.net/v1/images/darth-vader-main_4560aff7.jpeg?region=71%2C0%2C1139%2C854',
            lightsaberColors: ['red'],
            isDark: true
        },
        {
        name:'Yoda',
        age:1000,
        image: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest?cb=20150206140125',
        lightsaberColors:['green'],
        isDark: false
        },
        {
        name: 'Darth Maul',
        age: 35,
        isDark: true,
        lightsaberColors: ['red'],
        image: 'https://nsabers.es/cdn/shop/articles/rogue_0ne_photo_realistic_Star_Wars_darth_maul_black_cloak_inti_3026af25-54be-4505-8c2a-9615fdfd7b7a.png?v=1713855939'
        },
        {
        name: 'Obi Wan',
        age: 52,
        isDark: false,
        lightsaberColors: ['blue'],
        image:
            'https://i.guim.co.uk/img/media/8a36c17d2c101a4b6bf2c2ead340c3c703784be0/0_1425_2216_1330/master/2216.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=700a7d9249967bd22a0c3ebc753e4233'
        }
];

export default heroes;