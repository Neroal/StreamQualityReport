const RTMP_CONFIG = {
    SERVER_URL: 'http://10.20.30.130:8000/rtmp/calculate_topiq',
    DURATION: 3,
    CHANNELS: [
        "rtmp://10.22.1.201/cb/BTCB02",
        "rtmp://10.22.1.201/cb/BTCB02m",
        "rtmp://10.22.1.201/cb/BTCB03",
        "rtmp://10.22.1.201/cb/BTCB03m",
    ]
}

const FLV_CONFIG = {
    SERVER_URL: 'http://10.20.30.130:8000/flv/calculate_topiq'
}

const CONFIG = {
    RTMP_CONFIG: RTMP_CONFIG,
    FLV_CONFIG: FLV_CONFIG
}

module.exports = CONFIG