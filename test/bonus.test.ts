import axios from 'axios';
import { format, subDays } from 'date-fns';
import { AH } from '../src';
import { Bonus } from '../src/bonus/bonus';

jest.mock('axios');

axios.create = jest.fn().mockReturnThis();
const requestMock = axios.request as jest.Mock;
requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK' }));

describe('AH Bonus', () => {
    it('should return a Bonus object', () => {
        const client = new AH();
        expect(client.bonus()).toBeDefined();
        expect(client.bonus()).toBeInstanceOf(Bonus);
    });

    describe('getCurrentBonus', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.bonus().getCurrentBonus();
            expect(getMock).toHaveBeenCalledWith('mobile-services/bonuspage/v1/metadata', undefined);
        });
    });

    describe('getBonusSection', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.bonus().getBonusSection(1);
            expect(getMock).toHaveBeenCalledWith('mobile-services/bonuspage/v1/spotlight', {
                query: {
                    application: 'AHWEBSHOP',
                    sectionId: '1'
                }
            });
        });
    });

    describe('getBonusSectionFromDate', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            const now = new Date();
            const formattedNow = format(now, 'yyyy-MM-dd');
            await client.bonus().getBonusSectionFromDate(now);
            expect(getMock).toHaveBeenCalledWith('mobile-services/bonuspage/v1/spotlight', {
                query: {
                    application: 'AHWEBSHOP',
                    bonusStartDate: formattedNow
                }
            });
        });
    });

    describe('getProductsFromSegment', () => {
        it('should have been called with default parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            const now = new Date();
            const formattedNow = format(now, 'yyyy-MM-dd');
            await client.bonus().getProductsFromSegment({
                segmentId: 1
            });
            expect(getMock).toHaveBeenCalledWith('mobile-services/bonuspage/v1/segment', {
                query: {
                    segmentId: '1',
                    date: formattedNow,
                    includeActivatableDiscount: 'false'
                }
            });
        });

        it('should have been called with provided options', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            const yesterday = subDays(new Date(), 1);
            const formattedYesterday = format(yesterday, 'yyyy-MM-dd');
            await client.bonus().getProductsFromSegment({
                segmentId: 1,
                date: yesterday,
                includeActivatableDiscount: true
            });
            expect(getMock).toHaveBeenCalledWith('mobile-services/bonuspage/v1/segment', {
                query: {
                    segmentId: '1',
                    date: formattedYesterday,
                    includeActivatableDiscount: 'true'
                }
            });
        });
    });
});
