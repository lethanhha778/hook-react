import { SUBMIT } from '../types/fakeFBType';


export const addCommentAction = (userComment) => {
    return {
        type: SUBMIT,
        userInfo: {
            ...userComment,
            avt: `https://i.pravatar.cc/?u=${userComment.username}`
        }
    }
}