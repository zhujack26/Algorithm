#include <stdio.h>

int main() 
{
    int N, num;
    scanf("%d\n", &N);
    int temp[2];
    int i = 0;
    while (N > 0)
    {
        scanf("%d ", &num);
        if (i == 0)
        {
            temp[0] = num;
            temp[1] = num;
        }
        else if(i > 0)
        {
            if (num >= temp[1])
                temp[1] = num;
            if (num < temp[0])
                temp[0] = num;
        }
        i++;
        N--;
    }
    printf("%d %d", temp[0], temp[1]);
    return (0);
}