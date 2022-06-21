import { AuhtState } from "../../src/interfaces"

export const initialState:AuhtState = {
    status: 'checking',
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
}

export const authenticatedState: AuhtState = {
    status: 'authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: '123ABC',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://demo.jpg'
}

export const notAuthenticatedState: AuhtState = {
    status: 'not-authenticated', // 'checking', 'not-authenticated', 'authenticated'
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
}

type User = Pick<AuhtState, 'displayName' | 'email' | 'photoURL' |'uid'>

export const demoUser: User = {
    uid: 'ABC123',
    email: 'demo@google.com',
    displayName: 'Demo User',
    photoURL: 'https://foto.jpg'
}