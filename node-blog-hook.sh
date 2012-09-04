cd ~/node-blog
forever stop app.js &
wait && echo "[Server Stopped]"
wait && git pull origin master &
wait && echo "[Updated repo to origin master]"
wait && forever start app.js &
wait && echo "[Server Started]"
wait && echo "[Update Completed"]
