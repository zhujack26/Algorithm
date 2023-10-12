#include <stdio.h>

int main() 
{
    int N;
    int score;
    int max_score = 0;
    int i = 0;
    double result = 0;
    double buf[1000];
    scanf("%d", &N);
    while(i < N)
    {
        scanf("%d", &score);
        buf[i] = score;
        if (score > max_score)
            max_score = score;
        i++;
    }
    int j = 0;
    while (j < N)
    {
        buf[j] = (buf[j] / max_score) * 100;
        result = result + buf[j];
        j++;
    }
    result = result / j;
    printf("%f", result);
    return 0;
}