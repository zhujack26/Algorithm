#include <stdio.h>

int main() 
{
    int station = 1;
    int off, on;
    int num = 0;
    int num_max = 0;
    
    while (station < 11)
    {
        scanf("%d %d", &off, &on);
        num = num - off;
        if (num > num_max)
            num_max = num;
        num = num + on;
        if (num > num_max)
            num_max = num;
        station++;
    }
    printf("%d", num_max);
    return 0;
}