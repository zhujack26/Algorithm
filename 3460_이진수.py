T = int(input())

while T > 0:
    n = int(input())
    i = 0
    buf = [0] * 32
    while n > 0:
        buf[i] = n % 2
        if buf[i] == 1 :
            print(i, end=' ')
        n = n//2
        i = i + 1
    T = T - 1
if T > 0 :
    print()