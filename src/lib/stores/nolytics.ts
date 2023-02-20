import { read, sort, type Nolytics } from '@data';
import { createStore, onLoading, setSuccess } from './store';

export const NolyticsStore = createNolyticsStore();

function createNolyticsStore() {
	const store = createStore<Nolytics>();
	const subscribe = store.subscribe;

	return {
		subscribe,
		read: () => onLoading(store, () => read().then((x) => setSuccess(store, sort(x))))
	};
}
