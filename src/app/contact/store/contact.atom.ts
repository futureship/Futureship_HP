import { initialContactKindSet } from '@/app/contact/store/contact.const';
import { atom } from 'jotai';

export const isEditAtom = atom(true);

export const nameAtom = atom('-');
export const emailAtom = atom('xxxxxxx@xxxx.com');
export const phoneAtom = atom('080-1234-4567');
export const placeAtom = atom('ー');
export const positionAtom = atom('-');
export const kindAtom = atom(initialContactKindSet());
export const filesAtom = atom([] as File[]);
export const contentsAtom = atom('-');
