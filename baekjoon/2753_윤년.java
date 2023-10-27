import java.io.*;

class Main {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        int year = Integer.parseInt(br.readLine());
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        int result = 1;
        if (year % 4 != 0)
            result = 0;
        else if (year % 100 == 0){   
            result = 0;
            if (year % 400 == 0)
                result = 1;
        }
        bw.write(String.valueOf(result));
        bw.close();
    }
}