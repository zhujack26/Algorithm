#include <stdio.h>

int main() 
{
    int N, M, num;
    
    scanf("%d %d", &N, &M);
    
    int sequence[N];
    int i = 0;
    int result = 0;
    int part_sum = 0;
    int location = 0;
    
    while(i < N)
    {
        scanf("%d", &num);
        sequence[i] = num;
        i++;
    }
    i = 0;
    location = 0;
    while(i < N)
    {
        part_sum = part_sum + sequence[i];
        if (part_sum == M)
        {
            location++;
            i = location - 1;
            result++;
            part_sum = 0;
        }
        else if (part_sum > M)
        {
            location++;
            i = location - 1;
            part_sum = 0;
        }
        i++;
    }
        
    printf("%d", result);
    return 0;
}