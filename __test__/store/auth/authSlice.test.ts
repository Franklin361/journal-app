import { authSlice } from '../../../src/redux/auth/authSlice';
import { initialState } from '../../fixtures/authFixtures';

describe('📂 authSlice.ts', () => {
     test('🗒️ Should return initial state and be called "auth"', async () => {
        const state = authSlice.reducer( initialState, {} as any);

        expect( state ).toEqual( initialState );
        expect( authSlice.name ).toBe('auth');
     });
})