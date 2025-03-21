cd /var/www/html
npm config set user 0
npm config set unsafe-perm tru
npm i
pm2 stop all
pm2 start src/server.js 