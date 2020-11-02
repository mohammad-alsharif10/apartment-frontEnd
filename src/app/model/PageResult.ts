import {BaseResponse} from './BaseResponse';
import {BasicModel} from './BasicModel';

export class PageResult<T extends BasicModel> extends BaseResponse {

  data: T[] = [];
  totalElements: number;
  numberOfPages: number;


  // constructor(errorStatus: boolean, responseStatus: number, message: string, data: T[], totalElements: number, numberOfPages: number) {
  //   super(errorStatus, responseStatus, message);
  //   this.data = data;
  //   this.totalElements = totalElements;
  //   this.numberOfPages = numberOfPages;
  // }
}
