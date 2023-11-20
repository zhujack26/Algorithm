import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        int number = Integer.parseInt(br.readLine());
        int result = 0;
        for (int i = 0; i < N; i++) {
            result = result + (Integer.toString(number).charAt(i) - '0');
            /*정수 자료형에 담기에 너무 크다.
            54321 가능
            2147483647 초과시 오버플로우
            */
        }
        bw.write(result + "");
        bw.close();
    }
}


import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int N = Integer.parseInt(br.readLine());
        String number = br.readLine();
        int result = 0;
        for (int i = 0; i < N; i++) {
            result = result + (number.charAt(i) - '0');
        }
        bw.write(result + "");
        bw.close();
    }
}