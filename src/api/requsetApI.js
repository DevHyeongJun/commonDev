import axios from 'axios';

const Request = (url, _callBack) => {
    axios({
        method: "get",
        url: url,
        responseType: "json"
    }).then(function (response) {
        _callBack(response);
    });
}
export const RequestAPI = {

    getLayerList : () => {
        Request("http://localhost:5050/layer/list", (res) => {
            console.log(res);
        });
    }
}
