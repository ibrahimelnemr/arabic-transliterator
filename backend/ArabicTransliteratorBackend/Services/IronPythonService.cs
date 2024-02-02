using System;
using IronPython.Hosting;
using Microsoft.Scripting.Hosting;

public class IronPythonService
{
    public string ExecutePythonScript()
    {
        var engine = Python.CreateEngine();
        var scope = engine.CreateScope();
        engine.ExecuteFile("../../Transliterator.py", scope);
        dynamic testFunction = scope.GetVariable("test_function");
        dynamic testClass = scope.GetVariable("TestClass");
        
        dynamic classInstance = engine.Operations.CreateInstance(testClass);
        
        string testClassFunctionResult = classInstance.test_class_function();
        string testFunctionresult = testFunction();

        Console.WriteLine("Test function result:");
        Console.WriteLine(testFunctionresult);
        Console.WriteLine();
        Console.WriteLine("Test class function result:");
        Console.WriteLine(testClassFunctionResult);
        return testClassFunctionResult;
    }
    
}