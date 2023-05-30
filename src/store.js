import { create } from "zustand";

const store = (set) => ({
    task: [{ title: 'TestTask', state: 'PLANNED' }],
});

export const useStore = create(store);