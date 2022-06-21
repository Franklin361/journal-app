import { authSlice, login, logout, checkingCredentials } from '../../../src/redux/auth/authSlice';
import { authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures';

describe.skip('📂 authSlice.ts', () => {
   test('🟣 Should return initial state and be called "auth"', () => {
      const state = authSlice.reducer(initialState, {} as any);

      expect(state).toEqual(initialState);
      expect(authSlice.name).toBe('auth');
   });

   test('🟣 Should do the authentication successfully', () => {
      const state = authSlice.reducer(initialState, login(demoUser));
      expect(state).toEqual({
         status: 'authenticated',
         uid: demoUser.uid,
         email: demoUser.email,
         displayName: demoUser.displayName,
         photoURL: demoUser.photoURL
      });
   });

   test('🟣 Should do Log-out successfully without arguments', () => {
      const state = authSlice.reducer(authenticatedState, logout());
      expect(state).toEqual({
         status: 'not-authenticated',
         uid: null,
         email: null,
         displayName: null,
         photoURL: null,
      })
   });
   

  test('🟣 Should change the state to checking', () => {

      const state = authSlice.reducer( authenticatedState, checkingCredentials() );
      expect( state.status ).toBe('checking');
  });

})