module.exports = {
  apps: [{
    name: "lemolite-nextjs",
    cwd: "/home/react/lemolite-nextjs",
    script: "node_modules/next/dist/bin/next",
    args: "start -p 8000",
    env: {
      NODE_ENV: "production",
      NEXT_TELEMETRY_DISABLED: "1",
      CI: "1"
    },
    instances: 1,
    autorestart: true,
    max_restarts: 5,
    min_uptime: 10000,
    max_memory_restart: "600M"
  }]
}
