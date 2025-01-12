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
} from '@/app/contact/validator/contact.validator';

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

  const updateNameValidatorStatus = (status: ContactNameValidateError) =>
    setNameValidatorStatus(status);

  const updateEmailValidatorStatus = (status: ContactEmailValidateError) =>
    setEmailValidatorStatus(status);

  const updatePhoneValidatorStatus = (status: ContactPhoneValidateError) =>
    setPhoneValidatorStatus(status);

  const updateKindValidatorStatus = (status: ContactKindValidateError) =>
    setKindValidatorStatus(status);

  const updateContentsValidatorStatus = (
    status: ContactContentsValidateError
  ) => setContentsValidatorStatus(status);

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
  };
};
