
type Status = 'checking' | 'not-authenticated' | 'authenticated'


export interface AuhtState {
    status: Status
    uid: string | null,
    email: string | null,
    displayName: string | null,
    photoURL: string | null,
}