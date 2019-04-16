#!/bin/bash
result=$(pgrep docker > /dev/null && echo 1)

while true; do 
	if [[ "$result" != "" ]];then
    	echo "Running"
	else
    	echo "Not Running"
	fi
	sleep 18000
done
