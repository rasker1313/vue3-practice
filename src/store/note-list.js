import { createStore } from 'vuex'

export const noteStore = createStore({
    state:{
        notes: [],
        timestamps: []
    },
    mutations:{
        ADD_NOTE(state, payload) {
            let newNote = payload;
            state.notes.push(newNote)
        },
        ADD_TIMESTAMP(state, payload) {
            let newTimestamp = payload;
            state.timestamps.push(newTimestamp)
        },
    },
    actions: {
        addNote(context, payload) {
            context.commit('ADD_NOTE', payload)
        },
        addTimestamp(context, payload) {
            context.commit('ADD_TIMESTAMP', payload)
        }
    },
    getters:{
        getNotes: state => state.notes,
        getTimestamps: state => state.timestamps,
        getNoteCount: state => state.notes.length
        /*getNotes(state) {
            return state.notes
        },
        getTimestamps(state) {
            return state.timestamps
        },
        getNoteCount(state) {
            return state.notes.length
        }*/
    },
})