function FindProxyForURL(url, host) {
    // Directly connect to example.com
    if (shExpMatch(host, "example.com")) {
        return "DIRECT";
    }

    // Route all other traffic through the proxy
    return "PROXY 0.0.0.0:8888";
}