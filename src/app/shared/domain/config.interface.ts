import { EventEmitter } from '@angular/core';

export interface IActionButton extends IButton {
  code?: string;
}

export interface IButton {
  label: string;
  icon?: string;
  action: ($event: any, emitter?: EventEmitter<any>) => void;
  color?: MaterialColorType;
  disabled?: boolean;
}

export interface IImage {
  src: string;
  alt?: string;
}

export type MaterialColorType = 'primary' | 'accent' | 'warn';
export type textAlignType = 'left' | 'center' | 'right';
