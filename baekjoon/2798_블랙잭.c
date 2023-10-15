#include <stdio.h>

int main() 
{
    int N, M, input;
    scanf("%d %d", &N, &M);
    int array[N];
    for (int i = 0; i < N; i++)
    {
        scanf("%d", &input);
        array[i] = input;
    }
    int dif_max = 300000;
    int dif;
    int result;
    
    for (int i = 0; i< N-2; i++)
    {
        for (int j = i+1; j < N-1; j++)
        {
            for (int k = j+1; k < N; k++)
            {
                dif = M - (array[i] + array[j] + array[k]);
                if (dif < dif_max && dif >= 0)
                {
                    result = array[i] + array[j] + array[k];
                    dif_max = dif;
                }
            }
        }
    }
    printf("%d", result);
    return 0;
}