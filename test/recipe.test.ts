import axios from 'axios';
import {
    AH,
    ContentRecipeFilterOptions,
    CourseRecipeFilterOptions,
    DishTypeRecipeFilterOptions,
    KitchenOriginRecipeFilterOptions,
    OftenUsedRecipeFilterOptions,
    Recipe,
    RecipeSortOptions,
    SeasonRecipeFilterOptions,
    SpecialOccasionRecipeFilterOptions,
    TechniqueRecipeFilterOptions,
    WishesRecipeFilterOptions
} from '../src';

jest.mock('axios');

axios.create = jest.fn().mockReturnThis();
const requestMock = axios.request as jest.Mock;
requestMock.mockImplementation(() => Promise.resolve({ statusText: 'OK' }));

describe('AH Recipe', () => {
    it('should return a Recipe object', () => {
        const client = new AH();
        expect(client.recipe()).toBeDefined();
        expect(client.recipe()).toBeInstanceOf(Recipe);
    });

    describe('getRecipeFromId', () => {
        it('should have been called with correct parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.recipe().getRecipeFromId(1);
            expect(getMock).toHaveBeenCalledWith('mobile-services/recipes/v1/recipe/1', undefined);
        });
    });

    describe('getRecipeFromName', () => {
        it('should have been called with default parameters', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.recipe().getRecipeFromName('test');
            expect(getMock).toHaveBeenCalledWith('mobile-services/recipes/v2/search', {
                query: {
                    query: 'test',
                    filters: '',
                    sortBy: '',
                    page: '0',
                    size: '10'
                }
            });
        });

        it('should have been called with provided options', async () => {
            const client = new AH();
            const getMock = jest.spyOn(client, 'get');
            getMock.mockImplementation(() => Promise.resolve({}));
            await client.recipe().getRecipeFromName('test', {
                filter: {
                    oftenUsedFilter: OftenUsedRecipeFilterOptions.Budget,
                    courseFilter: CourseRecipeFilterOptions.Main,
                    dishTypeFilter: DishTypeRecipeFilterOptions.Pasta,
                    contentFilter: ContentRecipeFilterOptions.Meat,
                    wishesFilter: WishesRecipeFilterOptions.Healthy,
                    occasionFilter: SpecialOccasionRecipeFilterOptions.Treat,
                    seasonFilter: SeasonRecipeFilterOptions.Winter,
                    techniqueFilter: TechniqueRecipeFilterOptions.Frying,
                    originFilter: KitchenOriginRecipeFilterOptions.Dutch
                },
                sort: RecipeSortOptions.Relevant,
                page: 1,
                size: 20
            });
            expect(getMock).toHaveBeenCalledWith('mobile-services/recipes/v2/search', {
                query: {
                    query: 'test',
                    filters: `veel-gebruikt:${OftenUsedRecipeFilterOptions.Budget}|menugang:${CourseRecipeFilterOptions.Main}|soort-gerecht:${DishTypeRecipeFilterOptions.Pasta}|recepten-met:${ContentRecipeFilterOptions.Meat}|speciale-wensen:${WishesRecipeFilterOptions.Healthy}|momenten:${SpecialOccasionRecipeFilterOptions.Treat}|seizoen:${SeasonRecipeFilterOptions.Winter}|kooktechniek:${TechniqueRecipeFilterOptions.Frying}|keuken:${KitchenOriginRecipeFilterOptions.Dutch}`,
                    sortBy: RecipeSortOptions.Relevant,
                    page: '1',
                    size: '20'
                }
            });
        });
    });
});
