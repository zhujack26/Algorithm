#include <stdio.h>

int main() 
{
    int M, N, j;
    scanf("%d %d", &M, &N);
    int i = M;
    int result_sum = 0;
    int result_min = 0;
    while (i <= N)
    {
        j = 2;
        while (j < i)
        {
            if (i % j == 0)
                break;
            j++;
            if (j == i)
            {
                result_sum = result_sum + i;
                if (result_sum == i)  //첫 번째 소수이면(가장 작은 소수이면)
                    result_min = i;
            }
        }
        i++;
    }
    if (M < 3 && N != 1)
    {
        result_sum = result_sum + 2;
        result_min = 2;
    }
    if (result_min == 0)
    {
        printf("-1");
        return (0);
    }
    printf("%d\n%d", result_sum, result_min);
}