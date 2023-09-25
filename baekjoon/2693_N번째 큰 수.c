#include <stdio.h>
#include <stdlib.h>

int compare_function(int *a, const void *b) 
{
    return (*(int*)a - *(int*)b);
}

int main() 
{
    int A, num;
    scanf("%d", &A);
    int temp[10];
    while (A)
    {
        int i = 0;
        while(i < 10)
        {
            //temp[i] = scanf("%d", &num); scanf() 함수는 입력받은 값의 개수를 반환하므로 이렇게 쓰면 안된다.
            scanf("%d", &temp[i]);
            i++;
        }
        qsort(temp, 10, sizeof(int), compare_function);
        printf("%d", temp[7]);
        A--;
        if (A != 0)
            printf("\n");
    }
    return 0;
}

/*
qsort() 함수는 배열을 정렬하는 함수
첫 번째 인자 (base): 정렬할 배열의 시작 주소를 가리키는 포인터.
두 번째 인자 (nmemb): 배열의 요소 개수.
세 번째 인자 (size): 배열의 각 요소의 크기(바이트)입니다. 일반적으로 sizeof(배열의 요소 타입)로 설정.
네 번째 인자 (compar): 비교 함수(Compare Function)의 포인터.
*/