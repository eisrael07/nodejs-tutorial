const os = require('os')

const currentOS = {
    user: os.userInfo(),
    uptime: os.uptime(),
    name: os.type(),
    release: os.release(),
    version: os.version(),
    freeMemory: os.freemem(),
    totalMemory: os.totalmem(),
    endOfLine : os.EOL,
    arch: os.arch(),
    constants: os.constants,
    logicalCores: os.cpus(),
    endianness: os.endianness(),
    pidPriority: os.getPriority(),
    homedir: os.homedir(),
    hostname: os.hostname(),
    loadAverage: os.loadavg(),
    networkInterfaces: os.networkInterfaces(),
    platform: os.platform(),
    tempDir : os.tmpdir(),
}

console.log(currentOS);