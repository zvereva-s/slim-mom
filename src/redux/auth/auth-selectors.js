export const isLogin = ({ auth }) => auth.isLogin;
export const auth = ({ auth }) => auth;
export const user = ({ auth }) => auth.user;
export const healthyData = ({ auth }) => auth.user.healthyData;
