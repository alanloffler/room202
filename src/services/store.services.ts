// Zustand store used for global states (sidebar, authorization, token and user loggedin)
// Values are stored in session storage, and can be accessed from any component at any level.
// TODO: see if store doesn't use session storage, how the app will act with refreshing the page
// Zustand imports
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
// Types
type State = {
	isOpen: boolean;
	clicked: number;
	authorized: boolean;
	authToken: string;
	userId: number;
	tabActive: string;
};

type Actions = {
	isClicked: (item: number) => void;
	toggleOpen: () => void;
	setAuthorized: (token: boolean) => void;
	setAuthToken: (token: string) => void;
	setUserId: (id: number) => void;
	setTabActive: (tab: string) => void;
	reset: () => void;
};

const initialState: State = {
	isOpen: false,
	clicked: 0,
	authorized: false,
	authToken: '',
	userId: 0,
	tabActive: 'card'
};

export const store = create<State & Actions>()(
	persist(
		(set, get) => ({
			isOpen: false,
			toggleOpen: () => {
				const actualState = get().isOpen;
				set({ isOpen: !actualState });
			},
			clicked: 0,
			isClicked: (item) => {
				set(() => ({ clicked: item }));
			},
			authorized: false,
			setAuthorized: (token) => {
				set(() => ({ authorized: token }));
			},
			authToken: '',
			setAuthToken: (token) => {
				set(() => ({ authToken: token }));
			},
			userId: 0,
			setUserId: (id) => {
				set(() => ({ userId: id }));
			},
			tabActive: '',
			setTabActive: (tab: string) => {
				set(() => ({ tabActive: tab }));
			},
			reset: () => set(initialState)
		}),
		{
			name: 'sidebar-clicked',
			storage: createJSONStorage(() => sessionStorage)
		}
	)
);
