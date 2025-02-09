// __mocks__/firebase.js
export const createUserWithEmailAndPassword = jest.fn();
export const signInWithEmailAndPassword = jest.fn();
export const signOut = jest.fn();
export const getAuth = jest.fn(() => ({
    currentUser: { uid: '123' },
}));
export const getFirestore = jest.fn();
export const addDoc = jest.fn();
