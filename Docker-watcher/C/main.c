#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>

int main(int argc, char *argv[])
{
	while (1)
	{
		FILE *ls = popen("docker ps", "r");
		char buf[256];
		fgets(buf, sizeof(buf), ls);
		// Replace TARGET_IMAGE to images name
		char* pPosition = strstr(buf, argv[1]);
		if (pPosition)
		{
			printf("%s running\n", pPosition);
		}
		else
			system("echo Not running");
			// DO SOMETHING
		pclose(ls);
		// Every 10 mins check.
		sleep(1);
	}
}
