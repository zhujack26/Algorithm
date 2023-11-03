import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int i = 1;
        while (i > 0) {
            int num = Integer.parseInt(br.readLine());
            if (num == 0)
                break;
            if (i > 1)
                bw.write("\n");
            String num_str = String.valueOf(num);
            for (int j = num_str.length() - 1; j >= 0; j--) {
                if (num_str.charAt(j) != num_str.charAt(num_str.length() -1 - j)) {
                    bw.write("no");
                    break;
                }
                if (j == 0)
                    bw.write("yes");
            }
            i++;
        }
        bw.close();
    }
}