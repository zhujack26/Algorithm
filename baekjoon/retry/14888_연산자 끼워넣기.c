#include <stdio.h>

int maxResult = -1000000000;
int minResult = 1000000000;
int N, plus, minus, multi, div;
int array[11];

void dfs(int idx, int result) 
{
    if (idx == N) 
    {
        if (result > maxResult)
            maxResult = result;
        if (result < minResult)
            minResult = result;
        return;
    }

    if (plus > 0) 
    {
        plus--;
        dfs(idx + 1, result + array[idx]);
        plus++;
    }

    if (minus > 0) 
    {
        minus--;
        dfs(idx + 1, result - array[idx]);
        minus++;
    }

    if (multi > 0) 
    {
        multi--;
        dfs(idx + 1, result * array[idx]);
        multi++;
    }

    if (div > 0) 
    {
        div--;
        dfs(idx + 1, result / array[idx]);
        div++;
    }
}

int main() 
{
    scanf("%d", &N);
    int i = 0;
    while (i < N)
        scanf("%d", &array[i++]);
    scanf("%d %d %d %d", &plus, &minus, &multi, &div);
    dfs(1, array[0]);
    printf("%d\n%d", maxResult, minResult);
    return 0;
}