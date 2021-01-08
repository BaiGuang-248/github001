// 写入 Cookie
const set = (name, value, { maxAge, domin, path, secure } = {}) => {
    let cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

    if (typeof maxAge === 'number') {
        cookieText += `; max-age=${maxAge}`;
    }

    if (domin) {
        cookieText += `; domin=${domin}`;
    }

    if (path) {
        cookieText += `; path=${path}`;
    }

    if (secure) {
        cookieText += `; secure`;
    }

    document.cookie = cookieText;
};

//通过 name 获取 cookie 的值
const get = name => {
    name = `${encodeURIComponent(name)}`;

    const cookies = document.cookie.split('; ');

    for (const item of cookies) {
        const [cookieName, cookieValue] = item.split('=');

        if (cookieName === name) {
            return decodeURI(cookieValue);
        }
    }

    return;
}

//根据 name、domin、和 path 删除 Cookie
const remove = (name, { domin, path } = {}) => {
    set(name, '', { domin, path, maxAge: -1 });
};

export { set, get, remove};