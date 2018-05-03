export function formatImageLink(url){
    if(url == null) {
        return "http://"
    }
    else if(url.indexOf("http://") === -1 && url.split("://")[0] !== "https"){
        return "http://" + url
    }
    else {
        return url
    }
}