import { reactive } from 'vue'
import seedData from '../../data/calendar'

export const store = {
    state: {
        data: reactive(seedData)
    },
    getActiveDay(){
        return this.state.data.find((day) => day.active)
    },
    setActiveDay(dayId){
        this.state.data.map((dayObj) => {
            dayObj.id === dayId ? dayObj.active = true : dayObj.active = false
        })
    }
}