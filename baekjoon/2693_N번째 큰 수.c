#include <stdio.h>

int main() 
{
    int temp[1050];  //여기서 1000으로 설정하면 에러가 발생, 백준에서는 런타임에러, 다른 곳에서는 stack smashing detected 
    int i = 1;
    int A, B, result;
    int location = 0;
    int buf = 0;
    int flag = 1;
    
    while(flag)
    {
        buf = buf + i;  //buf 크기 : 1, 3, 6, 10 ...
        while(location < buf)
        {
            temp[location] = i;
            location++;
            if (location == 1000)
                flag = 0;
        }
        i++;
    }
    scanf("%d %d", &A, &B);
    result = 0;
    while (A <= B)
    {
        result = result + temp[A-1]; 
        A++;
    }
    printf("%d", result);
}