import imageMoon from '../src/images/destination/imageMoon.webp'
import imageMars from '../src/images/destination/imageMars.webp'
import imageEuropa from '../src/images/destination/imageEuropa.webp'
import imageTitan from '../src/images/destination/imageTitan.webp'

export const planets = [
    {
        name: 'MOON',
        image: imageMoon,
        description: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: '384,400',
        travelTime: {
            no: 3,
            period_of_time: 'DAYS'
        },
    },
    {
        name: 'MARS',
        image: imageMars,
        description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: '225 MIL.',
        travelTime: {
            no: 9,
            period_of_time: 'MONTHS'
        }
    },
    {
        name: 'EUROPA',
        image: imageEuropa,
        description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: '628 MIL.',
        travelTime: {
            no: 3,
            period_of_time: 'YEARS'
        }
    },
    {
        name: 'TITAN',
        image: imageTitan,
        description: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: '1.6 BIL.',
        travelTime: {
            no: 7,
            period_of_time: 'YEARS'
        }
    }
        

]