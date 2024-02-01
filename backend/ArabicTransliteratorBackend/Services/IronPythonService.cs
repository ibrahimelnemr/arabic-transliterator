using System;
using IronPython.Hosting;
using Microsoft.Scripting.Hosting;

public class IronPythonService
{
    public void ExecutePythonScript()
    {
        var engine = Python.CreateEngine();
        var scope = engine.CreateScope();
        string pythonCode = "print('Hello from Ironpython')";
        engine.Execute(pythonCode, scope);
        engine.ExecuteFile("../../Transliterator.py",scope);


    }
    
}