GIT_WORK_TREE=~/node-blog
export GIT_WORK_TREE
forever stop app.js &
wait && echo "[Server Stopped]"
wait && git pull origin master &
wait && echo "[Updated repo to origin master]"
wait && forever start app.js &
wait && echo "[Server Started]"
wait && echo "[Update Completed"]
