import 'setimmediate';
import 'whatwg-fetch'; // <-- moch fetch in test
import { config } from 'dotenv';


config({
    path: '.env'
});

jest.mock('./src/utils/getEnvironments', () => ({
    getEnvironments: () => ({ ...process.env })
}));