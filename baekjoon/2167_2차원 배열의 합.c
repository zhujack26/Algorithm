#include <stdio.h>

int main() 
{
    int N, M, K, i, j, x, y, location_r, location_c;
    scanf("%d %d", &N, &M);
    int array[N][M];
    
    for (int a = 0; a < N; a++)
    {
        for (int b = 0; b < M; b++)
        {
            scanf("%d", &array[a][b]);
        }
    }
    scanf("%d", &K);

    while (K > 0)
    {
        scanf("%d %d %d %d", &i, &j, &x, &y);
        location_r = i - 1;
        location_c = j - 1;
        int result = 0;
        
        while (location_r < x)
        {   
            result = result + array[location_r][location_c];
            location_c++;
            if (location_c == y-1)
            {
                result = result + array[location_r][location_c];
                location_c = j-1;
                location_r++;
                if (location_r == x-1)
                {
                    printf("%d", result);
                    break;
                }
            }
        }
        if (K > 1)
            printf("\n");
        K--;
    }
    return 0;
}