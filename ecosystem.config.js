module.exports = {
    apps: [{
        name: 'API',
        script: 'bin/server.js',
        instances : 2,
        env: {
            NODE_ENV: 'development'
        },
        env_production: {
            NODE_ENV: 'production'
        },

    }],

    deploy: {
        production: {
            user: 'node',
            host: '103.237.147.88',
            ref: 'origin/master',
            repo: 'git@github.com:huystart17/project.huyhuy17.xyz.git',
            path: '/home/huyhuy17/project.huyhuy17.xyz/public',
            'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production'
        }
    }
};
