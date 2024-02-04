#include <stdio.h>

int main() 
{
    int a, b, i, result_max, result_min;
    result_min = 1;
    i = 1;
    
    scanf("%d %d", &a, &b);
    while(i <= a || i <= b)
    {
        if ((a % i == 0) && (b % i == 0))
            result_max = i; 
        i++;
    }
    i = 2;
    while(i <= a || i <= b)
    {
        if ((a % i == 0) && (b % i == 0))
        {
            a = a / i;
            b = b / i;
            result_min = result_min * i;
        }
        else if((a % i != 0) || (b % i != 0))
            i++;
        //최소공배수 구하는 법 (공통 소인수로 몫이 서로소가 될 때까지 나오고 모두 곱하기)
    }
    result_min = result_min * a * b;
    printf("%d\n%d", result_max, result_min);
    return 0;
}
