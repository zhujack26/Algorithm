#include <stdio.h>

int main() 
{
    int S;
    scanf("%d", &S);
    int i = 1;
    int buf = 0;
    while (i < S)
    {
        buf = buf + i;
        if (buf == S)
            break;
        i++;
    }
    printf("%d", i);
    return 0;
}