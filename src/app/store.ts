import { STORE_DATA,FETCH_DATA } from './actions';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface IAppState {
    result: string
   
}
export const INITIAL_STATE: IAppState = {
    result:""
    
}

export  function rootReducer(state: any, action:any): any {
    switch (action.type) {
        case STORE_DATA:
            return Object.assign({}, state, {
                result: action.fetchdata
            });
        case FETCH_DATA:
            return state
        
    }
    return state;
}