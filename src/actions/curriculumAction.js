import * as types from '../constants/actionTypes';
import * as curriculumApi from '../apis/curriculumApi';

export function getCurriculum(value, token) {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_CURRICULUM
        });
        curriculumApi.curriculumApi(value, token)
            .then(function (response) {
                dispatch({
                    type: types.GET_CURRICULUM_SUCCESS,
                    data: response.data,
                });
            })
            .catch(function (error) {
                throw (error);
            });
    }
}