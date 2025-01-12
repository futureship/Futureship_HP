import {
  ContactContentsValidateError,
  ContactEmailValidateError,
  ContactKindValidateError,
  ContactNameValidateError,
  ContactPhoneValidateError,
} from '@/app/contact/validator/contact.validator';
import { atom } from 'jotai';

export const nameValidatorStatusAtom = atom<ContactNameValidateError>(
  ContactNameValidateError.noError
);
export const emailValidatorStatusAtom = atom<ContactEmailValidateError>(
  ContactEmailValidateError.noError
);
export const phoneValidatorStatusAtom = atom<ContactPhoneValidateError>(
  ContactPhoneValidateError.noError
);
export const kindValidatorStatusAtom = atom<ContactKindValidateError>(
  ContactKindValidateError.noError
);
export const contentsValidatorStatusAtom = atom<ContactContentsValidateError>(
  ContactContentsValidateError.noError
);
