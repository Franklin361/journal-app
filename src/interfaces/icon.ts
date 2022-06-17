import { IconBaseProps } from 'react-icons';

export type NameIcon = 'twitter' | 'github' | 'linkedin' |'instagram' 
|'tiktok' |'log-in' |'log-out' | 'google' | 'hash' | 'menu' |'mark'
| 'mark-fill'| 'arrow-double'| 'add-note'| 'save'| 'moon' |'sun'| 'upload' | 'close'

export interface PropsIcon extends IconBaseProps {
    name: NameIcon;
}