import { proxy } from 'valtio'

const state =proxy({
    section:"MOON",
    crewSection:"COMMANDER",
    TechnologySection:"LAUNCH VEHICLE"
})

export default state