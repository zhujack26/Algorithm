#include <stdio.h>

int main (void)
{
  int N;
  int K;
  scanf("%d %d", &N, &K);
  int i = 1;

  while (i <= N)
  {
    if (N % i == 0)
    {
      K = K - 1;
      if (K == 0)
      {
        printf("%d", i);
        return (0);
      }
    }
    i++;    
  }
  printf("0");
  return (0); 
}
