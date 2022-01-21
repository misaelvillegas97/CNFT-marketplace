import { IActionButton, textAlignType } from '@shared/domain/config.interface';
import { IAuthor }                      from '@shared/models/Author';

export interface ICardConfig {
  title: string;
  description?: string;
  author?: IAuthor;
  textAlign?: textAlignType;
  image?: ICardImage;
  action?: IActionButton;
  secondaryAction?: IActionButton;
}

export interface ICardImage {
  src: string;
  alt?: string;
  height?: ICardImageHeightSize;
}

export type ICardImageHeightSize = ECardImageHeightSize;

export enum ECardImageHeightSize {
  small = '150px',
  medium = '300px',
  large = '400px',
  extraLarge = '500px',
}

