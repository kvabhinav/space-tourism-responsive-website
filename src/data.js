import imageMoon from '../src/images/destination/imageMoon.webp'
import imageMars from '../src/images/destination/imageMars.webp'
import imageEuropa from '../src/images/destination/imageEuropa.webp'
import imageTitan from '../src/images/destination/imageTitan.webp'

import imageAnousheh from '../src/images/crew/imageAnoushehAnsari.webp'
import imageDouglas from '../src/images/crew/imageDouglasHurley.webp'
import imageMark from '../src/images/crew/imageMarkShuttleworth.webp'
import imageVictor from '../src/images/crew/imageVictorGlover.webp'

import launchVehicleLandscape from '../src/images/technology/launchVehicleLandscape.jpg'
import launchVehiclePortrait from '../src/images/technology/launchVehiclePortrait.jpg'
import spaceCapsuleLandscape from '../src/images/technology/spaceCapsuleLandscape.jpg'
import spaceCapsulePortrait from '../src/images/technology/spaceCapsulePortrait.jpg'
import spaceportLandscape from '../src/images/technology/spaceportLandscape.jpg'
import spaceportPortrait from '../src/images/technology/spaceportPortrait.jpg'

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


export const crews =[
    {
        role:"COMMANDER",
        name:'DOUGLAS HURLEY',
        description:'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        image:imageDouglas
    },
    {
        role:"MISSION SPECIALIST",
        name:'MARK SHUTTLEWORTH',
        description:'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
        image:imageMark,
    },
    {
        role:"PILOT",
        name:'VICTOR GLOVER',
        description:'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ',
        image:imageVictor,
    },
    {
        role:"FLIGHT ENGINEER",
        name:'ANOUSHEH ANSARI',
        description:'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ',
        image:imageAnousheh,
    }
]


export const technology=[
    {
        step:"LAUNCH VEHICLE",
        description:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        imageLandscape:launchVehicleLandscape,
        imagePortrait:launchVehiclePortrait
    },
    {
        step:"SPACEPORT",
        description:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
        imageLandscape:spaceportLandscape,
        imagePortrait:spaceportPortrait
    },
    {
        step:"SPACE CAPSULE",
        description:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
        imageLandscape:spaceCapsuleLandscape,
        imagePortrait:spaceCapsulePortrait
    }
]