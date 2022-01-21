import { IAuthor }                           from '@shared/models/Author';
import { IImage }                            from '@shared/domain/config.interface';
import { ECardImageHeightSize, ICardConfig } from '@shared/modules/card/domain/config.interface';

export interface ICollection {
  id: string | number;
  name: string;
  description: string;
  image: IImage;
  author: IAuthor;
}

export class Collection implements ICollection {
  id: string | number;
  name: string;
  description: string;
  image: IImage;
  author: IAuthor;

  constructor(collection: ICollection) {
    this.id = collection.id;
    this.name = collection.name;
    this.description = collection.description;
    this.image = collection.image;
    this.author = collection.author;
  }

  static convertToCardConfig(collection: ICollection): ICardConfig {
    return {
      title: collection.name,
      description: collection.description,
      image: {
        ...collection.image,
        height: ECardImageHeightSize.medium
      },
      author: collection.author,
      textAlign: 'center'
    };
  }
}
