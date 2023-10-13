#include <stdio.h>
#include <stdlib.h>

int main()
{
    int A, B;
    char string_A[4];
    char string_B[4];
    char buf;
    
    scanf("%d %d", &A, &B);
    
    sprintf(string_A,"%d", A);
    buf = string_A[0];
    string_A[0] = string_A[2];
    string_A[2] = buf;

    sprintf(string_B,"%d", B);
    buf = string_B[0];
    string_B[0] = string_B[2];
    string_B[2] = buf;

    int num_A = atoi(string_A);
    int num_B = atoi(string_B);
    
    if (num_A > num_B)
        printf("%d", num_A);
    else
        printf("%d", num_B);
    return 0;
}