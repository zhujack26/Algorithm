#include <stdio.h>

int main(void)
{
    int T, n;
    scanf("%d\n", &T);
    int i = 0;
    while (T != 0)
    {
        char buf[32];  
        scanf("%d", &n);
        while(n > 0)
        {
            buf[i] = n % 2;
            if (buf[i] == 1)
                printf("%d ", i);
            n = n / 2;
            i++;
        }
        T = T - 1;
        if(T > 0)
            printf("\n");
        i = 0;
    }
    return(0);
}