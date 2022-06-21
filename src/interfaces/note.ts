

export interface Note{
    id: string;
    title?: string;
    body?: string;
    date?: number;
    imageUrls?: string[];
}


export interface NoteState {
    isSaving: boolean;
    notes: Note[];
    active: Note | null;
    nextNote: Note | null;
}
