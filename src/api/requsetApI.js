import axios from 'axios';

const Request = (url, opt, _callBack) => {
    axios({
        method: opt.method||"get",
        url: url,
        data:opt.param,
        responseType: "json"
    }).then(function (response) {
        _callBack(response);
    });
}
export const RequestAPI = {

    getLayerList : (param, callBack) => {
        Request("http://localhost:5050/layer/list", (res) => {
            callBack(res.data);
        });
    },

    initDbConn : (param, callBack) => {
        Request("http://localhost:5050/dbconn/init", { param, method:'post'}, (res) => {
            callBack(res.data);
        });
    }
}
