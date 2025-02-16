import { useAtom } from 'jotai';

import _ from 'lodash';
import {
  contentsValidatorStatusAtom,
  emailValidatorStatusAtom,
  kindValidatorStatusAtom,
  nameValidatorStatusAtom,
  phoneValidatorStatusAtom,
} from '@/app/contact/validator/contact-validate-status.atom';
import {
  ContactContentsValidateError,
  ContactEmailValidateError,
  ContactKindValidateError,
  ContactNameValidateError,
  ContactPhoneValidateError,
  ContactsValidator,
} from '@/app/contact/validator/contact.validator';
import { ContactKindSet } from '@/app/contact/store/contact.const';

export const useContactValidateStatusViewModel = () => {
  const [nameValidatorStatus, setNameValidatorStatus] = useAtom(
    nameValidatorStatusAtom
  );
  const [emailValidatorStatus, setEmailValidatorStatus] = useAtom(
    emailValidatorStatusAtom
  );
  const [phoneValidatorStatus, setPhoneValidatorStatus] = useAtom(
    phoneValidatorStatusAtom
  );
  const [kindValidatorStatus, setKindValidatorStatus] = useAtom(
    kindValidatorStatusAtom
  );
  const [contentsValidatorStatus, setContentsValidatorStatus] = useAtom(
    contentsValidatorStatusAtom
  );

  const updateNameValidatorStatus = async (name: string) => {
    const errorStatus = ContactsValidator.getContactNameValidateErrorCode(name);
    console.log(errorStatus);
    setNameValidatorStatus(errorStatus);
    await new Promise<void>((resolve) => {
      resolve();
    });
  };

  const updateEmailValidatorStatus = (email: string) => {
    const errorStatus =
      ContactsValidator.getContactEmailValidateErrorCode(email);
    setEmailValidatorStatus(errorStatus);
  };

  const updatePhoneValidatorStatus = (phone: string) => {
    const errorStatus =
      ContactsValidator.getContactPhoneValidateErrorCode(phone);
    setPhoneValidatorStatus(errorStatus);
  };

  const updateKindValidatorStatus = (kind: ContactKindSet) => {
    const errorStatus = ContactsValidator.getContactKindValidateErrorCode(kind);
    setKindValidatorStatus(errorStatus);
  };

  const updateContentsValidatorStatus = (contents: string, files: File[]) => {
    const errorStatus = ContactsValidator.getContactContentsValidateErrorCode(
      contents,
      files
    );
    setContentsValidatorStatus(errorStatus);
  };

  // HACK ogawa: 引数が必要ないはず。方法思いつけばなんとかしたい。
  const isExistsValidatorError = (
    name: string,
    email: string,
    phone: string,
    kind: ContactKindSet,
    contents: string,
    files: File[]
  ) => {
    return (
      ContactsValidator.getContactNameValidateErrorCode(name) !==
        ContactNameValidateError.noError ||
      ContactsValidator.getContactEmailValidateErrorCode(email) !==
        ContactEmailValidateError.noError ||
      ContactsValidator.getContactPhoneValidateErrorCode(phone) !==
        ContactPhoneValidateError.noError ||
      ContactsValidator.getContactKindValidateErrorCode(kind) !==
        ContactKindValidateError.noError ||
      ContactsValidator.getContactContentsValidateErrorCode(contents, files) !==
        ContactContentsValidateError.noError
    );
  };

  return {
    nameValidatorStatus,
    updateNameValidatorStatus,
    emailValidatorStatus,
    updateEmailValidatorStatus,
    phoneValidatorStatus,
    updatePhoneValidatorStatus,
    kindValidatorStatus,
    updateKindValidatorStatus,
    contentsValidatorStatus,
    updateContentsValidatorStatus,
    isExistsValidatorError,
  };
};
