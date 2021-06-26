import {createSelector} from 'reselect';

const directoryInput = state => state.directory;

export const directorySelector = createSelector(
	[directoryInput],
	item => item.section
)