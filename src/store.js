import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const store = (set) => ({
    tasks: [{ title: 'TestTask', state: 'ONGOING' }],
    draggedTask: null,
    addTask: (title, state) =>
        set((store) => ({ tasks: [...store.tasks, { title, state }] }), false, "addTask"),
    deleteTask: (title, state) =>
        set((store) => ({ tasks: store.tasks.filter((task) => task.title != title) })),
    setDraggedTask: (title) => set({ draggedTask: title }),
    moveTask: (title, state) => set((store) => ({ tasks: store.tasks.map(task => task.title === title ? { title, state } : task) }))
});

// custom wrapper to log every state change
const log = (config) => (set, get, api) => config(
    (...args) => {
        const current = get();
        if (!current) {
            // get state from external source custom source
        }
        console.log(args);
        set(...args)
    },
    get,
    api
)

export const useStore = create(log(persist(devtools(store), { name: "store" })));