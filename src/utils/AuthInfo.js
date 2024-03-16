import Storage from '@utils/Storage';

async function getUserAccountInfo() {
    return await Storage.get("userAccountInfo")
}

async function setUserAccountInfo(data) {
    return await Storage.set("userAccountInfo", data)
}

async function logoutUser() {
    return await Storage.set("userAccountInfo", null)
}

export default { getUserAccountInfo, setUserAccountInfo, logoutUser};
