import { useAtom } from 'jotai';
import {
  contentsAtom,
  emailAtom,
  filesAtom,
  isEditAtom,
  kindAtom,
  nameAtom,
  phoneAtom,
  placeAtom,
  positionAtom,
} from './contact.atom';
import { ContactKindSet } from '@/app/contact/store/contact.const';

export const useContactViewModel = () => {
  const [name, setName] = useAtom(nameAtom);
  const [email, setEmail] = useAtom(emailAtom);
  const [phone, setPhone] = useAtom(phoneAtom);
  const [place, setPlace] = useAtom(placeAtom);
  const [position, setPosition] = useAtom(positionAtom);
  const [kind, setKind] = useAtom(kindAtom);
  const [contents, setContents] = useAtom(contentsAtom);
  const [files, setFiles] = useAtom(filesAtom);
  const [isEdit, setIsEdit] = useAtom(isEditAtom);

  // const increment = () => setCount((prev) => prev + 1);
  // const decrement = () => setCount((prev) => prev - 1);
  const updateName = (newName: string) => setName(newName);
  const updateEmail = (newEmail: string) => setEmail(newEmail);
  const updatePhone = (newPhone: string) => setPhone(newPhone);
  const updatePlace = (newPlace: string) => setPlace(newPlace);
  const updatePosition = (newPosition: string) => setPosition(newPosition);
  const updateKind = (newKind: ContactKindSet) => setKind(newKind);
  const updateContents = (newContents: string) => setContents(newContents);
  const updateFiles = (newFiles: File[]) => setFiles(newFiles);
  const updateIsEdit = (newIsEdit: boolean) => setIsEdit(newIsEdit);

  return {
    name,
    updateName,
    email,
    updateEmail,
    phone,
    updatePhone,
    place,
    updatePlace,
    position,
    updatePosition,
    kind,
    updateKind,
    contents,
    updateContents,
    files,
    updateFiles,
    isEdit,
    updateIsEdit,
  };
};
