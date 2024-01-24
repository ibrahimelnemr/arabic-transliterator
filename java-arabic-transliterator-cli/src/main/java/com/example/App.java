package com.example;
import org.python.util.PythonInterpreter;

/**
 * Hello world!
 *
 */
public class App 
{
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        
        String jythonJarPath = "jython-standalone-2.7.3.jar";

        String classpath = System.getProperty("java.class.path");
        classpath += ":" + jythonJarPath;

        System.setProperty("java.class.path", classpath);
        String pythonHelloWorldScriptPath = "src/main/python/HelloWorld.py";
        String pythonScriptPath = "src/main/python/JythonTransliterator.py";

        PythonInterpreter python = new PythonInterpreter();
        python.execfile(pythonHelloWorldScriptPath);
        python.execfile(pythonScriptPath);
    }
}
