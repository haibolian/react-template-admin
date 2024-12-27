import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type TagType = {
  key: string;
  label: string;
}

type TagsStoreType = {
  tags: TagType[];
  addTag: (tag: TagType) => void;
  removeTag: (tag: TagType) => void
}

const tagsStore = create<TagsStoreType>()(
  persist(set => ({
    tags: [],
    addTag: (tag) => set(state => ({ tags: [...state.tags, tag] })),
    removeTag: (tag) => set(state => ({ tags: state.tags.filter(t => t !== tag)}))
  }),
  {
    name: 'tagsStore',
    storage: createJSONStorage(() => sessionStorage),
    partialize: state => ({ tags: state.tags }) 
  })
)

export default tagsStore;
