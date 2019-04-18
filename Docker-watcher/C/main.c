#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main()
{
	while (1)
	{
		// Replace TARGET_IMAGE to images name
		FILE *ls = popen("sudo docker ps | grep TARGET_IMAGE", "r");
		char buf[256];
		if (fgets(buf, sizeof(buf), ls))
		{
			printf("%s running", buf);
		}
		else
			system("echo Not running");
			// DO SOMETHING
		pclose(ls);
		// Every 10 mins check.
		sleep(3600);
	}
}
