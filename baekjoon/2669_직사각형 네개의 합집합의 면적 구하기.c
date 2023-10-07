#include <stdio.h>

int main() 
{
    int array[101][101];
    int x, y, x_1, y_1;
    int i = 0;
    int count = 0;
    while (i < 4)
    {
        scanf("%d, %d, %d, %d", &x, &y, &x_1, &y_1);
        while(x <= x_1)
        {
            array[x][y] = 1;
            y++;
            if (y == y_1)
            {
                x++;
                j = 0;
            }
        }
        i++;
    }
    i = 1;
    while (i < 101)
    {
        int j = 1;
        while (j< 101)
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