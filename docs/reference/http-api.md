---
layout: docwithnav
assignees:
- ashvayka
title: HTTP Device API Reference
description: Supported HTTP API Reference for IoT Devices
redirect_from: "/docs/reference/http-api"

server-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/server-side-rpc-http-1-ce.png
        title: 'Use RPC debug terminal dashboard'
    1:
        image: /images/reference/device-connectivity-apis/server-side-rpc-http-2-ce.png
        title: 'Subscribe to RPC commands from the server. To do this, in the first terminal window send GET request with observe flag'
    2:
        image: /images/reference/device-connectivity-apis/server-side-rpc-http-3-ce.png
        title: 'Send an RPC request "connect" to the device'
    3:
        image: /images/reference/device-connectivity-apis/server-side-rpc-http-4-ce.png
        title: 'In the second terminal window simulate send a response from the device to the server'
    4:
        image: /images/reference/device-connectivity-apis/server-side-rpc-http-5-ce.png
        title: 'You should receive a response from the device: {"result":"ok"}'

client-side-rpc:
    0:
        image: /images/reference/device-connectivity-apis/client-side-rpc-1-ce.png
        title: 'Add two nodes to the Rule Chain: "script" and "rpc call reply"'
    1:
        image: /images/reference/device-connectivity-apis/client-side-rpc-2-ce.png
        title: 'In the script node enter the function: return {msg: {time:String(new Date())}, metadata: metadata, msgType: msgType};'
    2:
        image: /images/reference/device-connectivity-apis/client-side-rpc-3-ce.png
    3:
        image: /images/reference/device-connectivity-apis/client-side-rpc-http-4-ce.png
        title: 'Send request to the server'
    4:
        image: /images/reference/device-connectivity-apis/client-side-rpc-http-5-ce.png
        title: 'You should receive a response from the server'

---

{% include docs/reference/http-api.md %}
