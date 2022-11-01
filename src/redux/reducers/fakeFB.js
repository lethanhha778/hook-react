import '../types/fakeFBType'
import { SUBMIT } from '../types/fakeFBType';
const initialState = {
    mangComment :[
        {username:'user123',comment:'ahihi', avt:'https://i.pravatar.cc/?u=1999'},
        {username:'user124',comment:'ahihihi', avt:'https://i.pravatar.cc/?u=1998'},

    ]
    
}

export const fakeFB  = (state = initialState, action) => {
  switch (action.type) {
  case SUBMIT:
    state.mangComment = [...state.mangComment, action.userInfo]
    console.log(state);
    return {...state}
  default:
    return state
  }
}
