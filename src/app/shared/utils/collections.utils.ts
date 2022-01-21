import { ECardImageHeightSize, ICardConfig } from '@shared/modules/card/domain/config.interface';
import { getRandomInt }                      from '@shared/utils/main.utils';
import { IBannerConfig }                     from '@shared/modules/banner/domain/config.interface';
import { ICategory }                         from '@shared/models/Category';
import { ICollection }                       from '@shared/models/Collection';

class CollectionsUtils {
  static getFakeCollectionList = () => {
    const fakeCollection: ICollection[] = [];
    const fakeCollectionLength = getRandomInt(1, 10);

    for (let i = 0; i < fakeCollectionLength; i++) {
      fakeCollection.push({
        id: getRandomInt(1, 100),
        name: `Fake collection ${i}`,
        description: `Fake collection ${i} description`,
        image: {
          src: 'https://picsum.photos/1280?random=' + getRandomInt(1, 20),
          alt: 'Fake collection'
        },
        author: {
          id: getRandomInt(1, 100).toString(),
          name: `Fake collection ${i} author`,
          avatar: 'https://picsum.photos/200/300',
          url: 'https://picsum.photos/200/300'
        },
      });
    }

    return fakeCollection;
  };

  static getFakeCollectionsConfig = (): ICardConfig[] => Array.of(this.getFakeCollectionConfig(), this.getFakeCollectionConfig(), this.getFakeCollectionConfig());

  static getFakeCollectionConfig = (): ICardConfig => ({
    title: 'Collection 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    textAlign: 'center',
    image: {
      src: 'https://picsum.photos/1280?random=' + getRandomInt(1, 20),
      alt: 'Collection 1',
      height: ECardImageHeightSize.extraLarge
    },
    action: {
      label: 'Live',
      action: ($event, emitter) => {
        emitter?.emit('live');
      },
    }
  });

  static getDummyBanner = (): IBannerConfig => ({
    image: {
      src: 'https://picsum.photos/1280?random=' + getRandomInt(1, 20),
      alt: 'Banner 1'
    }
  });

  // @ts-ignore
  static getDummyCategory = ({id, order}?): ICategory => ({
    id: id || '1',
    name: `Category ${ id }`,
    image: {
      src: 'https://picsum.photos/1280?random=' + getRandomInt(1, 20),
      alt: `Category ${ id }`,
    },
    order: order || 0,
    createdAt: new Date().toString(),
    updatedAt: new Date().toString(),
  });

  static getDummyCategoryList = () => Array.of(
    this.getDummyCategory({id: 1, order: 1}),
    this.getDummyCategory({id: 2, order: 2}),
    this.getDummyCategory({id: 3, order: 3}));
}

// Dummy data
export const getFakeCollectionsCardConfig = CollectionsUtils.getFakeCollectionsConfig;
export const getFakeCollectionList = CollectionsUtils.getFakeCollectionList;
export const getFakeCategories = CollectionsUtils.getDummyCategoryList;
export const getDummyBanner = CollectionsUtils.getDummyBanner;

