/* fread example: read an entire file */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main () {
  system("./xxd paper.pdf > temp.txt");
  system("./xxd -r temp.txt > temp.pdf");
  return 0;
}