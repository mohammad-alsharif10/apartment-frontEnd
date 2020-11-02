import {BaseResponse} from './BaseResponse';
import {BasicModel} from './BasicModel';

export class SingleResult<T extends BasicModel> extends BaseResponse {
  data: T;


  // constructor(errorStatus: boolean, responseStatus: number, message: string, data: T) {
  //   super(errorStatus, responseStatus, message);
  //   this.data = data;
  // }
}
