#include <stdio.h>
#include <stdlib.h>

int main() {
	FILE *ls = popen("sudo docker ps | grep PORTS", "r");
	char buf[256];
	if (fgets(buf, sizeof(buf), ls)) {
		printf("%s", buf);
	}
	else
		system("echo Not running");
	pclose(ls);
}
