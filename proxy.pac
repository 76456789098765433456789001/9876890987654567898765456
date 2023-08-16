function FindProxyForURL(url, host) {
    if (shExpMatch(host, "*")) {
        return "DIRECT";
    }
    return "PROXY 0.0.0.0:8888";
}
