N, K = map(int, input().split())
i = 1
while i <= N :
    if N % i == 0:
        K = K - 1
        if K == 0:
            print(i)
    i = i+1
if K > 0:
    print(0)