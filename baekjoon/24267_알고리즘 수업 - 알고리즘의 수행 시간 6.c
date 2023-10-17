#include <stdio.h>

long long abc(long long nb)
{
	return nb * (nb + 1) / 2;
}

int main() {
    long long n;
    scanf("%lld", &n);
    long long count = 0;
    for(long long i = 1; i <= n - 2; i++)
    {
        count = count + abc(n-1-i);
    }    
    printf("%lld\n3", count);
    return 0;
}