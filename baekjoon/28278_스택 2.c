#include <stdio.h>

int main() 
{
    int N;
    scanf("%d", &N);
    int input, X;
    int buf[1000001];
    int count = 0;
    for (int i = 0; i < N; i++)
    {
        scanf("%d", &input);
        if (input == 1) //정수 X를 스택에 넣는다.
        {
            scanf("%d", &X);
            buf[count] = X;
            count++;
        }
        else if (input == 2) // 스택에 정수가 있다면 맨 위의 정수를 빼고 출력한다. 없다면 -1을 대신 출력한다.
        {
            if (buf[0])
            {
                printf("%d", buf[count-1]);
                buf[count-1] = '\0';
                count--;
            }
            else
                printf("-1");
        }
        else if (input == 3) // 스택에 들어있는 정수의 개수를 출력한다.
            printf("%d", count);
        else if (input == 4) //스택이 비어있으면 1, 아니면 0을 출력한다.
        {
            if (buf[0])
                printf("0");
            else
                printf("1");
        }
        else if (input == 5) //스택에 정수가 있다면 맨 위의 정수를 출력한다. 없다면 -1을 대신 출력한다.
        {
            if (buf[0])
                printf("%d", buf[count-1]);
            else
                printf("-1");
        }
        if (input != 1 && !(i == N-1))
            printf("\n");
    }
    return 0;
}