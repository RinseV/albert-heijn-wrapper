import axios from 'axios';
import { AH } from '../src';
import { TokenHandler } from '../src/auth/tokenHandler';

jest.mock('axios');

axios.create = jest.fn().mockReturnThis();
const requestMock = axios.request as jest.Mock;
requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK', data: { access_token: 'token' } }));

describe('TokenHandler', () => {
    it('should generate a token', async () => {
        const client = new AH();
        const tokenHandler = new TokenHandler(client);
        await tokenHandler.Ready;
        const token = await tokenHandler.getToken();
        expect(token).toStrictEqual({ access_token: 'token' });
    });
});
