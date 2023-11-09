import java.io.*;

public class Main {
    public static void main(String[] args) throws IOException {
        int max_input = 0;
        int result = 0;
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        for (int i = 0; i < 9; i++) {
            int input = Integer.parseInt(br.readLine());
            if (input > max_input)
            {   
                max_input = input;
                result = i + 1;
            }
        }
        bw.write("" + max_input);
        bw.write("\n" + result);
        bw.close();
    }
}