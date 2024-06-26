package com.noob.framework.constant;

/**
 * 用户常量
 * （存放用户常量信息，包括登录信息、用户访问权限、账号状态等）
 */
public interface UserConstant {

    /**
     * 用户登录态键
     */
    String USER_LOGIN_STATE = "user_login";

    //  region 权限

    /**
     * 默认角色
     */
    String DEFAULT_ROLE = "user";

    /**
     * 管理员角色
     */
    String ADMIN_ROLE = "admin";

    /**
     * 被封号
     */
    String BAN_ROLE = "ban";


    /**
     * 用户状态：激活
     */
    Integer USER_STATUS_ACTIVE = 1;


    /**
     * 用户状态：禁用
     */
    Integer USER_STATUS_FORBID = 0;



    // endregion
}
