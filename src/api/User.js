import {publicRequest} from './requestMethod';
const UserApi = {
    getAllUser: () => {
        const url = '/user';
        return publicRequest.get(url);

    },
    getUserById: (id) => {
        const url = '/user/:id';
        return publicRequest.get(url,  id );
    },
};
export default UserApi;
