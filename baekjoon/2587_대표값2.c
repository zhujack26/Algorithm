#include <stdio.h>

int main() 
{
    int input, temp;
    int average = 0;
    int buf[5];
    for(int i = 0; i < 5; i++)
    {
        scanf("%d", &input);
        average = average + input;
        buf[i] = input;
    }
    average = average / 5;
    
    for(int i = 0; i < 4; i++)
    {
        for(int j = 0; j < 4-i ; j++)
        {
            if (buf[j] > buf[j+1])
            {
                temp = buf[j];
                buf[j] = buf[j+1];
                buf[j+1] = temp;
            }
        }
    }
    printf("%d\n%d", average, buf[2]);
    return 0;
}