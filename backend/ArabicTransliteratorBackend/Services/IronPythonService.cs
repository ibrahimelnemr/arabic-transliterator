using System;
using IronPython.Hosting;
using Microsoft.Scripting.Hosting;

public class IronPythonService
{
    public string ExecutePythonScript()
    {
        var engine = Python.CreateEngine();
        var scope = engine.CreateScope();
        // engine.ExecuteFile("../../Transliterator.py", scope);
        // engine.ExecuteFile("../../Transliterator.py");
        // var scope = engine.GetSysModule();
        // engine.ExecuteFile("../../test.py", scope);
        engine.ExecuteFile("../../Transliterator.py", scope);
        dynamic testFunction = scope.GetVariable("test_function");
        string result = testFunction();
        Console.WriteLine(result);
        // var testFunction = engine.GetVariable<Func<string>>("s");
        return result;
    }
    
}