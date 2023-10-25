import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int A = Integer.parseInt(br.readLine());
        int B = Integer.parseInt(br.readLine());
        int result_3 = A * (B % 10);
        int result_4 = A * ((B % 100) / 10);
        int result_5 = A * (B / 100);
        int result_6 = result_5 * 100 + result_4 * 10 + result_3;
        System.out.println(result_3);
        System.out.println(result_4);
        System.out.println(result_5);
        System.out.print(result_6);
    }
}
