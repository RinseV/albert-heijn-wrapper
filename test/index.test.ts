import axios from 'axios';
import { AH } from '../src';

jest.mock('axios');

axios.create = jest.fn().mockReturnThis();
const requestMock = axios.request as jest.Mock;

describe('AH client', () => {
    it('should create a client object', () => {
        requestMock.mockImplementation(() => Promise.resolve({ data: {}, statusText: 'OK' }));
        const client = new AH();
        expect(client).toBeDefined();
    });

    it('should make a GET request', async () => {
        requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK', data: { message: 'Hello World' } }));
        const client = new AH();
        const resopnse = await client.get('/');
        expect(resopnse).toEqual({ message: 'Hello World' });
    });

    it('should error from the GET request', async () => {
        requestMock.mockImplementation(() => Promise.reject({ statusText: 'Internal Server Error' }));
        const client = new AH();
        try {
            await client.get('/');
        } catch (error) {
            expect(error).toBeDefined();
        }
    });

    it('should make a POST request', async () => {
        requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK', data: { message: 'Hello World' } }));
        const client = new AH();
        const resopnse = await client.post('/', {});
        expect(resopnse).toEqual({ message: 'Hello World' });
    });

    it('should error from the POST request', async () => {
        requestMock.mockImplementation(() => Promise.reject({ statusText: 'Internal Server Error' }));
        const client = new AH();
        try {
            await client.post('/', {});
        } catch (error) {
            expect(error).toBeDefined();
        }
    });

    it('should log the request in the console', async () => {
        requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK' }));
        const logSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
        const client = new AH({
            verbose: true
        });
        await client.get('/', undefined, true);
        // GET request should have 7 logs (3 from GET, 4 from token request)
        expect(logSpy).toHaveBeenCalledTimes(7);
    });

    it('should create default headers', async () => {
        requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK' }));
        const client = new AH();
        const headers = await client.createHeader();
        expect(headers).toStrictEqual({
            'Content-Type': 'application/json',
            'User-Agent': 'ah-wrapper',
            'x-client-name': 'Appie',
            'x-clientversion': '8.21.2',
            'x-application': 'AHWEBSHOP'
        });
    });

    it('should add auth headers when required', async () => {
        requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK', data: { access_token: 'token' } }));
        const client = new AH();
        const headers = await client.createHeader(true);
        expect(headers).toStrictEqual({
            'Content-Type': 'application/json',
            'User-Agent': 'ah-wrapper',
            'x-client-name': 'Appie',
            'x-clientversion': '8.21.2',
            'x-application': 'AHWEBSHOP',
            Authorization: 'Bearer token'
        });
    });

    it('should create properly formatted URL form query', () => {
        requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK' }));
        const client = new AH();
        const url = client.createURL('', {
            test: 'test'
        });
        expect(url).toBe('https://api.ah.nl/?test=test');
    });
});
