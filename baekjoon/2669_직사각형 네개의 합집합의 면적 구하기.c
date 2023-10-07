#include <stdio.h>

int main() 
{
    int i = 0;
    int array[101][101];
    while (i < 101)
    {
        int j = 0;
        while (j < 101)
        {
            array[i][j] = 0;
            j++;
        }
        i++;
    }
    
    int x, y, x_1, y_1;
    int count = 0;
    
    int index = 1;
    while (index <= 4)
    {
        scanf("%d %d %d %d", &x, &y, &x_1, &y_1);
        int j = 0;
        while(x <= x_1-1)
        {
            array[x][y+j] = 1;
            j++;
            if (y+j == y_1)
            {
                x++;
                j = 0;
            }
        }
        index++;
    }
    i = 1;
    while (i <= 100)
    {
        int j = 1;
        while (j<= 100)
        {
            if (array[i][j] == 1)
                count++;
            j++;
        }
        i++;
    }
    printf("%d", count);
    return 0;
}