/* fread example: read an entire file */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>

int main () {
  system("./xxd paper.pdf > temp.txt");
  system("./xxd -r temp.txt > temp.pdf");
  return 0;
}
// #include <stdio.h>
// #include <stdlib.h>
// #include <string.h>

// char *DumpHex2(const void *data, size_t size)
// {
//   const int symbolSize = 100;
//   char *buffer = calloc(10 * size, sizeof(char));
//   char *symbol = calloc(symbolSize, sizeof(char));

//   char ascii[17];
//   size_t i, j;
//   ascii[16] = '\0';
//   for (i = 0; i < size; ++i)
//   {
//     snprintf(symbol, symbolSize, "%02X ", ((unsigned char *)data)[i]);
//     strcat(buffer, symbol);
//     memset(symbol, 0, strlen(symbol));
//     if (((unsigned char *)data)[i] >= ' ' && ((unsigned char *)data)[i] <= '~')
//     {
//       ascii[i % 16] = ((unsigned char *)data)[i];
//     }
//     else
//     {
//       ascii[i % 16] = '.';
//     }
//     if ((i + 1) % 8 == 0 || i + 1 == size)
//     {
//       strcat(buffer, " ");
//       if ((i + 1) % 16 == 0)
//       {
//         snprintf(symbol, symbolSize, "|  %s \n", ascii);
//         strcat(buffer, symbol);
//         memset(symbol, 0, strlen(symbol));
//       }
//       else if (i + 1 == size)
//       {
//         ascii[(i + 1) % 16] = '\0';
//         if ((i + 1) % 16 <= 8)
//         {
//           strcat(buffer, " ");
//         }
//         for (j = (i + 1) % 16; j < 16; ++j)
//         {
//           strcat(buffer, "   ");
//         }
//         snprintf(symbol, symbolSize, "|  %s \n", ascii);
//         strcat(buffer, symbol);
//         memset(symbol, 0, strlen(symbol));
//       }
//     }
//   }

//   free(symbol);

//   return buffer;
// }

// int main(int argc, char *argv[])
// {
//   printf("%s", DumpHex2(argv[1], 2000));

//   return 0;
// }