#include <stdio.h>
#include <string.h>
#include <stdlib.h>

int main() 
{
    int N;
    char buf[7];
    scanf("%d", &N);
    sprintf(buf, "%d", N);
    int len= strlen(buf);
    int M = 1000000;
    for(int i = N-1; i > 0; i--)
    {
        int result = i; //215부터 줄여가며 검사
        int temp = i;
        for (int j = len; j > 0; j--)
        {   
            result = result + (temp % 10);
            temp = temp / 10;
        }
        if (result == N && i <= M)
            M = i;
    }
    if (M == 1000000)
    {
        printf("0");
        return 0;
    }
    printf("%d", M);
    return 0;
}