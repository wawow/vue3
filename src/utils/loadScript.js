const loadScript = (code, url, id, onload) => {
    const scriptDom = document.getElementById(id);

    if (scriptDom != null) {
        document.body.removeChild(scriptDom);
    }

    const script = document.createElement('script');

    script.setAttribute('id', id);
    script.type = 'text/javascript';
    onload && (script.onload = onload);

    if (code) {
        try {
            script.appendChild(document.createTextNode(code));
        } catch (ex) {
            script.text = code;
        }
    } else {
        script.src = url;
    }

    setTimeout(() => {
        document.body.appendChild(script);
    }, 0);
};

export const loadAsyncScript = (url) => {
    const script = document.createElement('script');

    script.type = 'text/javascript';

    url = url.substr(0,7).toLowerCase() === "http://" ? url : window.location.protocol + url;

    let srcArr = document.getElementsByTagName('script');
    let scriptSrc = [];
    let hasLoaded = true;

    // 获取页面上引入JS集合，如果已经存在则不重复增加
    for (let i = 0; i < srcArr.length; i++) {
        scriptSrc.push(srcArr[i].src);
    }
    hasLoaded = !scriptSrc.includes(url);

    return new Promise((resolve, reject) => {
        try {
            if(hasLoaded){
                script.src = url;
                document.body.appendChild(script);
                script.addEventListener('load', () => {
                    resolve(true);
                }, false);
            }else{
                resolve(true);
            }
        } catch (e) {
            reject(e);
        }
    });
};

export default loadScript;
