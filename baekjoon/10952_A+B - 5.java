import java.io.*;
import java.util.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int i = 1;
        while (i > 0) {
            StringTokenizer st = new StringTokenizer(br.readLine());
            int A = Integer.parseInt(st.nextToken());
            int B = Integer.parseInt(st.nextToken());
            int result = A + B;
            if (A == 0)
                break;
            if (i == 1)
                bw.write("" + result);
            else if (i > 1) {
                bw.write("\n");
                bw.write("" + result);
            }
            i++;
        }
        bw.close();
    }
}