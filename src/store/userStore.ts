import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  joinedAt: string;
}

interface UserState {
  users: User[];
  currentUser: User | null;
  isLoading: boolean;
  error: string | null;
}

interface UserActions {
  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  updateUser: (id: string, userData: Partial<User>) => void;
  removeUser: (id: string) => void;
  setCurrentUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  clearUsers: () => void;
}

type UserStore = UserState & UserActions;

export const useUserStore = create<UserStore>((set, get) => ({
  // State
  users: [],
  currentUser: null,
  isLoading: false,
  error: null,

  // Actions
  setUsers: (users: User[]) => {
    set({ users, error: null });
  },

  addUser: (user: User) => {
    set((state) => ({
      users: [...state.users, user],
      error: null,
    }));
  },

  updateUser: (id: string, userData: Partial<User>) => {
    set((state) => ({
      users: state.users.map((user) =>
        user.id === id ? { ...user, ...userData } : user
      ),
      currentUser:
        state.currentUser?.id === id
          ? { ...state.currentUser, ...userData }
          : state.currentUser,
      error: null,
    }));
  },

  removeUser: (id: string) => {
    set((state) => ({
      users: state.users.filter((user) => user.id !== id),
      currentUser: state.currentUser?.id === id ? null : state.currentUser,
      error: null,
    }));
  },

  setCurrentUser: (user: User | null) => {
    set({ currentUser: user, error: null });
  },

  setLoading: (loading: boolean) => {
    set({ isLoading: loading });
  },

  setError: (error: string | null) => {
    set({ error });
  },

  clearUsers: () => {
    set({
      users: [],
      currentUser: null,
      error: null,
    });
  },
}));
