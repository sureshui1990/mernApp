import { SAVE_COMMENT }  from 'actions/type.js';


export const addComment = (comment) => {
    return {
        type: SAVE_COMMENT,
        payload: comment
    }
};