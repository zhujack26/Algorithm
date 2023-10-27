import java.io.*;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int N = Integer.parseInt(br.readLine());
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        for(int i = 1; i <= 9; i++)
        {
            bw.write(N + " * " + i + " = " + (N * i));
            if (i != 9)
                bw.newLine();
        }
        bw.close();
    }
}
/*
"문자열 연결" 
자바는 문자열과 다른 타입 간의 연산 시 자동으로 문자열로 변환하여 처리.
N이 int 타입이더라도 다른 문자열과 함께 사용될 때 자동으로 문자열로 변환.
따라서, 이 코드는 문자열 연산을 이용하여 bw.write 메서드에 넘겨주는 것이기에 따로 형변환이 필요치 않다.*/