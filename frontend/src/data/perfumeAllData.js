// Женские духи
import perfume1 from '../assets/wpefrume/p1.png';
import perfume2 from '../assets/wpefrume/p2.png';
import perfume3 from '../assets/wpefrume/p3.png';
import perfume4 from '../assets/wpefrume/p4.png';
import perfume5 from '../assets/wpefrume/p5.png';
import perfume6 from '../assets/wpefrume/p6.png';
import perfume7 from '../assets/wpefrume/p7.png';
import perfume8 from '../assets/wpefrume/p8.png';
import perfume9 from '../assets/wpefrume/p9.png';
import perfume10 from '../assets/wpefrume/p10.png';
import perfume11 from '../assets/wpefrume/p11.png';
import perfume12 from '../assets/wpefrume/p12.png';

// Мужские духи
import pmen1 from '../assets/mpefrume/pmen1.png';
import pmen2 from '../assets/mpefrume/pmen2.png';
import pmen3 from '../assets/mpefrume/pmen3.png';
import pmen4 from '../assets/mpefrume/pmen4.png';
import pmen5 from '../assets/mpefrume/pmen5.png';
import pmen6 from '../assets/mpefrume/pmen6.png';
import pmen7 from '../assets/mpefrume/pmen7.png';
import pmen8 from '../assets/mpefrume/pmen8.png';
import pmen9 from '../assets/mpefrume/pmen9.png';
import pmen10 from '../assets/mpefrume/pmen10.png';
import pmen11 from '../assets/mpefrume/pmen11.png';
import pmen12 from '../assets/mpefrume/pmen12.png';

//Композиции
import composition1 from '../assets/compositions/compo1.png';
import composition2 from '../assets/compositions/compo2.png';

const perfumeAllData = [
    // Женские
    {
        id: 'w1',
        image: perfume1,
        brand: 'Chanel',
        name: 'EAU DE COLOGNE',
        volume: '200 ml',
        price: 505,
        badge: 'NEW',
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'w2',
        image: perfume2,
        brand: 'Gucci',
        name: 'GUILTY ABSOLUTE',
        volume: '200 ml',
        price: 240,
        badge: 'HIT',
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2, 
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'w3',
        image: perfume3,
        brand: 'Byredo',
        name: 'BAL D`AFRIQUE',
        volume: '200 ml',
        price: 300,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'w4',
        image: perfume4,
        brand: 'Kilian Paris',
        name: 'POSES ON ICE',
        volume: '50 ml',
        price: 280,
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2, 
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'w5',
        image: perfume5,
        brand: 'Lancome',
        name: 'O DE LANCOME',
        volume: '50 ml',
        price: 200,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'w6',
        image: perfume6,
        brand: 'Lancome',
        name: 'LANCOME HYPNOSE',
        volume: '30 ml',
        price: 220,
        badge: 'HIT',
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2, 
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'w7',
        image: perfume7,
        brand: 'Tom Ford',
        name: 'BOIS PACIFIQUE',
        volume: '100 ml',
        price: 400,
        badge: 'NEW',
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'w8',
        image: perfume8,
        brand: 'Tom Ford',
        name: 'LOST CHERRY',
        volume: '100 ml',
        price: 500,
        badge: 'HIT',
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2, 
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'w9',
        image: perfume9,
        brand: 'Chanel',
        name: 'CHANCE EAU TENDRE',
        volume: '100 ml',
        price: 200,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'w10',
        image: perfume10,
        brand: 'Versace',
        name: 'EROS POUR FEMME',
        volume: '100 ml',
        price: 220,
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2, 
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'w11',
        image: perfume11,
        brand: 'Chalen',
        name: 'DYLAN TURQUOISE',
        volume: '30 ml',
        price: 150,
        badge: 'HIT',
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'w12',
        image: perfume12,
        brand: 'Byredo',
        name: 'TOBACCO MANDARIN',
        volume: '50 ml',
        price: 200,
        badge: 'NEW',
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,   
            coffee: 2, 
            berries: 4
        },
        compositionImage: composition2
    },

    // Мужские
    {
        id: 'm1',
        image: pmen1,
        imageClass: 'pmen1',
        brand: 'Dior',
        name: 'SAUVAGE',
        volume: '100 ml',
        price: 546,
        badge: 'HIT',
        badgeClass: 'badge1',
        variant: 1,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'm2',
        image: pmen2,
        imageClass: 'pmen2',
        brand: 'Hugo Boss',
        name: 'BOSS BOTTLED',
        volume: '50 ml',
        price: 200,
        variant: 2,
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2,
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'm3',
        image: pmen3,
        imageClass: 'pmen3',
        brand: 'Armani',
        name: 'ACQUA DI GIO PROFONDO',
        volume: '30 ml',
        price: 87,
        badge: 'NEW',
        badgeClass: 'badge3',
        variant: 3,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'm4',
        image: pmen4,
        imageClass: 'pmen4',
        brand: 'Dolce&Gabbana',
        name: 'K BY DOLCE&GABBANA',
        volume: '50 ml',
        price: 177,
        variant: 4,
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2,
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'm5',
        image: pmen5,
        imageClass: 'pmen5',
        brand: 'Tom Ford',
        name: 'VANILLE FATALE',
        volume: '100 ml',
        price: 375,
        variant: 5,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'm6',
        image: pmen6,
        imageClass: 'pmen6',
        brand: 'Gucci',
        name: 'BLOOM PARFUME',
        volume: '150 ml',
        price: 147,
        badge: 'HIT',
        badgeClass: 'badge6',
        variant: 6,
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2,
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'm7',
        image: pmen7,
        imageClass: 'pmen7',
        brand: 'Chanel',
        name: 'BLEU DE CHANEL',
        volume: '100 ml',
        price: 263,
        badge: 'HIT',
        badgeClass: 'badge7',
        variant: 7,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'm8',
        image: pmen8,
        imageClass: 'pmen8',
        brand: 'Kilian',
        name: 'LEMON IN ZEST',
        volume: '200 ml',
        price: 484,
        variant: 8,
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2,
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'm9',
        image: pmen9,
        imageClass: 'pmen9',
        brand: 'Versace',
        name: 'EROS ENERGY POUR',
        volume: '100 ml',
        price: 96,
        badge: 'NEW',
        badgeClass: 'badge9',
        variant: 9,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'm10',
        image: pmen10,
        imageClass: 'pmen10',
        brand: 'Yves Saint Laurent',
        name: 'MYSLF',
        volume: '100 ml',
        price: 260,
        variant: 10,
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2,
            berries: 4
        },
        compositionImage: composition2
    },
    {
        id: 'm11',
        image: pmen11,
        imageClass: 'pmen11',
        brand: 'Hugo Boss',
        name: 'NUMBER ONE',
        volume: '50 ml',
        price: 155,
        badge: 'HIT',
        badgeClass: 'badge11',
        variant: 11,
        scentIntel: {
            neroli: 5,
            lime: 4,
            honey: 3,
            grapefruit: 2,
            orange: 4
        },
        compositionImage: composition1
    },
    {
        id: 'm12',
        image: pmen12,
        imageClass: 'pmen12',
        brand: 'Moschino',
        name: 'TOY BOY',
        volume: '100 ml',
        price: 123,
        badge: 'NEW',
        badgeClass: 'badge12',
        variant: 12,
        scentIntel: {
            ambrette: 5,
            rose: 5,
            nectar: 3,
            coffee: 2,
            berries: 4
        },
        compositionImage: composition2
    },

];

export default perfumeAllData;
