import { create } from 'zustand';

interface FormModalState {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

export const useFormModal = create<FormModalState>((set) => ({
  isOpen: false,
  openModal: () => set({ isOpen: true }),
  closeModal: () => set({ isOpen: false }),
}));