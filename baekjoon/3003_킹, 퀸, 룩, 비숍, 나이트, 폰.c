//solution 1
#include <stdio.h>

int main() {
    int chess[6] = {1, 1, 2, 2, 2, 8};
    int input;
    for (int i = 0; scanf("%d", &input) == 1; i++)
        printf("%d ", chess[i] - input); 
    return 0;
}

//solution 2
#include <stdio.h>

int main() {
    int chess[6] = {1, 1, 2, 2, 2, 8};
    int input;
    int i = 0;
    while (i < 6)
    {
        scanf("%d", &input);
        printf("%d ", chess[i] - input);
        i++;
    }
    return 0;
}