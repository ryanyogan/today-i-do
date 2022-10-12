import {
  addDoc,
  collection,
  doc,
  DocumentData,
  getDoc,
  getDocs,
  getFirestore,
  limit,
  orderBy,
  query,
  startAfter,
  updateDoc,
  where,
} from "firebase/firestore";
import firebase from "./firebase";

const firestore = getFirestore(firebase);

export const getCollectionWithLimit = async <T>(
  collectionName: string,
  orderByElement: any,
  state: boolean,
  uidUser: string
) => {
  let returnData: any[] = [];

  const docs = await getDocs(
    query(
      collection(firestore, collectionName),
      where("complete", "==", state),
      where("uidUser", "==", uidUser),
      orderBy(orderByElement),
      limit(10)
    )
  );

  docs.forEach((doc: any) => {
    const id = doc.id;
    const data = doc.data();
    returnData.push({
      id,
      ...data,
      createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
      dueAt: new Date(data.dueAt?.seconds * 1000) || null,
      updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null,
    });
  });

  return returnData as T[];
};

export const getCollectionAt = async <T>(
  collectionName: string,
  orderByElement: any,
  lastElement: any,
  state: boolean,
  uidUser: string
) => {
  let returnData: any[] = [];
  const lastDocSnap = await getDoc(doc(firestore, lastElement));

  const docs = await getDocs(
    query(
      collection(firestore, collectionName),
      where("complete", "==", state),
      where("uidUser", "==", uidUser),
      orderBy(orderByElement),
      limit(10),
      startAfter(lastDocSnap)
    )
  );

  docs.forEach((doc) => {
    const id = doc.id;
    const data = doc.data();
    returnData.push({
      id,
      ...data,
      createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
      dueAt: new Date(data.dueAt?.seconds * 1000) || null,
      updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null,
    });
  });

  return returnData as T[];
};

export const getDocument = async <T>(collectionName: string) => {
  const document = getDoc(doc(firestore, collectionName));
  return document.then((doc) => {
    const id = doc.id;
    const data = doc.data();
    return {
      id,
      ...data,
      createdAt: new Date(data?.createdAt?.seconds * 1000) || null,
      dueAt: new Date(data?.dueAt?.seconds * 1000) || null,
      updatedAt: new Date(data?.updatedAt?.seconds * 1000) || null,
    };
  });
};

export const addDocument = async (
  collectionName: string,
  data: DocumentData
) => {
  return await addDoc(collection(firestore, collectionName), data);
};

export const updateDocument = async (
  collectionName: string,
  data: DocumentData
) => {
  return await updateDoc(doc(firestore, collectionName), {
    ...data,
  });
};
