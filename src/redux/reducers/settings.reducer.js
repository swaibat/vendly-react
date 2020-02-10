import constant from '../constants';

const initialState = {
	pending: false,
	payload: null,
	error: null,
};

export const GetSettings = (state = initialState, action) => {
	switch (action.type) {
		case constant.SETTINGS_PENDING:
			return { ...state, pending: true };
		case constant.SETTINGS_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.SETTINGS_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};

export const updateSettings = (state = initialState, action) => {
	switch (action.type) {
		case constant.UPDATE_SETTINGS_PENDING:
			return { ...state, pending: true };
		case constant.UPDATE_SETTINGS_SUCCESS:
			return { ...state, payload: action.payload, pending: false };
		case constant.UPDATE_SETTINGS_ERROR:
			return { ...state, error: action.error, pending: false };
		default:
			return state;
	}
};
