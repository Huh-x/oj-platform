import ACCESS_ENUM from "@/access/accessEnum";

/**
 * 检查权限（判断当前登陆用户是否具有登陆权限）
 * @param loginUser 当前登陆用户
 * @param needAccess 需要有的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess = ACCESS_ENUM.NOT_LOGIN) => {
  //获取当前登陆用户具有的权限(如果没有 loginUser，则表示未登录)
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  //如果用户登陆才能访问
  if (needAccess === ACCESS_ENUM.USER) {
    //如果用户登陆，那么表示无权限
    if (loginUserAccess !== ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
  }
  //如果需要管理员权限
  if (needAccess === ACCESS_ENUM.ADMIN) {
    //如果不为管理员，那么表示无权限
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
  }
  return true;
};
export default checkAccess;