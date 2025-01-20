import { initialContactKindSet } from '@/app/contact/store/contact.const';
import { atom } from 'jotai';

export const isEditAtom = atom(true);

export const nameAtom = atom('');
export const emailAtom = atom('');
export const phoneAtom = atom('');
export const placeAtom = atom('-');
export const positionAtom = atom('-');
export const kindAtom = atom(initialContactKindSet());
export const filesAtom = atom([] as File[]);
export const contentsAtom = atom('');
