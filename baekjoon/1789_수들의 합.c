#include <stdio.h>

int main() 
{
    unsigned long long int S;
    scanf("%lld", &S);
    unsigned long long int i = 1;
    unsigned long long int buf = 0;
    while (buf < S)
    {
        buf = buf + i;
        if (buf > S)
            break;
        i++;
    }
    printf("%lld", i - 1);
    return 0;
}
//데이터 형식 수정