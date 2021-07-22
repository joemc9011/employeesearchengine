import axios from "axios";

const BASEURL = "https://randomuser.me/api/?results=80";

export default {
    getAllEmployees: function (query) {
        return axios.get(BASEURL);
    },

};