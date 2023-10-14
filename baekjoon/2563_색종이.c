#include <stdio.h>

int main() 
{
    int N, left, down;    
    scanf("%d", &N);
    char array[101][101];
    
    for (int i = 0; i < 101; i++)
    {   
        for (int j = 0; j < 101; j++)
            array[i][j] = 0;
    }
    
    for (int i = 0; i < N; i++)
    {
        scanf("%d %d", &left, &down);
        for (int j = 0; j < 10; j++)
        {
            for (int k = 0; k < 10; k++)
                array[down+j][left+k] = 1;        
        }
    }
    int count = 0;
    for (int i = 0; i < 101; i++)
    {   
        for (int j = 0; j < 101; j++)
        {   
            if (array[i][j])
                count++;
        }
    }
    printf("%d", count);
    return 0;
}