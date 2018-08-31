import { Async, Basic } from 'redux-tools/types';
import { generateActionsAndTypes } from 'redux-tools';

export const { actions, types } = generateActionsAndTypes('app', [new Basic('INIT'), new Async('SAVE')]);
