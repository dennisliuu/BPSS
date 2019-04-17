#!/bin/bash
result=$(sudo docker ps | grep PORTS > /dev/null && echo Running)

while true; do 
	if [[ "$result" != "" ]];then
    	echo "Running"
	else
    	echo "Not Running"
		sudo docker run mongo
	fi
	sleep 18000
done
