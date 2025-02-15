import {
  contactKindEnumKeys,
  ContactKindSet,
} from '@/app/contact/store/contact.const';

export const ContactNameValidateError = {
  noError: 0,
  nameEmpty: 1,
} as const;
export type ContactNameValidateError =
  (typeof ContactNameValidateError)[keyof typeof ContactNameValidateError];

export const ContactEmailValidateError = {
  noError: 0,
  emailEmpty: 2,
  emailInvalid: 3,
} as const;
export type ContactEmailValidateError =
  (typeof ContactEmailValidateError)[keyof typeof ContactEmailValidateError];

export const ContactPhoneValidateError = {
  noError: 0,
  phoneEmpty: 4,
  phoneInvalid: 5,
} as const;
export type ContactPhoneValidateError =
  (typeof ContactPhoneValidateError)[keyof typeof ContactPhoneValidateError];

export const ContactKindValidateError = {
  noError: 0,

  kindEmpty: 6,
} as const;
export type ContactKindValidateError =
  (typeof ContactKindValidateError)[keyof typeof ContactKindValidateError];

export const ContactContentsValidateError = {
  noError: 0,
  contentsEmpty: 7,
} as const;
export type ContactContentsValidateError =
  (typeof ContactContentsValidateError)[keyof typeof ContactContentsValidateError];

export namespace ContactsValidator {
  export function getContactNameValidateErrorCode(name: string) {
    if (name === '') {
      return ContactNameValidateError.nameEmpty;
    }
    return ContactNameValidateError.noError;
  }

  export function getContactEmailValidateErrorCode(email: string) {
    if (email === '') {
      return ContactEmailValidateError.emailEmpty;
    }

    if (!checkEmailPattern(email)) {
      return ContactEmailValidateError.emailInvalid;
    }

    return ContactEmailValidateError.noError;
  }

  export function getContactPhoneValidateErrorCode(phone: string) {
    if (phone === '') {
      return ContactPhoneValidateError.phoneEmpty;
    }

    if (!checkPhonePattern(phone)) {
      return ContactPhoneValidateError.phoneInvalid;
    }

    return ContactPhoneValidateError.noError;
  }

  export function getContactKindValidateErrorCode(kind: ContactKindSet) {
    const isExistsContactKind = contactKindEnumKeys().some((key) => {
      return kind[key as keyof ContactKindSet];
    });

    if (!isExistsContactKind) {
      return ContactKindValidateError.kindEmpty;
    }

    return ContactKindValidateError.noError;
  }

  export function getContactContentsValidateErrorCode(
    contents: string,
    files: File[]
  ) {
    if (contents === '' && files.length === 0) {
      return ContactContentsValidateError.contentsEmpty;
    }

    return ContactContentsValidateError.noError;
  }
}

function checkEmailPattern(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // メールアドレスの正規表現
  return emailPattern.test(email);
}

function checkPhonePattern(phone: string): boolean {
  const phonePattern = /^\d{10,11}$/; // 10桁または11桁の数字のみを許可
  return phonePattern.test(phone); // 正規表現にマッチするかをチェック
}
