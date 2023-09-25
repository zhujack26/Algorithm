#include <stdio.h>

int main() 
{
    int N, num, i, j, result;
    result = 0;
    i = 1;
    
    scanf("%d", &N);
    while (i <= N)
    {
        scanf("%d", &num);
        j = 2;
        if (num == 2)
            result++;
        while(j < num)
        {
            if (num % j == 0)
                break;
            j++;
            if (j == num)
            {
                result++;
                break;
            }
        }
        i++;
    }
    printf("%d", result);
}